<template>
  <vs-tabs :position="isSmallerScreen ? 'top' : 'top'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">

    <!-- GENERAL -->
    <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? $t('general') : ''">
      <div class="tab-general md:ml-4 md:mt-10 mt-4 ml-0">
        <general />
      </div>
    </vs-tab>

    <vs-tab icon-pack="feather" icon="icon-home" :label="!isSmallerScreen ? $t('HomePage') : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0">
        <home-page />
      </div>
    </vs-tab>

    <vs-tab icon-pack="feather" icon="icon-calendar" :label="!isSmallerScreen ? $t('Booking') : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0">
        <booking />
      </div>
    </vs-tab>

    <vs-tab icon-pack="feather" icon="icon-book-open" :label="!isSmallerScreen ? $t('orderDetails') : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0">
        <order-details />
      </div>
    </vs-tab>



  </vs-tabs>

</template>

<script>
import General from "./General.vue"
import VideoGallery from "./Video-Gallery"
import HomePage from "./HomePage"
import Booking from "./Booking"
import OrderDetails from "./OrderDetails"
import Bayiler from "./Bayiler"
import References from "./References"
import Faq from "./Faq"

export default {
  components: {
    VideoGallery,
    General,
    HomePage,
    Bayiler,
      Booking,
      OrderDetails,
      References,
      Faq,
  },
  data() {
    return {


    }
  },
  computed: {
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768
    }
  }
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
