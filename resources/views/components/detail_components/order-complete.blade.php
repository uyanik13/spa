@auth
    @php
        $gender = Helper::jsonToArray($user->about_data);

    @endphp
<div class="page_content_wrap page_paddings_no">
	<div class="content_wrap">
		<div class="content">
			<article class="post_item post_item_single page">
				<section class="post_content">
					<div data-sc-full-width="true" data-sc-full-width-init="false"
						class="sc_row row sc_row-fluid sc_custom_1449134047180">
						<div class="column sc_column_container sc_col-sm-12">
							<div class="sc_column-inner ">
								<div class="wrapper">
									<div class="sc_empty_space em_height_7">
										<span class="sc_empty_space_inner"></span>
									</div>
									<div class="sc_section mockingbird-block sc_section_block">
										<div class="sc_section_inner">
											<h2 class="sc_section_title sc_item_title line_show">
												{{__('lang.order_result_complete')}}</h2>
											<div class="sc_section_content_wrap">
												<div class="text_column content_element  mockingbird-text">
													<div class="wrapper">
														<p>
                                                                @isset($record)
                                                                <strong>{{$gender['anrede']}} {{auth()->user()->name}},</strong>
                                                                @endisset

                                                        </p>
														<p>
															{{__('lang.order_result_complete_descrition')}}
                                                        </p>
                                                        <p> {!! QrCode::size(200)->generate($itemId); !!}</p>

														<a href="/order-details"
															class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup blue">
															<div>
																<span class="first">zur Startseite</span>
																<span class="second">zur Startseite</span>
															</div>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="sc_empty_space em_height_7">
										<span class="sc_empty_space_inner"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="sc_row-full-width"></div>
					<div class="sc_row-full-width"></div>
				</section>
			</article>
			<section class="related_wrap related_wrap_empty"></section>
		</div>
	</div>
</div>
@endauth
@guest
    <script >
        window.location.href = "/login-register";
    </script>
    @endguest
