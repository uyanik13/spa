<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
      <h4> {{ data.name }} - {{ data.appointment_date.substr(0,10) }} {{ data.hours_between }} </h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>


    <div class="vx row p-5">
   <vs-button
                                    type="gradient"
                                    class="mt-6"
                                    color="#7367F0"
                                    @click="fetchUsersAppointment(data.appointment_id)"
                                    gradient-color-secondary="#BA300B">
                                    {{$t('fetchAppointment')}}
                           </vs-button>

        <div class="my-6 " v-for="(appointment,index) in AppointmentUsers" :key="index">
                        <h5 class="mb-2">Ticket/Kundeninformationen</h5>
                        <h6 class="mb-2">{{ appointment.name }}</h6>
                        <p class="text-black">TickedId:{{ appointment.appointment_id }}</p>
                        <p class="text-black">Datum:{{ appointment.appointment_date.substr(0,10) }}</p>
                        <p class="text-black">Uhrzeit bis: {{ appointment.hours_between }}</p>
                        <p class="text-black">Dauerkartenbesitzer: {{ appointment.user? appointment.user.subscribed ? 'Ja' : 'Nine' : ''  }}</p>
                         <vs-button
                                    v-if="!appointment.user.isHere"
                                    type="gradient"
                                    class="mt-6 mr-5"
                                    color="#7367F0"
                                    @click="clientCameOrLeft(appointment.user_id,1)"
                                    gradient-color-secondary="#BA300B">
                                    {{$t('clientCame')}}
                           </vs-button>

                           <vs-button
                                    v-else
                                    type="gradient"
                                    class="mt-6 mr-5"
                                    color="#7367F0"
                                    @click="clientCameOrLeft(appointment.user_id,0)"
                                    gradient-color-secondary="#BA300B">
                                    {{$t('clientHasLeft')}}
                           </vs-button>

                        <div class="my-6" v-show="!appointment.user.isHere">
                        <p class="text-black font-semibold">eingeloggt: </p>{{ appointment.user.login_date }}
                        <p class="text-black font-semibold">Ausloggen: </p>{{ appointment.user.logout_date }}
                        <p class="text-black font-semibold">Aufenthaltsdauer: </p>{{ diff_minutes( new Date(appointment.user.login_date), new Date(appointment.user.logout_date)) }}
                        <p class="text-black font-semibold">Zeitüberschreitung: </p> {{ diff_appointment( new Date(appointment.appointment_date.substr(0,10)+ ' '+appointment.hours_between.substr(-5)), new Date(appointment.user.logout_date),appointment.hours_between.substr(-5)) }}
                        </div>

             </div>
    </div>




  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import modulePostList from '@/store/post/modulePostList'
import { quillEditor } from 'vue-quill-editor'


export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isMounted: false,
      dataId: null,
      dataName: '',
      dataEmail: '',
      dataSubject: '',
      dataMessage: '',
      AppointmentUsers : [],
      FormData: [
        {
          key: '',
          value: ''
        }
      ],

      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      },
      editorOption: {
        // Some Quill options...
      }
    }
  },
  computed: {
        activeUser () {
          return  Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null
      },
    isSidebarActiveLocal: {
      get () {
        return this.isSidebarActive
      },
      set (val) {
        if (!val) {
          this.$emit('closeSidebar')
          //this.$validator.reset()
          //this.initValues()
        }
      }
    }
  },
  mounted () {
    this.isMounted = true

  },
  created (){
        this.data
      this.fetchUsersAppointment(this.data.appointment_id)
  },
  methods: {
       diff_minutes(dt2, dt1){
        var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff)) + ' Minuten';
        //return true;
    },

      diff_appointment(dt2, dt1, hours_between){
        var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff)) + ' Minuten';
        //return true;
    },
   fetchUsersAppointment(id) {
        this.$store.dispatch("form/findAppointmentUsers", id)
        .then(res => {
            console.log(res)
            this.AppointmentUsers = res

            })
        .catch(err => {
          if(err.response.status === 404) {
            this.AppointmentUsers = []
            return
          }
          console.error(err) })
    },
     clientCameOrLeft(userId,type,) {
      const payload = {
        id: userId,
        isHere : type
      }
      this.$store.dispatch('user/updateUser',payload).then((response) => {
        this.$vs.notify({
          title: 'Başarılı',
          text: 'Değişiklikler Başarıyla Düzenlendi',
          iconPack: 'feather',
          icon: 'icon-success',
          color: 'success'
        })
        this.fetchUsersAppointment(this.data.appointment_id)

      }).catch(error => {
        this.$vs.notify({
          title: 'Hata',
          text: 'Değişiklikler Kaydedilemedi.',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
      })
    },
    showAlert (title, text, icon, color) {
      this.$vs.notify({
        title,
        text,
        iconPack: 'feather',
        icon,
        color
      })
    },

  },
  components: {
    VuePerfectScrollbar
  }
}
</script>

<style lang="scss" scoped>
  .add-new-data-sidebar {
    ::v-deep .vs-sidebar--background {
      z-index: 52010;
    }

    .vs-sidebar {
      max-width: 1280px !important;
    }
    ::v-deep .vs-sidebar {
      z-index: 52010;
      width: 600px !important;
      max-width: 90vw ;

      .img-upload {
        margin-top: 2rem;

        .con-img-upload {
          padding: 0;
        }

        .con-input-upload {
          width: 100%;
          margin: 0;
        }
      }
    }
  }

  .scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
  }


</style>
