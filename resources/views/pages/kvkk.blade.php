<style>
    @media (max-width: 474px) {
        .page_content_wrap {
            padding: 6.8em 30px;
        }
    }
</style>

<div class="page_content_wrap page_paddings_yes">
    <div id="acountWrap" class="content_wrap">
        <div class="content">
            <article class="post_item post_item_single page">
                <section class="post_content">
                    <div class="sc_row row sc_row-fluid">
                        <div class="column sc_col-sm-3 accountSidebar">
                            <div class="accountOptions">
                                <h5 class="sc_title sc_title_regular cu_mrg_5">
                                    Datenschutzhinweis
                                </h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi consequuntur ut deserunt rem ea in tempora veniam fuga maxime adipisci sunt nisi, nostrum recusandae, impedit eaque iure! Enim, maxime vel. Maxime blanditiis aut, sequi ducimus nulla incidunt quidem in dolorem quam corrupti est sint cum maiores, cumque provident sit voluptatum!</p>
                            </div>
                        </div>

                        @isset($partners)
                        <div class="column sc_col-sm-8">
                            <input type="hidden" id="totalForm" value="{{count($partners)}}">
                            @foreach($partners as $key=> $partner)
                            @php
                            $partnerData = json_decode($partner->about_data,true);
                            @endphp

                            <div class="kontoInformation">
                                <h3>Kontoinformation</h3>
                                <form action="{{route('calendar.partnerUpdate')}}" id="familyForm{{$key}}"
                                    method="post">
                                    @csrf
                                    <div class="input">
                                        <input type="hidden" name="partner" value="{{$partner->id}}">
                                        <label for="Nachname">Vollständiger Name</label>
                                        <input type="text" id="Nachname" name="name" placeholder="Nachname"
                                            @isset($partner->name) value="{{$partner->name}}" @endisset
                                        >
                                    </div>
                                    <div class="input">
                                        <label for="E-Mail">E-Mail</label>
                                        <input type="text" id="E-Mail" name="email" placeholder="E-Mail"
                                            @isset($partner->email) value="{{$partner->email}}" @endisset
                                        >
                                    </div>
                                    <div class="input">
                                        <label for="Telefon">Telefon</label>
                                        <input type="text" id="Telefon" name="Telefon" placeholder="Telefon"
                                            @isset($partner->phone) value="{{$partner->phone}}" @endisset
                                        >
                                    </div>
                                    <div class="input">
                                        <label for="Geburtsdatum">Geburtsdatum</label>
                                        <input type="date" id="Geburtsdatum" name="Geburtsdatum"
                                            placeholder="Geburtsdatum" @isset($partnerData['birth_date'])
                                            value="{{$partnerData['birth_date']}}" @endisset>
                                    </div>
                                    <div class="input">
                                        <label for="anrede">Anrede</label>
                                        <select name="anrede" id="anrede">
                                            <option value="Herr" @isset($partnerData['anrede'])
                                                @if($partnerData['anrede']=='Herr' )selected @endif> Herr @endif
                                            </option>
                                            <option value="Frau" @isset($partnerData['anrede'])
                                                @if($partnerData['anrede']=='Frau' )selected @endif> Frau @endif
                                            </option>
                                        </select>
                                    </div>
                                    <div style="text-align: center; flex-basis: 100%;">
                                        <a onclick="asd32({{$key}})"
                                            class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup dark">
                                            <div>
                                                <span class="first">Speichern</span>
                                                <span class="second">Speichern</span>
                                            </div>
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <br><br>
                            @endforeach
                        </div>
                        @endisset
                    </div>
                </section>
            </article>
            <section class="related_wrap related_wrap_empty"></section>
            <script !src="">
                function asd32(target) {
                        document.getElementById('familyForm'+target).submit();
                       /* const total = document.getElementById('totalForm').value;
                        for(let i = 0;i<total;i++){
                        }*/
                    }
            </script>
        </div>
    </div>
</div>
@endauth