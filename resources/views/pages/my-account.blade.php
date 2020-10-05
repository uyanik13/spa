<style>
    @media (max-width: 474px) {
        .page_content_wrap {
            padding: 6.8em 30px;
        }
    }
</style>

@auth
    @php
        $user = Auth::user();
        $aboutData = json_decode($user->about_data,true);
        $partners = \App\Models\User::where('reference_id',$user->id)->get();

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
                                        <li class="active"><a href="/my-account">Zusammenfassende Ansicht</a></li>
                                        <li><a href="/my-account-info">Kontoinformation</a></li>
                                        <li><a href="/my-account-adress">Adresse</a></li>
                                        <li><a href="/my-account-family">Weitere Personen</a></li>
                                        <li><a href="/my-account-orderlist">Bestellungen</a></li>
                                        <li><a href="/">Ausloggen</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="column sc_col-sm-8">
                                <div class="meinProfil">

                                    <div class="innerInfoArea">
                                        <h4>Allgemeine Informationen</h4>
                                        <ul>
                                            <li><span class="boldHead">E-Mail:</span> {{$user->email}}</li>
                                            <li><span class="boldHead">Anrede:</span> {{$aboutData['anrede']}}</li>
                                            <li><span class="boldHead">Titel:</span>{{$aboutData['Titel']}}</li>
                                            <li><span class="boldHead">Vollständiger Name:</span> {{$user->name}}</li>
                                            <li><span class="boldHead">Telefon:</span>{{$user->phone}}</li>
                                            <li><span class="boldHead">Geburtsdatum:</span> {{$aboutData['birth_date']}}
                                            </li>

                                        </ul>
                                        <div class="editFooter">
                                            <a href="/"><i class="fa fa-edit"></i> Bearbeiten</a>
                                        </div>
                                    </div>

                                    <div class="adressWaiter">
                                        <div class="weiterePersonen">


                                            @isset($partners)
                                                <h4>Weitere Personen</h4>
                                                @foreach($partners as $partner)
                                                    @php
                                                        $partnersAboutData = json_decode($partner->about_data,true);
                                                    @endphp
                                                    <ul>
                                                        <li>

                                                            <span><i class="fa fa-male"></i></span> {{$partner->name}}
                                                        </li>
                                                    </ul>
                                                    <div class="editFooter">
                                                        <a href="/my-account-family"><i class="fa fa-edit"></i> Bearbeiten</a>
                                                    </div>
                                                    <hr>
                                                @endforeach
                                            @endisset
                                        </div>
                                        <div class="weiterePersonen">
                                            <h4>{{__('lang.adresse')}}</h4>
                                            <p style="word-wrap: break-word">
                                                {{$aboutData['strasse']}} <br>
                                                {{$aboutData['Land']}} <br>
                                                {{$aboutData['Postleitzahl']}}
                                            </p>
                                            <div class="editFooter">
                                                <a href="/my-account-adress"><i class="fa fa-edit"></i> Bearbeiten</a>
                                            </div>
                                        </div>
                                    </div>
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

