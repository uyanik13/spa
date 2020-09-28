<!-- =========================================================================================
    File Name: DashboardEcommerce.vue
    Description: Dashboard - Ecommerce
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
     <div id="dashboard-analytics">
        <div class="vx-row">


        <!-- CARD 1: CONGRATS -->
            <div class="vx-col w-full lg:w-1/1 mb-base">
                <vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
                            <img src="@assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
                            <img src="@assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">
                <feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
                <h1 class="mb-6 text-white">{{$t('Welcome')}} {{ activeUser.name }}</h1>
                <!-- <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">{{$t('underWelcomeText')}}</p> -->
                </vx-card>
            </div>

             <!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  v-if="IncomingPaymentsStatisticData()"
                  icon="DollarSignIcon"
                  :statistic="completedPaymentsAmount | k_formatter"
                  :statisticTitle="$t('Payments')"
                  :chartData="IncomingPaymentsStatisticData()"
                  color="success"
                  type="area" />
            </div>

             <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  v-if="IncomingOrdersStatisticData()"
                  icon="DollarSignIcon"
                  :statistic="completedOrdersAmount | k_formatter"
                  :statisticTitle="$t('Orders')"
                  :chartData="IncomingOrdersStatisticData()"
                  color="success"
                  type="area" />
            </div> -->






        </div>


    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import i18n from '@/i18n/i18n'
import Cookies from 'js-cookie'

export default{
  components: {
    VueApexCharts,
    StatisticsCardLine,
    VuePerfectScrollbar,
    ChangeTimeDurationDropdown
  },
  data () {
    return {
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    }
  },
  computed: {
    scrollbarTag () { return this.$store.getters.scrollbarTag },
    // payments () {
    //   return this.$store.state.admin.payments
    // },
    // allUsersCount () {
    //   return this.$store.getters['user/allUsersCount']
    // },
    // completedPaymentsAmount () {
    //   return this.$store.getters['admin/completedPaymentsAmount']
    // },
    // completedOrdersAmount () {
    //   return this.$store.getters['admin/completedOrdersAmount']
    // },
    activeUser () {
        return  Cookies.get('user') ? JSON.parse(Cookies.get('user')) :  this.$store.state.auth.user
        }

  },
  methods : {
    // chartDataForPayment () {
    //   return this.$store.getters['admin/chartDataForPayments']
    // },
    // chartDataForOrders () {
    //   return this.$store.getters['admin/chartDataForOrders']
    // },
    // chartDataForUserToken () {
    //   return this.$store.getters['user/allUsersToken']
    // },
    // IncomingPaymentsStatisticData () {
    //   return [{name : i18n.t('Amount'), data : this.chartDataForPayment()}]
    // },
    // IncomingOrdersStatisticData () {
    //   return [{name : i18n.t('Amount'), data : this.chartDataForOrders()}]
    // },
    // UsersStatiscticData () {
    //   return [{name : i18n.t('UserToken'), data : this.chartDataForUserToken()}]
    // },
    // pendingTokensForAdminData () {
    //   return [{name : i18n.t('Amount'), data : this.pendingTokensForAdmin}]
    // }
  },
  mounted () {
    //const scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS
    //scroll_el.scrollTop = this.$refs.chatLog.scrollHeight
  },
  created () {

     //this.$store.dispatch('user/fetchUser')
     this.$store.dispatch('admin/fetchItems')
  }
}
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user{
    position: relative;

    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

  @media(max-width: 576px) {
    .decore-left, .decore-right{
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
