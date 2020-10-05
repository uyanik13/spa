@auth
    @php
        $orderDetails= Helper::getOrdersById($itemId);
        $orders= $orderDetails['orders'];
        $calendarInfo = Helper::findCustomData('calendarInfo') ;
        $tax = ($orderDetails['total']*$calendarInfo['kdv']/100);
        $total = $orderDetails['total'] ;
        $subtotal = $total-$tax;
    @endphp
    @if(count($orders)>0)
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
                                                    <h6 class="sc_section_subtitle sc_item_subtitle">Best Deals</h6>
                                                    <h2 class="sc_section_title sc_item_title line_show">E-Tickets
                                                    </h2>
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
                                                                                {{$order->order_details}}
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
                                                                                 1
                                                                            </td>
                                                                            <td>
                                                                                {{ number_format($order->price,2)}}€
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

                                                    <div class="column-1 sc_column_item">
                                                        <div class="pSummary">
                                                            <ul>
                                                                <li>
                                                               <span class="pTag">Zwischensumme:</span><span>{{$subtotal}}€</span>
                                                                </li>

                                                                <li>
                                                                 <span class="pTag">Mehrwertsteuer (%{{$calendarInfo['kdv']}}):</span><span>{{number_format($tax,2)}}€</span>
                                                                </li>

                                                                <li>
                                                                  <span  class="pTag">Gesamtsumme:</span><span>{{number_format($total,2)}}€</span>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div class="tableActionButtons">
                                                        <a onclick="document.getElementById('resetForm').submit()"
                                                           class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup dark">
                                                            <div>
                                                                <form method="post" id="resetForm" action="{{route('calendar.resetOrders')}}">
                                                                    @csrf
                                                                    <input type="hidden" name="orders[]" value="{{$orders}}">
                                                                    <span class="first">Warenkorb leeren</span>
                                                                    <span class="second" onclick="document.getElementById('resetForm').submit()">Warenkorb leeren</span>
                                                                </form>
                                                            </div>
                                                        </a>
                                                        <a href="/payment-types"
                                                           class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup blue">
                                                            <div>
                                                                <span class="first">zur Kasse gehen</span>
                                                                <span class="second">zur Kasse gehen</span>
                                                            </div>
                                                        </a>
                                                    </div>
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
    @else
        <script >
            window.location.href = "/";
        </script>
    @endisset
@endauth
@guest
    <script >
        window.location.href = "/";
    </script>
@endguest
