<style>
    @media (max-width: 474px) {
        .page_content_wrap {
            padding: 6.8em 30px;
        }
    }
</style>
@auth
    @php
        $orders = Helper::getAllOrdersBelongsUser();
    @endphp
    <div class="page_content_wrap page_paddings_yes">
        <div id="acountWrap" class="content_wrap">
            <div class="content">
                <article class="post_item post_item_single page">
                    <section class="post_content">
                        <div class="sc_row row sc_row-fluid">
                            <div class="column sc_col-sm-3 accountSidebar">
                                <div class="accountOptions">
                                    <h5 class="sc_title sc_title_regular cu_mrg_5">
                                        Kontoeinstellungen
                                    </h5>

                                    <ul>
                                        <li><a href="/my-account">Zusammenfassende Ansicht</a></li>
                                        <li><a href="/my-account-info">Kontoinformation</a></li>
                                        <li><a href="/my-account-adress">Adresse</a></li>
                                        <li><a href="/my-account-family">Weitere Personen</a>
                                        </li>
                                        <li class="active"><a href="/my-account-orderlist">Bestellungen</a>
                                        </li>
                                        <li><a href="/ajax/logout">Ausloggen</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="column sc_col-sm-8">
                                <div class="kontoInformation aufträge">
                                    <h3>Bestellungen</h3>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Datum</th>
                                            <th>ID</th>
                                            <th>Typ</th>
                                            <th>Bestellsumme</th>
                                            <th>Betrag</th>
                                            <th>Zahlart</th>
                                            <th>Zahlstatus</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        @isset($orders)
                                            <tbody>
                                            @foreach($orders as $order)
                                                @foreach($order as $item)
                                                    @php
                                                    $payment = \App\Models\Payment::where('payment_id',$item->order_id)->first();
                                                    @endphp
                                                    @isset($payment)
                                                    <tr>
                                                        <td>{{$item->created_at}}</td>
                                                        <td>{{$item->order_id}}</td>
                                                        <td>E-Ticket</td>
                                                        <td>{{$item->price}}€</td>
                                                        <td>@if(isset($payment->amount)){{$payment->amount}}€@else - @endif</td>
                                                        <td>@if(isset($payment->payment_method)){{$payment->payment_method}}@else - @endif</td>
                                                        <td>{{$item->status}}</td>
                                                        <td><a title="Details"
                                                               href="/my-account-orderlist-detail/{{$item->id}}"><i
                                                                    class="fa fa-search-plus"></i></a></td>
                                                    </tr>
                                                    @endisset
                                                @endforeach
                                            @endforeach
                                            </tbody>
                                        @endisset
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <section class="related_wrap related_wrap_empty"></section>
            </div>
        </div>
    </div>
@endauth
@guest
    <script !src="">
        window.location = "/login-register"
    </script>
@endguest
