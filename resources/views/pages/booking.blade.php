<link rel='stylesheet' href='/theme/js/vendor/tooltipster/tooltipster.css' type='text/css' media='all' />
<link rel='stylesheet' href='/theme/js/vendor/tooltipster/tooltipster-light.css' type='text/css' media='all' />
<link rel='stylesheet' href='/theme/js/vendor/booked/animations.css' type='text/css' media='all' />
<link rel='stylesheet' href='/theme/js/vendor/booked/styles.css' type='text/css' media='all' />
<link rel='stylesheet' href='/theme/js/vendor/booked/responsive.css' type='text/css' media='all' />

<link rel='stylesheet' href='/theme/js/vendor/booked/booked.css' type='text/css' media='all' />

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link rel='stylesheet' href='css/main.css' type='text/css' media='all' />
@php
    $data = Helper::getCurrentClientsInSpa();
    $calendarInfo = Helper::findCustomData('calendarInfo') ;
    $price = $calendarInfo['price'] + ($calendarInfo['price']*$calendarInfo['kdv'])
@endphp
<div class="visible-print text-center">
    {!! QrCode::size(100)->generate(Request::url()); !!}
    <p>Scan me to return to the original page.</p>
</div>
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
										class="sc_section sc_section_block aligncenter max_width cu_width-970">
										<div class="sc_section_inner">
											<h6 class="sc_section_subtitle sc_item_subtitle">Buchung
												Kalender</h6>
											<h2 class="sc_section_title sc_item_title line_hide">Machen Sie
												eine
												Geplanter Termin</h2>
											<div id='calendar'></div>
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


<div id="myModal" class="modal1">
	<!-- Modal content -->
	<div class="modal-content1" style="background-color: transparent; border: none;">

		<div id="targetModal" class="appointmentForm">
			<span class="close1">&times;</span>
			<h2 class="text-center mb-4">
				Reservierungsformular
			</h2>
			<p class="text-center">Bitte wählen Sie die Reservierungsinformationen aus, um mit dem nächsten Schritt
                fortzufahren</p>
                <form action="{{route('calendar.appointment')}}" class="contact-form" method="POST">
                    @csrf

				<div class="input">
					<label for="">Ausgewähltes Datum</label>
					<input type="hidden" id="dateInput"  name="dateInput" >
					<input type="text" id="dateInput2"  name="dateInput2" placeholder="DD / MM / JJJJ" value="" disabled>
				</div>
				<div class="input">
					<label for="">Bevorzugter Zeitbereich</label>
					<select name="timeRange" onchange="this.selected" id="timeRange">
						<option value="default">Bitte wählen Sie die Option</option>
                        @isset($fakeData)
                            @foreach($fakeData as $data)
                                @if($data['quota']<30)
                                    <option value="{{$data['hours']}}" class="bg-success text-white ">{{$data['hours']}} <span>letzte {{30-$data['quota']}} Personen</span>
                                    </option>
                                @else
                                    <option value="{{$data['hours']}}"  disabled="disabled" class="bg-danger text-white">{{$data['hours']}}
                                        <span>FULL</span></option>
                                @endif
                            @endforeach
                        @endisset
					</select>
				</div>
				<div class="input text-center">
                    <button
                        type="submit"
						class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup dark">
						<div>
							<span class="first">Nächster Schritt</span>
							<span class="second">Nächster Schritt</span>
						</div>
					</button>
				</div>

			</form>
		</div>

	</div>

</div >
<script >
    window.addEventListener('click', function(e){
        if (!document.getElementById('targetModal').contains(e.target)){
            document.getElementById('myModal').style.display = "none"
        }
    });
</script>
