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

            <div class="vx-col w-full lg:w-1/3 lg:mt-0 mt-base">

                <statistics-card-line
                  icon="UserPlusIcon"
                  :statistic="activeUsers.length | k_formatter"
                  :statisticTitle="$t('activeUsers')"
                  color="success"
                  type="area" />

                </vx-card>
            </div>


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

     activeUsers () {
      return this.$store.state.admin.activeUsers
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
    this.$store.dispatch('admin/fetchStaffItems')



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
