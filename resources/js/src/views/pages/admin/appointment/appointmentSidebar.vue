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
      <h4> {{ data.name }} - {{ data.appointment_date }} </h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>


<div class="vx-row pt-10 pl-5">


         <div class="vx-col w-full sm:w-1/2 lg:w-1/2 ">
                  <div class="my-6">
                        <h5 class="mb-2">Ticketnummer : {{ data.appointment_id }}</h5>
                             <p class="text-grey">QR Code : </p>
                             <img src="@assets/images/place-holders/qr.png"  height="80px"  width="80px" class="card-img-top" />
                    </div>
            </div>

            <!-- CONTENT CARD - PROGRESS BAR/GOAL -->
            <div class="vx-col w-full sm:w-1/2 lg:w-1/2 ">
             <div class="my-6">
                        <h5 class="mb-2">Ticket/Kundeninformationen</h5>
                        <h6 class="mb-2">{{ data.name }}</h6>
                        <p class="text-black">Datum:{{ data.appointment_date }}</p>
                        <p class="text-black">Uhrzeit bis:{{ data.appointment_date }}</p>
                        <p class="text-black">Dauerkartenbesitzer:{{ data.user.subscribed ? 'Ja' : 'Nine' }}</p>
                    </div>
                    <vs-button type="gradient" class="mt-6 mr-5" color="#7367F0" gradient-color-secondary="#BA300B">Kunde einchecken</vs-button>
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
  watch: {
    isSidebarActive (val) {
      if (!val) return
      console.log(this.data.FormData)
      const map = new Map(Object.entries(JSON.parse(this.data.FormData)))
      for (const [key, value] of map) {
        this.FormData.push({
          key,
          value
        })
      }
      this.FormData.splice(0, 2)
      if (Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      } else {
        const {  id} = JSON.parse(JSON.stringify(this.data))
        console.log('active:', this.data)
        this.dataId = id


      }

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
  methods: {
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
      width: 1280px !important;
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
