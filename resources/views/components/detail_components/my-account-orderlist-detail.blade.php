@auth
    @php
        $user = @auth()->user();
       $userData = json_decode($user->about_data,true);
       $order = \App\Models\Order::find($itemId);
       $taxInfo= Helper::findCustomData('calendarInfo');
       $payment = \App\Models\Payment::where('payment_id',$order->order_id)->first();
       $allOrderForOnce = \App\Models\Order::where('order_id',$order->order_id)->get();
       $appointment = \App\Models\Appointment::where('appointment_id',$order->order_id)->first();
    @endphp
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
                                            <div id="printJS-form" class="sc_section_inner">
                                                <h2 class="sc_section_title sc_item_title line_show">BESTÄTIGUNG

                                                </h2>

                                                <div class="column-1 sc_column_item">
                                                    <div class="summaryInformations">
                                                        <h3><i class="fa fa-home"></i> {{__('lang.adresse')}}</h3>
                                                        <div class="summaryInfoContainer">
                                                            <div class="personelInfos">
                                                                <h4>{{__('lang.rechnungadresse')}}</h4>
                                                                <p>
                                                                    {{$userData['anrede']}} {{$user->name}}
                                                                </p>
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
                                                        <h3><i class="fa fa-money"></i> Zahlungsdetail</h3>
                                                        <div class="summaryInfoContainer">
                                                            <div class="personelInfos zahlungDetails row">
                                                                <div class="col-md-7">
                                                                    <h4>{{__('lang.paymenta')}}</h4>
                                                                    <ul>
                                                                        <li>
                                                                            <span>Gesamtpreis:</span>@isset($payment->amount){{$payment->amount}}@endisset
                                                                            €
                                                                        </li>
                                                                        <li>
                                                                            <span>Preis(brutto):</span>@isset($payment->amount){{$payment->amount-($payment->amount*$taxInfo['kdv']/100)}}@endisset
                                                                            €
                                                                        </li>
                                                                        <li>
                                                                            <span>Preis (netto):</span>{{$payment->amount}}
                                                                            €
                                                                        </li>
                                                                        <li><span>enthaltene MwSt:</span>{{$taxInfo['kdv']}} %
                                                                        </li>
                                                                        <li>
                                                                            <span>Zahllart:</span>{{$payment['payment_method']}}
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-5">
                                                                    {!! QrCode::size(200)->generate($order->order_id); !!}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="column-1 sc_column_item">
                                                    <div class="summaryTable lastStep">
                                                        <h3><i class="fa fa-shopping-cart"></i> Ihre Bestellung
                                                        </h3>
                                                        <table>
                                                            <thead>
                                                            <tr>
                                                                <th>Produkt</th>
                                                                <th>Gesamtpreis</th>
                                                            </tr>
                                                            </thead>
                                                            @isset($allOrderForOnce)
                                                                <tbody>
                                                                @foreach($allOrderForOnce as $once)
                                                                    <tr>
                                                                        <td>
                                                                            <div class="produktCart">
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
                                                                                        {{$appointment->appointment_date}}<br>
                                                                                        {{$appointment->hours_between}}
                                                                            </span>
                                                                                    <span class="pInfos">
                                                                                <i class="fa fa-user"></i>
                                                                                {{$appointment->name}}
                                                                            </span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            {{$payment->amount}}€
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                @endforeach
                                                            @endisset
                                                        </table>

                                                        <div class="pSummary">
                                                            <ul>
                                                                <li><span
                                                                        class="pTag">Zwischensumme:</span><span>{{count($allOrderForOnce)*($once->price - ($once->price*$taxInfo['kdv']/100))}}€</span>
                                                                </li>
                                                                <li><span
                                                                        class="pTag">Mehrwertsteuer (%{{$taxInfo['kdv']}}):</span><span>{{$taxInfo['kdv']}} %</span>
                                                                </li>
                                                                <li><span
                                                                        class="pTag">Gesamtsumme:</span><span>{{$payment->amount}}€</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="printButton">
                                                <btn onClick="window.print()"
                                                     class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup dark">
                                                    <div>
                                                    <span class="first"><i class="fa fa-print fa-2x"></i>
                                                        Herunterladen</span>
                                                        <span class="second"><i class="fa fa-print fa-2x"></i>
                                                        Herunterladen</span>
                                                    </div>
                                                </btn>
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
@endauth
