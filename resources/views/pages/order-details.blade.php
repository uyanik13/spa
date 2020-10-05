<style>
    .sidebar {
        width: 100%;
    }
</style>
@auth

    @php
        $partners=Helper::getPartners();
    $totalClient = count($partners)+1;
    $orderDetails = Helper::findCustomData('orderDetails');
    $calendarInfo = Helper::findCustomData('calendarInfo') ;
    if(isset($calendarInfo)){
    $price = $calendarInfo['price'];
    }

    @endphp



<div class="page_content_wrap page_paddings_yes">
    <div class="container">

            <form  action="{{route('calendar.addOrder')}}" id="addPaymentForm" method="post">
            @csrf
                <div class="row ">
            <div class="col-md-5">
                <div class="content">
                    <article class="post_item_excerpt post_item post">

                        <div class="post_content clearfix"
                            style="padding: 2em; background-color: #f5f5f5; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);">
                            <h3 class="post_title">
                                Buchen Für
                            </h3>
                            <div class="post_info">
                                <ul id="bookForArea">
                                    <li>
                                        <label class="toggleSwitch">
                                                <input type="checkbox" checked onclick="return false;">
                                            <span class="toggleSlider"></span>
                                        </label>
                                        <div>
                                                <h6>{{Auth::user()->name}}</h6>
                                            @isset($person->about_data) {{json_decode(Auth::user()->about_data,true)['birth_date']}}@endisset
                                        </div>
                                    </li>
                                        @isset($partners)
                                            @foreach($partners as $key=> $person)
                                    <li>
                                        <label class="toggleSwitch">
                                                        <input  id="checkbox_{{$key}}" name="partners[]" value="{{$person->id}}" type="checkbox" checked >
                                            <span class="toggleSlider"></span>
                                        </label>
                                        <div>
                                                        <h6>{{$person->name}}</h6>
                                                       @isset(json_decode($person->about_data,true)['birth_date']) {{   json_decode($person->about_data,true)['birth_date']}}@endisset
                                        </div>
                                    </li>
                                            @endforeach
                                        @endisset
                                    <li>
                                            <a href="/another-person-form">
                                            <i class="fa fa-user-plus"></i> weitere Person anlegen
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="col-md-7">
                <div class="sidebar widget_area scheme_original" role="complementary">
                    <aside class="widget widget_text">
                        <div id="bookingCheckoutInfos" class="sidebar_inner widget_area_inner">

                            @isset($orderDetails['title'])
                            <h3>{{$orderDetails['title']}}</h3>
                            @endisset
                            <div class="reservationLocatImg">
                                @isset($orderDetails['desc'])
                                <img src=" {{$orderDetails['image']}}" alt="">
                                @endisset

                            </div>
                            <div class="reservationDesc">
                                @isset($orderDetails['desc'])
                                {!! $orderDetails['desc'] !!}
                                @endisset
                            </div>
                            <div class="reservationDetailsList">

                                <ul>
                                    <li><span class="reservationSpeciment"><i class="fa fa-building"></i>
                                            Filiale:</span><span class="reservationSpecimentInfo">das
                                            Stadtwerk.Westbad</span></li>
                                    <li><span class="reservationSpeciment"><i class="fa fa-calendar"></i>
                                            Termin:</span><span class="reservationSpecimentInfo">
                                                {{substr((json_decode(session()->get('appointment'),true)['dateInput']),0,21 ) }}
                                              </span></li>

                                </ul>
                            </div>
                        </div>
                    </aside>
                    <aside class="widget widget_categories">
                        <div id="bookingPrice" class="sidebar_inner widget_area_inner">
                            <h3>Preis</h3>
                            <ul>
                                <li>
                                    <span>Saunatarif Spat</span>
                                        <span>{{number_format($totalClient*$price,2)}} €</span>
                                </li>
                                <li>
                                    <span>Gesamtpreis</span>
                                        <span>{{number_format($totalClient*$price,2)}} €</span>
                                </li>
                            </ul>
                            <div style="text-align: right;">
                                        <input type="hidden" id="price"     name="price" value="{{number_format($totalClient*$price,2)}}" >
                                        <a onclick="document.getElementById('addPaymentForm').submit()"
                                    class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup blue">
                                    <div>
                                        <span class="first"><i class="fa fa-shopping-cart"></i> In den
                                            Warenkorb</span>
                                        <span class="second"><i class="fa fa-shopping-cart"></i> In den
                                            Warenkorb</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

    </div>
            </form>
        </div>

</div>
@endauth
@guest
    <script >
        window.location.href = "/login-register";
    </script>
    @endguest
