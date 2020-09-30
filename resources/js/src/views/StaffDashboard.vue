<!-- =========================================================================================
    File Name: DashboardEcommerce.vue
    Description: Dashboard - Ecommerce
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>

        <div class="vx-row">

             <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  icon="UserPlusIcon"
                  :statistic="allUsersCount | k_formatter"
                  :statisticTitle="$t('AllCustomers')"
                  color="success"
                  type="area" />
            </div>


        </div>



</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import i18n from '@/i18n/i18n'

export default{
  components: {
    VueApexCharts,
    StatisticsCardLine,
    VuePerfectScrollbar,
    ChangeTimeDurationDropdown
  },
  data () {
    return {
        isMounted : false,

     }
  },
  computed: {
    allUsersCount () {
      return this.$store.getters['user/allUsersCount']
    },


  },
  methods : {

  },
  watch: {
    isMounted () {
        //this.countriesSet()
    },
  },
  mounted () {
   this.isMounted= true

  },
  created () {
    this.$store.dispatch('user/fetchUsers')


  }
}
</script>

<style lang="scss">
.chat-card-log {
    height: 400px;

    .chat-sent-msg {
        background-color: #f2f4f7 !important;
    }
}
</style>
