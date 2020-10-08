<?php

namespace App\Http\Controllers\Api;

use DateTime;
use App\Models\User;
use App\Models\Order;
use App\Models\Payment;
use App\Models\Setting;
use App\Mail\ShortEmail;
use App\Mail\OrderCreated;
use App\Models\Appointment;
use App\Models\CalendarInfo;
use Cartalyst\Stripe\Stripe;
use Illuminate\Http\Request;
use App\utils\Helpers\Helper;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use SimpleSoftwareIO\QrCode\Facade as QrCode;

class ApiPaymentController extends Controller
{
    public function __construct()
    {
        $this->setting = Helper::namedSettings(Setting::all());
        $this->stripe = new Stripe(env('STRIPE_API_KEY'));
        $this->user = Auth::user();
        $this->admin = User::where('role', 'admin')->first();
    }

    public function create_payment(Request $request)
    {
        $validatedData = $request->validate([
            'confirm_terms' => 'accepted',
        ]);
        $locale = $request->server('HTTP_ACCEPT_LANGUAGE');
        $locale = substr($locale, 0, strpos($locale, ',') ?: strlen($locale));
        $paymentSuccess = true;
        $cartTotal = Helper::cartTotal();
        $cart = Helper::cart();
        if (($cart && count($cart) < 0) || $cartTotal == 0) {
            $ordersDetail = Helper::getOrders();
            $cartTotal = $request->order_total;
            $cartTotal = str_replace(',', '', $cartTotal);
            if (count($ordersDetail['orders']) > 0) {
                $paymentx = Payment::create([
                    'user_id' => $this->user->id,
                    'payment_country' => $locale,
                    'payment_id' => $request->order_id,
                    'payment_method' => 'stripe', //DO AOUTO
                    'amount' => $cartTotal,
                    'status' => 'pending',
                ]);
                //PAYMENT INTEGRATION AND SUCCESS
                if ($paymentSuccess) {
                    $appointment = session()->get('appointment');

                    foreach ($ordersDetail['orders'] as $key => $order) {
                        $order->status = 'completed';
                        $order->save();
                        $payment = Appointment::create([
                            'name' => $order->user->name,
                            'user_id' => $order->user->id,
                            'appointment_id' => $request->order_id,
                            'email' => $order->user->email,
                            'phone' => $order->user->phone,
                            'hours_between' =>  $appointment['timeRange'],
                            'appointment_date' => $appointment['dateInput'],
                            'status' => 'pending',
                        ]);
                    }
                        $payment->status = 'completed';
                        $payment->save();
                        $userCount = count($ordersDetail['orders']);
                        $selectedDay = CalendarInfo::where('day', $appointment['dateInput'])->where('time', $appointment['timeRange'])->first();
                        $selectedDay->quota = $selectedDay->quota - $userCount;
                        $selectedDay->save();
                        $user = Auth::user();
                        $email = $user->email;
                        $data = ['user' => $user, 'payment' => $paymentx,'appointment'=>$payment];
                        Mail::send('mail.order-placed', ["data" => $data], function ($message) use ($email) {
                            $message->to($email)
                                ->subject('AquaQuell - Ihre Bestellung wurde erstellt');
                        });
                    session()->forget('appointment');
                    return  redirect('order-complete/' . $request->order_id)->with('success', trans('lang.paymentFinish'));
                }
            }
           }

    }

    public function create_email_order(Request $request)
    {
        $data =  $request->all();
        Mail::to('info@anonymupload.com')->send(new OrderCreated($data));
        return redirect()->back();
    }

    public function create_email_order2(Request $request)
    {
        $data =  $request->all();
        Mail::to('info@kokoshangels.com')->send(new ShortEmail($data));
        return redirect()->back();
    }


}
