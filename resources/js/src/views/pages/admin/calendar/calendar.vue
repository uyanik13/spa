<template>
  <div id="simple-calendar-app">

    <div class="vx-card no-scroll-content">
      <calendar-view
        ref="calendar"
        :displayPeriodUom="calendarView"
        :show-date="showDate"
        :events="simpleCalendarEvents"
        enableDragDrop
        :eventTop="windowWidth <= 400 ? '2rem' : '3rem'"
        eventBorderHeight="0px"
        eventContentHeight="3rem"
        class="theme-default"
        @click-date="openAddNewEvent"
        @click-event="openEditEvent"
        @drop-on-date="eventDragged">

        <div slot="header" class="mb-4">

          <div class="vx-row no-gutter">
            <!-- Current Month -->
            <div class="vx-col sm:w-1/3 w-full sm:my-0 my-3 flex sm:justify-end justify-center order-last">
              <div class="flex items-center">
                <feather-icon
                  :icon="$vs.rtl ? 'ChevronRightIcon' : 'ChevronLeftIcon'"
                  @click="updateMonth(-1)"
                  svgClasses="w-5 h-5 m-1"
                  class="cursor-pointer bg-primary text-white rounded-full" />

                <span class="mx-3 text-xl font-medium whitespace-no-wrap">{{ showDate | month }}</span>

                <feather-icon
                  :icon="$vs.rtl ? 'ChevronLeftIcon' : 'ChevronRightIcon'"
                  @click="updateMonth(1)"
                  svgClasses="w-5 h-5 m-1"
                  class="cursor-pointer bg-primary text-white rounded-full" />
              </div>
            </div>

            <div class="vx-col sm:w-1/3 w-full flex justify-center">
              <template v-for="(view, index) in calendarViewTypes">
                <vs-button
                  v-if="calendarView === view.val"
                  :key="String(view.val) + 'filled'"
                  type="filled"
                  class="p-3 md:px-8 md:py-3"
                  :class="{'border-l-0 rounded-l-none': index, 'rounded-r-none': calendarViewTypes.length !== index+1}"
                  @click="calendarView = view.val"
                  >{{ view.label }}</vs-button>
                <vs-button
                  v-else
                  :key="String(view.val) + 'border'"
                  type="border"
                  class="p-3 md:px-8 md:py-3"
                  :class="{'border-l-0 rounded-l-none': index, 'rounded-r-none': calendarViewTypes.length !== index+1}"
                  @click="calendarView = view.val"
                  >{{ view.label }}</vs-button>
              </template>

            </div>
          </div>


        </div>
      </calendar-view>
    </div>

    <vs-prompt
        class="calendar-event-dialog"
        :title="$t('appointment')"
        button-cancel = "border"
        @cancel="removeEvent"
        @accept="editEvent"
        accept-text= "ok"
        cancel-text = "x"
        :is-valid="validForm"
        :active.sync="activePromptEditEvent">

        <vs-input
                 name="event-name"
                 v-validate="'required'"
                 class="w-full"
                 :label-placeholder="$t('status')"
                 :disabled="true"
                 v-model="status">
        </vs-input>

        <div class="my-4">
            <small class="date-label">{{$t('startDate')}}</small>
            <datepicker
                      :language="$vs.rtl ? langDe : langEn"
                      :disabledDates="disabledDatesFrom"
                      name="start-date" v-model="startDate">
            </datepicker>
        </div>

        <div class="my-4">
            <small class="date-label">{{$t('endDate')}}</small>
            <datepicker
                     :language="$vs.rtl ? langDe : langEn"
                     :disabledDates="disabledDatesTo"
                     name="end-date" v-model="endDate">
             </datepicker>
        </div>

        <vs-input
                name="event-url"
                v-validate="'url'"
                class="w-full mt-6"
                :label-placeholder="$t('hours')"
                v-model="hours"
                :color="!errors.has('hours') ? 'success' : 'danger'">
        </vs-input>

    </vs-prompt>
  </div>
</template>

<script>
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'
import moduleCalendar from '@/store/calendar/moduleCalendar.js'
require('vue-simple-calendar/static/css/default.css')

import Datepicker from 'vuejs-datepicker'
import { en, de } from 'vuejs-datepicker/src/locale'
import i18n from '@/i18n/i18n'

export default {
  components: {
    CalendarView,
    CalendarViewHeader,
    Datepicker
  },
  data () {
    return {
      showDate: new Date(),
      disabledFrom: false,
      id: 0,
      status: '',
      startDate: '',
      endDate: '',
      hours: '',
      labelLocal: i18n.t('none'),

      langDe: de,
      langEn: en,

      url: '',
      calendarView: 'month',

      activePromptAddEvent: false,
      activePromptEditEvent: false,

      calendarViewTypes: [
        {
          label: i18n.t('month'),
          val: 'month'
        },
        {
          label: i18n.t('week'),
          val: 'week'
        },
        {
          label: i18n.t('year'),
          val: 'year'
        }
      ]
    }
  },
  computed: {
    simpleCalendarEvents () {
      return this.$store.state.calendar.events
    },
    validForm () {
      return this.status !== '' && this.startDate !== '' && this.endDate !== '' && Date.parse(this.endDate) - Date.parse(this.startDate) >= 0
    },
    disabledDatesTo () {
      return { to: new Date(this.startDate) }
    },
    disabledDatesFrom () {
      return { from: new Date(this.endDate) }
    },

    labelColor () {
      return (label) => {
        if      (label === 'completed') return 'success'
        else if (label === 'pending')   return 'warning'
      }
    },
    windowWidth () {
      return this.$store.state.windowWidth
    }
  },
  methods: {

    updateMonth (val) {
      this.showDate = this.$refs.calendar.getIncrementedPeriod(val)
    },
    clearFields () {
      this.status = this.endDate = this.hours = ''
      this.id = 0
      this.labelLocal = 'none'
    },
    promptAddNewEvent (date) {
      this.disabledFrom = false
      this.addNewEventDialog(date)
    },
    addNewEventDialog (date) {
      this.clearFields()
      this.startDate = date
      this.endDate = date
      this.activePromptAddEvent = true
    },
    openAddNewEvent (date) {
      this.disabledFrom = true
      this.addNewEventDialog(date)
    },
    openEditEvent (event) {
      const e = this.$store.getters['calendar/getEvent'](event.id)
      this.id = e.id
      this.status = e.status
      this.startDate = e.startDate
      this.endDate = e.endDate
      this.hours = e.hours
      this.labelLocal = e.label
      this.activePromptEditEvent = true
    },
    editEvent () {
      const obj = { id: this.id, status: this.status, startDate: this.startDate, endDate: this.endDate, label: this.labelLocal, hours: this.hours }
      obj.classes = `event-${  this.labelColor(this.labelLocal)}`
      this.$store.dispatch('calendar/editEvent', obj)
    },
    removeEvent () {
      this.$store.dispatch('calendar/removeEvent', this.id)
    },
    eventDragged (event, date) {
      this.$store.dispatch('calendar/eventDragged', {event, date})
    }
  },
  created () {
    this.$store.registerModule('calendar', moduleCalendar)
    this.$store.dispatch('calendar/fetchEvents')
  },
  beforeDestroy () {
    this.$store.unregisterModule('calendar')
  }
}
</script>

<style lang="scss">
@import "@sass/vuexy/apps/simple-calendar.scss";
</style>
