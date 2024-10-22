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
                                    <li><a href="/my-account-info">Kontoinformation</a></li>
                                    <li class="active"><a href="/">Adresse</a></li>
                                    <li><a href="/my-account-family">Weitere Personen</a></li>
                                    <li><a href="/my-account-orderlist">Bestellungen</a></li>
                                    <li><a href="/">Ausloggen</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="column sc_col-sm-8">
                            <div class="kontoInformation adresse">
                                <h3>Adresse</h3>
                                <form action="{{route('calendar.userAddressUpdate')}}" method="post" id="updateAddressForm">
                                    @csrf
                                    <div class="input">
                                        <label for="strasse">Straße/Nr.</label>
                                        <input type="text" id="strasse" name="strasse"
                                            placeholder="Straße/Nr."
                                        @isset($aboutData['strasse']) value="{{$aboutData['strasse']}}" @endisset
                                        >
                                    </div>
                                    <div class="input">
                                        <label for="Postleitzahl">Postleitzahl/Ort</label>
                                        <input type="text" id="Postleitzahl" name="Postleitzahl"
                                            placeholder="Postleitzahl/Ort"
                                               @isset($aboutData['Postleitzahl']) value="{{$aboutData['Postleitzahl']}}" @endisset
                                        >
                                    </div>
                                    <div class="input">
                                        <label for="Land">Land</label>
                                        <input type="text" id="Land" name="Land" placeholder="Land"
                                               @isset($aboutData['Land']) value="{{$aboutData['Land']}}" @endisset

                                        >
                                    </div>
                                    <div style="text-align: center; flex-basis: 100%;">
                                        <a onclick="document.getElementById('updateAddressForm').submit()"
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
