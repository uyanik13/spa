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
                                    <li><a href="/my-account">Zusammenfassende Ansicht</a></li>
                                    <li class="active"><a href="/my-account-info">Kontoinformation</a></li>
                                    <li><a href="/my-account-adress">Adresse</a></li>
                                    <li><a href="/my-account-family">Weitere Personen</a></li>
                                    <li><a href="/my-account-orderlist">Bestellungen</a></li>
                                    <li><a href="/">Ausloggen</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="column sc_col-sm-8">
                            <div class="kontoInformation">
                                <h3>Kontoinformation</h3>
                                <form action="{{route('calendar.userinfoupdate')}}" id="formUpdate" method="post">
                                    @csrf
                                    <div class="input">
                                        <label for="Nachname">Vollständiger Name</label>
                                        <input type="text" id="Nachname" name="name"
                                            placeholder="Vollständiger Name" @isset($user->name) value="{{$user->name}}" @endisset>
                                    </div>
                                    <div class="input">
                                        <label for="E-Mail">E-Mail</label>
                                        <input type="text" id="E-Mail" name="email" placeholder="E-Mail" @isset($user->email) value="{{$user->email}}" @endisset >
                                    </div>
                                    <div class="input">
                                        <label for="Telefon">Telefon</label>
                                        <input type="text" id="Telefon" name="Telefon"
                                            placeholder="Telefon"
                                               @isset($user->phone) value="{{$user->phone}}" @endisset
                                        >
                                    </div>
                                 {{--   <div class="input">
                                        <label for="Geburtsdatum">Geburtsdatum</label>
                                        <input type="text" id="Geburtsdatum" name="birth_date"
                                            placeholder="Geburtsdatum"
                                               @isset($aboutData['birth_date']) value="{{$aboutData['birth_date']}}" @endisset
                                        >
                                    </div>--}}
                                    {{--<div class="input">
                                        <label for="Geburtsdatum">Anrede</label>
                                        <select name="anrede" id="anrede">
                                            <option value="@isset($aboutData['anrede']){{$aboutData['anrede']}} @endisset">@isset($aboutData['anrede']){{$aboutData['anrede']}} @endisset</option>
                                            <option value="0">Herr</option>
                                            <option value="1">Frau</option>
                                        </select>
                                    </div>--}}
                                    <div style="text-align: center; flex-basis: 100%;">
                                        <a onclick="document.getElementById('formUpdate').submit()"
                                            class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup dark">
                                            <div>
                                                <span class="first">Speichern</span>
                                                <span class="second">Speichern</span>
                                            </div>
                                        </a>
                                    </div>
                                </form>
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
