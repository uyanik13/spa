@auth
    @php
        $data = json_decode(App\Models\User::find(Auth::user()->id)->about_data,true);
    @endphp
    @if(!isset(session()->get('appointment')['dateInput']))
        <script >
            window.location.href = "/booking";
        </script>
    @else

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
													KUNDEN-REGISTRIERUNG</h2>
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
                                                @auth
                                                        <form id="sc_form_629_form"
                                                              data-formtype="form_3" method="post"
                                                              action="{{route('calendar.checkout')}}">
                                                            @csrf
                                                <div class="column sc_col-sm-6">
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
                                                                name="email" readonly disabled="true"  value="{{$user->email}}" placeholder="E-mail">
                                                            </div>
                                                                        {{--                                                                    @isset($data['anrede'])--}}
                                                            <div class="anredeRadio">
                                                                <label>
                                                                                <input type="radio" name="anrede"
                                                                                       value="frau"
                                                                                       @isset($data['anrede']) @if($data['anrede']=='frau') checked @endif @endisset>
                                                                    <span class="text">Frau</span>
                                                                </label>
                                                                <label>
                                                                                <input type="radio" name="anrede"
                                                                                       value="herr"
                                                                                       @isset($data['anrede']) @if($data['anrede']=='herr') checked @endif @endisset>
                                                                    <span class="text">Herr</span>
                                                                </label>
                                                            </div>
                                                                        {{--                                                                    @endisset--}}

                                                            <div
                                                                class="sc_form_item sc_form_field label_over">
                                                                <label class="required"
                                                                    for="sc_form_Titel">Titel</label>
                                                                <input id="sc_form_Titel" type="text"
                                                                                   name="Titel" placeholder="Titel"
                                                                                   @isset($data['Titel']) value="{{$data['Titel']}}" @endisset>
                                                            </div>

                                                            <div
                                                                class="sc_form_item sc_form_field label_over">
                                                                <label class="required"
                                                                                   for="sc_form_Vorname">Vollständiger
                                                                                Name</label>
                                                                <input id="sc_form_Vorname" type="text"
                                                                                   name="name"
                                                                                   placeholder="Vollständiger Name"
                                                                                   value="{{$user->name}}">
                                                            </div>
                                                            <div
                                                                class="sc_form_item sc_form_field label_over">
                                                                <label class="required"
                                                                    for="sc_form_Telefon">Telefon</label>
                                                                <input id="sc_form_Telefon" type="text"
                                                                    name="Telefon"  readonly disabled="true"
                                                                       placeholder="Telefon: 0xxxxxxxxx"
                                                                                   value="{{$user->phone}}">
                                                            </div>

                                                            <div
                                                                class="sc_form_item sc_form_field label_over">
                                                                <label class="required"
                                                                                   for="sc_form_username">Geburtsdatum</label>
                                                                                   <input type="text" id="datepicker"
                                                                                   name="birth_date"
                                                                                   autocomplete="off" 
                                                                                   placeholder="Geburtsdatum *"
                                                                                   @isset(json_decode($user->about_data,true)['birth_date']) value="{{json_decode($user->about_data,true)['birth_date']}}"@endisset>

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
                                                                                   placeholder="Straße/Nr."
                                                                                   @isset($data['strasse']) value="{{$data['strasse']}}" @endisset>
																</div>
																<div
																	class="sc_form_item sc_form_field label_over">
																	<label class="required"
																		for="sc_form_Postleitzahl">Postleitzahl/Ort</label>
																	<input id="sc_form_Postleitzahl"
																		type="text" name="Postleitzahl"
                                                                                   placeholder="Postleitzahl/Ort"
                                                                                   @isset($data['Postleitzahl'])value="{{$data['Postleitzahl']}}" @endisset>
																</div>
																<div
																	class="sc_form_item sc_form_field label_over">
																	<input id="sc_form_Land" type="hidden"
                                                                                   name="Land"
                                                                                    value="sd "
                                                                                    placeholder="Land"
                                                                                   @isset($data['Land']) ,value="{{$data['Land']}}" @endisset>
																</div>




																<div style="margin-top: 25px;">
                                                                            <p><input name="checkbox" type="checkbox"
																			style="margin-right: 5px;">
																		Hiermit bestatige ich, die
																		<a href="/kvkk" onclick="window.open('/kvkk', 'newwindow',
                                                                        'width=600,height=350');
                                                                        return false;">Datenschutzhinweise</a> gelesen und
																		akzeptiert zu haben. *</p>

																</div>
																<div class="sc_form_item sc_form_button"
																	style="text-align: center;">
                                                                            <a onclick="document.getElementById('sc_form_629_form').submit()"
																		class="sc_button sc_button_style_filled sc_button_size_medium blue">
																		<span class="overlay">
																			<span class="first">Speichern <i
																					class="fa fa-save"></i></span>
																			<span type="submit"
                                                                                onclick="document.getElementById('sc_form_629_form').submit();"
                                                                                class="second">
                                                                                <i class="fa fa-save"></i>
                                                                                Speichern
																		</span>
																		</span>


																	</a>
																</div>
																<div class="result sc_infobox"></div>

														</div>
													</div>
												</div>
                                                        </form>
                                                @endauth


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
    <script>
        import Button from "../../js/src/views/components/vuesax/button/Button";

        export default {
            components: {Button}
        }
    </script>
        @endif
@endauth
@guest
    <script >
        window.location.href = "/booking";
    </script>
    @endguest
