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


        <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                <vx-card>

                    <div class="my-6">
                        <h5 class="mb-2">Check-In</h5>
                             <p class="text-grey">sss</p>
                    </div>

                <vs-button class="mt-4" type="border" color="#b9b9b9">Check-In</vs-button>

                </vx-card>
            </div>

            <!-- CONTENT CARD - PROGRESS BAR/GOAL -->
            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
              <vx-card>

                    <div class="my-6">
                        <h5 class="mb-2">Check-Out</h5>
                        <p class="text-grey">sss</p>
                    </div>

                <vs-button class="mt-4" type="border" color="#b9b9b9">Check-Out</vs-button>
                </vx-card>
            </div>


            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
              <vx-card>

                    <div class="my-6">
                        <h5 class="mb-2">Neu Buchung</h5>
                        <p class="text-grey">sss</p>
                    </div>
                    <vs-button class="mt-4" type="border" color="#b9b9b9">Neu Buchung</vs-button>
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
