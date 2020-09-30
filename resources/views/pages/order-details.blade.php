<style>
    .sidebar {
        width: 100%;
    }
</style>
@auth

    @php
        $partners=Helper::getPartners();
    $totalClient = count($partners)+1;
    @endphp



<div class="page_content_wrap page_paddings_yes">
    <div class="container">
        <div class="row">
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
                                                {{json_decode(Auth::user()->about_data,true)['birth_date']}}
                                        </div>
                                    </li>
                                        @isset($partners)
                                            @foreach($partners as $key=> $person)
                                    <li>
                                        <label class="toggleSwitch">
                                                        <input  id="checkbox_{{$key}}" type="checkbox" checked onclick="return false;">
                                            <span class="toggleSlider"></span>
                                        </label>
                                        <div>
                                                        <h6>{{$person->name}}</h6>
                                                        {{   json_decode($person->about_data,true)['birth_date']}}
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

                            <h3>Sauntarif Spat</h3>
                            <div class="reservationLocatImg">
                                <img src="https://www.placehold.it/450x200" alt="">
                            </div>
                            <div class="reservationDesc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus inventore
                                    delectus animi minus fuga facere possimus excepturi, vel fugiat mollitia. Quis
                                    nostrum minus eius dignissimos fuga aspernatur velit cum odio?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id deleniti totam
                                    magni laboriosam dolorem, praesentium veniam, sint dolores, exercitationem
                                    dolore accusantium eveniet nostrum. Quibusdam nemo, ea aliquam dolorem quo
                                    eligendi?
                                </p>
                            </div>
                            <div class="reservationDetailsList">
                                <h6>Montags (außer an Feiertagen) ist Damentag.</h6>
                                <ul>
                                    <li><span class="reservationSpeciment"><i class="fa fa-building"></i>
                                            Filiale:</span><span class="reservationSpecimentInfo">das
                                            Stadtwerk.Westbad</span></li>
                                    <li><span class="reservationSpeciment"><i class="fa fa-calendar"></i>
                                            Termin:</span><span class="reservationSpecimentInfo">
                                                {{substr((json_decode(session()->get('appointment'),true)['dateInput']),0,21 ) }}
                                              </span></li>
                                    <li><span class="reservationSpeciment"><i class="fa fa-ticket"></i> Freie
                                            E-Tickets:</span><span class="reservationSpecimentInfo">30</span></li>
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
                                        <span>{{$totalClient*17}},00 €</span>
                                </li>
                                <li>
                                    <span>Gesamtpreis</span>
                                        <span>{{$totalClient*17}},00 €</span>
                                </li>
                            </ul>
                            <div style="text-align: right;">
                                    <form action="{{route('calendar.addOrder')}}" id="addPaymentForm" method="post">
                                        @csrf
                                        <a onclick="document.getElementById('addPaymentForm').submit()"
                                    class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup blue">
                                    <div>
                                        <span class="first"><i class="fa fa-shopping-cart"></i> In den
                                            Warenkorb</span>
                                        <span class="second"><i class="fa fa-shopping-cart"></i> In den
                                            Warenkorb</span>
                                    </div>
                                </a>
                                    </form>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>

</div>
@endauth
@guest
    <script >
        window.location.href = "/login-register";
    </script>
    @endguest
