

@include('sweetalert::alert')
@livewireScripts
@stack('inline-scripts')

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type='text/javascript' src='/theme/js/vendor/jquery/jquery.js'></script>
<script type='text/javascript' src='/theme/js/vendor/jquery/jquery-migrate.min.js'></script>
<script type='text/javascript' src='/theme/js/vendor/modernizr.min.js'></script>
<script type='text/javascript' src='/theme/js/custom/custom.js'></script>
<script type='text/javascript' src='/theme/js/vendor/superfish.js'></script>
<script type='text/javascript' src='/theme/js/vendor/jquery.slidemenu.js'></script>
<script type='text/javascript' src='/theme/js/custom/core.utils.js'></script>
<script type='text/javascript' src='/theme/js/custom/core.init.js'></script>
<script type='text/javascript' src='/theme/js/custom/theme.init.js'></script>
<script type='text/javascript' src='/theme/js/vendor/social-share.js'></script>
<script type='text/javascript' src='/theme/js/custom/theme.shortcodes.js'></script>
<script type='text/javascript' src='/theme/js/custom/core.messages.js'></script>
<script type='text/javascript' src='/theme/js/vendor/grid.layout/grid.layout.min.js'></script>
<script type='text/javascript' src='/theme/js/vendor/jquery/core.min.js'></script>
<script type='text/javascript' src='/theme/js/vendor/swiper/swiper.js'></script>
<script type='text/javascript' src='/theme/js/custom.js'></script>
<script type='text/javascript' src='/theme/js/main.js'></script>
@php
  $url ='';
      if (isset($page->title)){
      $url = $page->title;
      }else{
          $url=null;
      }
@endphp
@if($url)
  @if ($page->title === "checkout" | $page->title === "another-person-form" | $page->title === "login-register")
      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
      <script>
          $( function() {
          $( "#datepicker" ).datepicker({
            yearRange: "1920:2020",
            changeMonth: true,
            changeYear: true
          });
        } );
      </script>
      <script>
          var overlay = document.querySelector(".registerFormOverlay");
          var button = document.querySelector(".overlayRemover");
          button.addEventListener('click', function () {
            overlay.classList.toggle("hideRegisterOverlay");
          })
      </script>
      @endif
      @endif
      </body>
      </html>
