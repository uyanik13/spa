<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use RealRashid\SweetAlert\Facades\Alert;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\Api\ApiOrderController;
use App\Http\Controllers\CalendarInfoController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Api\ApiPaymentController;
use App\Http\Controllers\Api\ApiAppointmentController;




//dd(Auth::user());



Route::any('panel/{path}', function () {
    return view('layouts.vue');
})->where('path', '(.*)');



    Route::group(['middleware' => 'web'], function () {

    Route::get('/', [PageController::class, 'pageView']);
    Route::get('/{path}', [PageController::class, 'pageView']);


    Route::get('/checkout/{id}',  [PageController::class, 'pageView'])->name('package.find');
    Route::get('/category/{name}', [PageController::class, 'pageView'])->name('category.find');
    Route::get('/service/{name}', [PageController::class, 'pageView'])->name('service.find');
    Route::get('/product/{name}', [PageController::class, 'pageView'])->name('product.find');
    Route::get('/partner-details/{name}', [PageController::class, 'pageView'])->name('partner.find');
    Route::get('/blog-single/{post}', [PageController::class, 'pageView'])->name('post.find');
    Route::get('/haberler/{post}', [PageController::class, 'pageView'])->name('haber.show');
    Route::get('/payment/{id}', [PageController::class, 'pageView'])->name('payment.page');
    Route::get('/order-summary/{id}', [PageController::class, 'pageView'])->name('order.summary');
    Route::get('/order-complete/{id}', [PageController::class, 'pageView'])->name('order.complete');
    Route::get('//my-account-orderlist-detail/{id}', [PageController::class, 'pageView'])->name('order.orderlistDetails');
    Route::post('/payment/make', [ApiPaymentController::class, 'create_payment'])->name('payment.make');


    Route::post('/calendar/appointment', [PageController::class, 'calendarAppointment'])->name('calendar.appointment');
    Route::post('/calendar/register', [PageController::class, 'frontEndRegister'])->name('calendar.register');
    Route::post('/calendar/login', [PageController::class, 'frontEndLogin'])->name('calendar.login');
    Route::post('/calendar/checkout', [PageController::class, 'checkoutRegister'])->name('calendar.checkout');
    Route::post('/calendar/update-user', [PageController::class, 'userInfoUpdate'])->name('calendar.userinfoupdate');
    Route::post('/calendar/update-partner', [PageController::class, 'partnerUpdate'])->name('calendar.partnerUpdate');
    Route::post('/calendar/update-address', [PageController::class, 'userAddressUpdate'])->name('calendar.userAddressUpdate');
    Route::post('/calendar/another', [PageController::class, 'anotherPerson'])->name('calendar.anotherPerson');
    Route::post('/calendar/add-order', [ApiOrderController::class, 'store'])->name('calendar.addOrder');
    Route::post('/calendar/delete-order', [ApiOrderController::class, 'destroy'])->name('calendar.delete');
    Route::post('/calendar/reset-order', [ApiOrderController::class, 'resetOrders'])->name('calendar.resetOrders');
    Route::post('/calendar/set-payment-method', [ApiOrderController::class, 'setPaymentMethod'])->name('calendar.paymentMethod');


    Route::get('/search/product',[PageController::class, 'search_product'])->name('search_product');
    Route::get('/search/post',[PageController::class, 'search_product'])->name('search_post');
    Route::get('/search/user',[PageController::class, 'search_user'])->name('search_user');
    Route::post('/add_comment/{user_id}', [CommentController::class, 'store'])->name('add_comment_to_product');
    Route::post('/add_comment_post/{post_id}', [CommentController::class, 'storePostComment'])->name('add_comment_to_post');
    Route::any('/search', [PageController::class, 'search'])->name('search');
    Route::post('/live_search', [PageController::class, 'search_liveSearchproduct'] )->name('live_search');
    Route::post('/search/filter_product', [PageController::class, 'filter_product'])->name('filter_product');
    Route::post('/basket/render', [PageController::class, 'render_basket'] )->name('render_basket');
    Route::get('/basket/add_new', [PageController::class, 'add_to_basket'] )->name('render_basket');
    Route::post('/basket/delete', [PageController::class, 'delete_from_basket'] )->name('render_basket');
    Route::post('/ajax/contact-form', [ApiAppointmentController::class, 'store'])->name('contact.form');

    Route::post('/wish/update', [PageController::class, 'update_wish'] )->name('update_wish');
    Route::post('/wish/delete', [PageController::class, 'delete_wish'])->name('update_wish');
    Route::post('/wish/add', [PageController::class, 'add_wish'])->name('add_wish');

    Route::post('/user/update', [PageController::class, 'user_update'] )->name('user_update');
    Route::post('/user/address_create', [PageController::class, 'address_create'])->name('address_create');
    Route::post('/user/create_bill_address', [PageController::class, 'create_bill_address'])->name('create_bill_address');

    Route::post('/checkout/update',[PageController::class, 'checkout_update'])->name('checkout_update');
    Route::post('/checkout/guest-or-missing-data',[PageController::class, 'guest_or_missing_data'])->name('checkout.guest_or_missing_data');
    Route::post('/register', [RegisterController::class, 'user_register'])->name('register');


    Route::get('/ajax/logout',[PageController::class, 'ajaxLogout'])->name('ajax.logout');
    Route::get('/ajax/test',[PageController::class, 'testMethod'])->name('ajax.test');
    Route::post('/ajax/payment',[ApiPaymentController::class, 'create_payment'])->name('ajax.payment');
    Route::post('/ajax/email-order',[ApiPaymentController::class, 'create_email_order'])->name('ajax.email-order');
    Route::post('/ajax/email-contact',[ApiPaymentController::class, 'create_email_order2'])->name('ajax.email-contact');
    Route::post('/ajax/create-order',[ApiOrderController::class, 'store'])->name('ajax.order');

    Route::post('/ajax/createSession',[PageController::class, 'createSession'])->name('ajax.createSession');
    Route::get('/ajax/createAllDays',[CalendarInfoController::class, 'createAllDays'])->name('ajax.create.all.days');
    Route::get('/ajax/optimize',function (){
       $data = Artisan::call('optimize:clear');
        if($data){
            return "success";
        }

    });



    });




