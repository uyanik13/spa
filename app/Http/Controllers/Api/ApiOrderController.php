<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Mail\OrderStatusChanged;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\ApiController;
use App\Models\User;

class ApiOrderController  extends ApiController
{

    public function __construct(Request $request)
    {
        $this->user = auth()->setRequest($request)->user();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $postAdmin = Order::where('status', 1)->orderBy('created_at', 'desc')->get();
        $postUser = Order::where('user_id',Auth::user()->id)->where('status', 1)->orderBy('created_at', 'desc')->get();
        $post = Auth::user()->role === 'admin' ? $postAdmin : $postUser ;


        return $post;

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $order_id = Carbon::now()->timestamp;
        $data = User::find(Auth::user()->id);
        $new2= new Order();
        $new2->user_id = $data->id;
        $new2->order_details = 'paket adı';
        $new2->price = $request->price;
        $new2->order_id = $order_id;
        $new2->save();


        $partners = $request->partners;
        if (isset($partners)){
            foreach ($partners as $partner){
                $new= new Order();
                $new->user_id = $partner;
                $new->order_details = 'paket adı';
                $new->order_id = $order_id;
                $new->price = $request->price;
                $new->save();
            }
        }
        return  redirect('order-summary/'.$order_id);


        // $order = Order::create([
        //     'user_id' => $this->user->id,
        //     'order_details' => $request->all(),
        //     'msg' => $request->payload["msg"]
        // ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        if ($this->user->role !== 'admin') {
            return $this->responseUnauthorized();
        }

        $order = Order::where('id', $id)->first();
        $orderUser = User::where('id', $order->user_id)->first();

        $order->order_status = $request->order_status;
        $order->save();

        Mail::to($orderUser)->send(new OrderStatusChanged($order));

        return response()->json($order);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = Order::find($request->id);
        $forDeleteInUserReference = User::find($data->user_id);
        $forDeleteInUserReference->reference_id = null;
        $forDeleteInUserReference->save();
        $data->delete();
        return response()->json(['message'=>200]);

    }
    public function resetOrders(Request $request){
        $orders = json_decode($request['orders'][0],true)/*[0]['id']*/;
        foreach ($orders as $order) {
            $data = Order::find($order['id']);
            $userId = $data->user_id;
            $data->delete();
            User::find('user_id',$userId)->reference_id = null;
        }
        return redirect('/');
    }
}
