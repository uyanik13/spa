@php
$homePage = Helper::findCustomData('homepage');
    @endphp


            <div class="page_content_wrap page_paddings_no">
                <div class="content_wrap">
                    <div class="content">
                        <article class="post_item post_item_single page">
                            <section class="post_content">
                                <div data-sc-full-width="true" data-sc-full-width-init="false"
                                    class="sc_row row sc_row-fluid sc_custom_1459775715133">
                                    <div class="column sc_column_container sc_col-sm-12">
                                        <div class="sc_column-inner ">
                                            <div class="wrapper">
                                                <div id="sc_team_252_wrap" class="sc_team_wrap">
                                                    <div id="sc_team_252"
                                                        class="sc_team sc_team_style_team-3 aligncenter">
                                                        <div class="wrapper">
                                                            <div class="sc_empty_space em_height_4-5">
                                                                <span class="sc_empty_space_inner"></span>
                                                            </div>
                                                            <h2 class="sc_title sc_title_regular sc_align_center">
                                                                @isset($homePage['title'])
                                                                <i class="fa fa-tag"></i> {{$homePage['title']}}</h2>
                                                                @endisset

                                                            <div class="sc_section sc_section_block aligncenter">
                                                                <div class="sc_section_inner">
                                                                    <div class="sc_section_content_wrap">
                                                                        <div class="mainPage">
                                                                            @isset($homePage['image'])
                                                                            <img src="{!! $homePage['image'] !!}" alt="">
                                                                            @endisset

                                                                            <div class="mainPageContent">

                                                                                @isset($homePage['desc'])
                                                                                {!! $homePage['desc'] !!}<br>
                                                                                @endisset

                                                                                <a href="/booking"
                                                                                    class="sc_button sc_button_square sc_button_style_filled sc_button_size_medium buttonup blue">
                                                                                    <div>
                                                                                        <span class="first"><i class="fa fa-ticket fa-2x"></i> E-Ticket
                                                                                            Kaufen</span>
                                                                                        <span class="second"><i
                                                                                                class="fa fa-ticket fa-2x"></i>E-Ticket
                                                                                            Kaufen</span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="sc_empty_space em_height_4">
                                                                <span class="sc_empty_space_inner"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="sc_empty_space em_height_5">
                                                    <span class="sc_empty_space_inner"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sc_row-full-width"></div>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
