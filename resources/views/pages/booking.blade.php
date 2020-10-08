<link rel='stylesheet' href='/theme/js/vendor/tooltipster/tooltipster.css' type='text/css' media='all'/>
<link rel='stylesheet' href='/theme/js/vendor/tooltipster/tooltipster-light.css' type='text/css' media='all'/>
<link rel='stylesheet' href='/theme/js/vendor/booked/animations.css' type='text/css' media='all'/>
<link rel='stylesheet' href='/theme/js/vendor/booked/styles.css' type='text/css' media='all'/>
<link rel='stylesheet' href='/theme/js/vendor/booked/responsive.css' type='text/css' media='all'/>

<link rel='stylesheet' href='/theme/js/vendor/booked/booked.css' type='text/css' media='all'/>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link rel='stylesheet' href='css/main.css' type='text/css' media='all'/>
@php
    $data = Helper::getCurrentClientsInSpa();
    $calendarInfo = Helper::findCustomData('calendarInfo') ;
    if(isset($calendarInfo)){
    $price = $calendarInfo['price'] + ($calendarInfo['price']*$calendarInfo['kdv']);
    }

@endphp

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
                                            <h2 class="sc_section_title sc_item_title line_hide">{{__('lang.booking_title')}}</h2>
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
            <span class="close1" onclick="closeModal()">&times;</span>
            <h4 style="font-weight: bold" class="text-center mb-4">
                Reservierungsformular
            </h4>
            <p class="text-center" style="color: #fff">Bitte wählen Sie die Reservierungsinformationen aus, um mit dem nächsten Schritt
                fortzufahren</p>
             @livewire('booking')

        </div>

    </div>
</div>
<script>
    window.addEventListener('click', function (e) {
        if (!document.getElementById('targetModal').contains(e.target)) {
            document.getElementById('myModal').style.display = "none"
        }
    });
</script>
