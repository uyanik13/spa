@auth

    @php
       $orderDetails= Helper::getOrders();
        $orders= $orderDetails['orders'];
        $calendarInfo = Helper::findCustomData('calendarInfo') ;
        $tax = ($orderDetails['total']*$calendarInfo['kdv']/100);
        $subtotal = $orderDetails['total']-$tax;
        $total = $orderDetails['total'] ;
    @endphp

    @if(count($orders)>0)
        <script >
            var paymethod = getCookie('PayMethod');
            function getCookie(cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i <ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
        </script>
<div class="page_content_wrap page_paddings_no">
    <div id="contentCart" class="content_wrap">
        <div class="content">
            <article class="post_item post_item_single page">
                <section class="post_content">
                    <div class="sc_row row sc_row-fluid">
                        <div class="column sc_column_container sc_col-sm-12">
                            <div class="sc_column-inner ">
                                <div class="wrapper">
                                    <div class="sc_empty_space em_height_6-5">
                                        <span class="sc_empty_space_inner"></span>
                                    </div>
                                    <div class="sc_section sc_section_block aligncenter max_width">
                                        <div class="sc_section_inner">
                                            <h2 class="sc_section_title sc_item_title line_show">BESTÄTIGUNG

                                            </h2>

                                            <div class="column-1 sc_column_item">
                                                <div class="summaryInformations">
                                                    <h3><i class="fa fa-home"></i> {{__('lang.adresse')}}</h3>
                                                    <div class="summaryInfoContainer">
                                                        <div class="personelInfos">
                                                            <h4>{{__('lang.rechnungadresse')}}</h4>
                                                            <p>{{__('lang.brandname')}}</p>
                                                            <p>
                                                                Greflingerstraße 22
                                                            </p>
                                                            <p>
                                                                93055 Regensburg
                                                            </p>
                                                            <p>
                                                                Deutschland
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="column-1 sc_column_item">
                                                <div class="summaryInformations">
                                                    <h3><i class="fa fa-money"></i> Zahlung</h3>
                                                    <div class="summaryInfoContainer">
                                                        <div class="personelInfos">
                                                            <h4>{{__('lang.paymenta')}}</h4>
                                                            <p>{{__('lang.brandname')}}</p>
                                                            <p>
                                                                Greflingerstraße 22
                                                            </p>
                                                            <p>
                                                                93055 Regensburg
                                                            </p>
                                                            <p>
                                                                Deutschland
                                                            </p>
                                                        </div>

                                                        <div class="paymentInfos">
                                                            <h4>Zahlungsart</h4>
                                                                <h5 id="displayPayMethod"></h5>
                                                                <p>Sie werden im nächsten Schritt zu <span id="displayPayMethodInDetails"></span>
                                                                weitergeleitet um die Zahlung zu autorisieren.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                <script !src="">
                                                    document.getElementById('displayPayMethod').innerText = paymethod;
                                                    document.getElementById('displayPayMethodInDetails').innerText = paymethod;
                                                </script>
                                           <div class="column-1 sc_column_item">
                                            <div class="summaryTable">
                                                <table>
                                                    <thead>
                                                    <tr>
                                                        <th>Produkt</th>
                                                        <th>Stückpreis</th>
                                                        <th>Anzahl</th>
                                                        <th>Gesamtpreis</th>
                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>

                                                    @isset($orders)
                                                        @foreach($orders as $order)
                                                            <tr id="tr_{{$order->id}}">
                                                                <td>
                                                                    <div class="produktCart">
                                                            <span class="produktImage">
                                                                <img src="https://www.placehold.it/450x250"
                                                                     alt="">
                                                            </span>

                                                                        <div class="produktInfos">
                                                                <span class="pTitle">
                                                                    Saunatarif Spat
                                                                </span>
                                                                            <span class="pInfos">
                                                                    <i
                                                                        class="fa fa-building"></i>
                                                                    {{__('lang.brandname')}}
                                                                </span>
                                                                            <span class="pInfos">
                                                                    <i
                                                                        class="fa fa-calendar"></i>
                                                                    {{substr((json_decode(session()->get('appointment'),true)['dateInput']),0,21 ) }}
                                                                    {{session()->get('appointment')['timeRange']}}
                                                                    </span>
                                                                            <span class="pInfos">
                                                                    <i class="fa fa-user"></i>
                                                                    @if(isset($order->user)){{$order->user->name}}@else {{Auth::user()->name}}@endif
                                                                </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {{number_format($subtotal,2)}}€
                                                                </td>
                                                                <td>
                                                                     {{count($orders)}}
                                                                </td>
                                                                <td>
                                                                    {{ number_format($total,2)}}€
                                                                </td>
                                                                <td>
                                                                    <a class="pDelete"
                                                                       onclick="deleteOrder({{$order->id}})">
                                                                        <i class="fa fa-close"></i>
                                                                    </a>
                                                                </td>
                                                                <script>

                                                                    function deleteOrder(id) {
                                                                        $.ajax({
                                                                            url: '/calendar/delete-order',
                                                                            method: 'post',
                                                                            data: {
                                                                                _token: '{{csrf_token()}}',
                                                                                'id': id
                                                                            },
                                                                            success(resp) {
                                                                                if (resp.message == 200) {
                                                                                    document.getElementById('tr_' + id).remove();
                                                                                }
                                                                            }
                                                                        })

                                                                    }

                                                                </script>

                                                            </tr>
                                                        @endforeach
                                                    @endisset
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <form action="{{route('payment.make')}}" id="goToPayment" method="post">
                                            @csrf
                                            <div class="column-1 sc_column_item">

                                            <input type="hidden" name="order_id" value="{{$orders[0]->order_id}}">
                                            <input type="hidden" name="order_total" value="{{number_format($total,2)}}">
                                                <div class="acceptPolicies">
                                                    <ul>
                                                        <li>
                                                            <input name="confirm_terms" id="terms" type="checkbox">
                                                            <label for="terms">Hiermit bestatige ich, die <a href="#" onclick="window.open('/agb',
                                                            'newwindow',
                                                            'width=600,height=350');
                                                            return false;">AGB</a> gelesen und akzeptiert zu haben</label>
                                                        </li>
                                                    </ul>



                                                    <div style="text-align: right;">
                                            <button type="submit"
                                            class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup blue">
                                            <div>
                                                <span class="first">{{__('lang.jetz_bestellen')}}</span>
                                                <span class="second">{{__('lang.jetz_bestellen')}}</span>
                                            </div>
                                            </button>


                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                    <div class="sc_empty_space em_height_4-8">
                                        <span class="sc_empty_space_inner"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc_row-full-width"></div>
                </section>
            </article>
            <section class="related_wrap related_wrap_empty"></section>
        </div>
    </div>
</div>

    @endif
@endauth









@guest
<script >
            window.location.href = "/";
    </script>
@endguest
