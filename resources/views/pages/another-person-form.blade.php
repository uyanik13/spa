@auth
<div class="page_content_wrap page_paddings_yes">
    <div class="content_wrap">
        <div class="content">
            <article class="post_item post_item_single page">
                <section class="post_content">
                    <div class="sc_row row sc_row-fluid">
                        <div class="column sc_column_container sc_col-sm-12">
                            <div class="sc_column-inner ">
                                <div class="wrapper">
                                    <div
                                        class="sc_section sc_section_block aligncenter max_width cu_width-770">
                                        <div class="sc_section_inner">
                                            <div class="sc_section_content_wrap">
                                                <h2 class="sc_title sc_title_regular cu_mrg_5">
                                                    WEITERE PERSONEN REGISTRIERUNG</h2>
                                                <div
                                                    class="sc_infobox sc_infobox_style_info sc_infobox_iconed icon-info-1">
                                                    <div class="text_column content_element ">
                                                        <div class="wrapper">
                                                            <p>Bitte geben Sie hier Ihre persönlichen Daten
                                                                ein.</p>
                                                            <p>
                                                                Das Mindestalter für eine Registrierung
                                                                betragt 18 Jahre
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <form id="sc_form_629_form"
                                                          data-formtype="form_3" method="post"
                                                          action="{{route('calendar.anotherPerson')}}">
                                                        @csrf
                                                <div class="column sc_col-sm-6">
                                                        <input type="hidden" name="ref" value="{{auth()->user()->id}}">
                                                    <div id="sc_form_629_wrap" class="sc_form_wrap">
                                                        <h5
                                                            style="margin-bottom: 30px; text-decoration: underline;">
                                                            Allgemeine
                                                            Informationen</h5>
                                                        <div id="sc_form_629"
                                                            class="sc_form sc_form_style_form_3">

                                                                <div
                                                                    class="sc_form_item sc_form_field label_over">
                                                                    <label class="required"
                                                                        for="sc_form_email">E-mail</label>
                                                                    <input id="sc_form_email" type="text"
                                                                        name="email" placeholder="E-mail">
                                                                </div>

                                                                <div class="anredeRadio">
                                                                    <label>
                                                                        <input type="radio" value="Frau" name="anrede">
                                                                        <span class="text">Frau</span>
                                                                    </label>
                                                                    <label>
                                                                        <input type="radio" value="Herr" name="anrede">
                                                                        <span class="text">Herr</span>
                                                                    </label>
                                                                </div>

                                                                <div
                                                                    class="sc_form_item sc_form_field label_over">
                                                                    <label class="required"
                                                                        for="sc_form_Titel">Titel</label>
                                                                    <input id="sc_form_Titel" type="text"
                                                                        name="Titel" placeholder="Titel">
                                                                </div>

                                                                <div
                                                                    class="sc_form_item sc_form_field label_over">
                                                                    <label class="required"
                                                                           for="sc_form_Vorname">Vollständiger
                                                                        Name</label>
                                                                    <input id="sc_form_Vorname" type="text"
                                                                           name="name"
                                                                           placeholder="Vollständiger Name">
                                                                </div>

                                                                <div
                                                                    class="sc_form_item sc_form_field label_over">
                                                                    <label class="required"
                                                                        for="sc_form_Telefon">Telefon</label>
                                                                    <input id="sc_form_Telefon" type="text"
                                                                        name="Telefon"
                                                                        placeholder="Telefon">
                                                                </div>

                                                                <div
                                                                    class="sc_form_item sc_form_field label_over">
                                                                    <label class="required"
                                                                        for="sc_form_Geburtsdatum">Geburtsdatum</label>
                                                                    <input id="sc_form_Geburtsdatum"
                                                                               type="date" name="birth_date"
                                                                        placeholder="DD / MM / JJJJ"
                                                                        value="01/02/1998">
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="column sc_col-sm-6">
                                                    <div id="sc_form_629_wrap" class="sc_form_wrap">
                                                        <h5
                                                            style="margin-bottom: 30px; text-decoration: underline;">
                                                            Adresse</h5>
                                                        <div id="sc_form_629"
                                                            class="sc_form sc_form_style_form_3">


                                                                <div
                                                                    class="sc_form_item sc_form_field label_over">
                                                                    <label class="required"
                                                                        for="sc_form_strasse">Straße/Nr.</label>
                                                                    <input id="sc_form_strasse" type="text"
                                                                        name="strasse"
                                                                        placeholder="Straße/Nr.">
                                                                </div>
                                                                <div
                                                                    class="sc_form_item sc_form_field label_over">
                                                                    <label class="required"
                                                                        for="sc_form_Postleitzahl">Postleitzahl/Ort</label>
                                                                    <input id="sc_form_Postleitzahl"
                                                                        type="text" name="Postleitzahl"
                                                                        placeholder="Postleitzahl/Ort">
                                                                </div>
                                                                <div
                                                                    class="sc_form_item sc_form_field label_over">
                                                                    <label class="required"
                                                                        for="sc_form_Land">Land</label>
                                                                    <input id="sc_form_Land" type="text"
                                                                        name="Land" placeholder="Land">
                                                                </div>
                                                                <div style="margin-top: 25px;">
                                                                    <input id="confirm" type="checkbox"
                                                                                  style="margin-right: 5px;" name="checkbox">
                                                                        Hiermit bestatige ich, die
                                                                        Datenschutzhinweise gelesen und
                                                                        akzeptiert zu haben. *

                                                                </div>
                                                            @if ($errors->any())
                                                                <div class="alert alert-danger " >
                                                                    <ul>
                                                                        @foreach ($errors->all() as $error)
                                                                            <li >*{{ $error }}</li>
                                                                        @endforeach
                                                                    </ul>
                                                                </div>
                                                            @endif
                                                                <div class="sc_form_item sc_form_button"
                                                                    style="text-align: center;">
                                                                        <a onclick="document.getElementById('sc_form_629_form').submit()"
                                                                        class="sc_button sc_button_style_filled sc_button_size_medium blue">
                                                                        <span class="overlay">
                                                                            <span class="first">Speichern <i
                                                                                    class="fa fa-save"></i></span>
                                                                            <span type="submit"  class="second">Speichern
                                                                                <i
                                                                                    class="fa fa-save"></i></span>
                                                                        </span>
                                                                    </a>
                                                                </div>

                                                                <div class="result sc_infobox"></div>

                                                        </div>
                                                    </div>
                                                </div>
                                                    </form>
                                            </div>
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
<script>
    import Button from "../../js/src/views/components/vuesax/button/Button";
    export default {
        components: {Button}
    }
</script>
@guest
    <script >
        window.location.href = "/login-register";
    </script>
    @endguest
