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
        <h4>{{ Object.entries(this.data).length === 0 ? $t('addNewStaff') : $t('Update') }}</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">


        <!-- NAME -->
        <vs-input label="Name" v-model="name" class="mt-5 w-full" name="name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>

        <!-- EMAIL -->
        <vs-input label="Email" v-model="email" class="mt-5 w-full" name="email" v-validate="'required|email'" />
        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>

        <!-- PHONE -->
        <vs-input label="Phone" v-model="phone" class="mt-5 w-full" name="phone" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>



        <!-- PASSWORD -->
        <vs-input label="Password" v-model="password" class="mt-5 w-full" name="password" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>


      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">Submit</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {},
    }
  },
  watch: {
    isSidebarActive(val) {
      if(!val) return
      if(Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      }else {
        let {id, name, email,phone,password } = JSON.parse(JSON.stringify(this.data))
        this.id = id
        this.name = name
        this.email = email
        this.phone = phone
        this.password = password
        //this.photo_url = photo_url

        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  data() {
    return {

      id: null,
      name: "",
      email: null,
      phone: null,
      password: null,
      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid() {
      return !this.errors.any() && this.name && this.email && this.password && this.phone
    }
  },
  methods: {
    initValues() {
      if(this.data.id) return
        this.id = null
        this.name = ""
        this.password = ""
        this.email = null
        this.phone = null
    },
    submitData() {
      this.$validator.validateAll().then(result => {
          if (result) {
            const obj = {
              id: this.id,
              role: 'staff',
              name: this.name,
              email: this.email,
              phone: this.phone,
              password: this.password,
            }

            if(this.id !== null && this.id >= 0) {
              this.$store.dispatch("admin/updateUser", obj).catch(err => { console.error(err) })
            }else{
              delete obj.id
              obj.popularity = 0
              this.$store.dispatch("admin/addUser", obj).catch(err => { console.error(err) })
              this.showCreatedSuccess()
            }

            this.$emit('closeSidebar')
            this.initValues()
          }
      })
    },
    showCreatedSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'User Created',
        text: 'The selected user was successfully created'
      })
    }
    // updateCurrImg(input) {
    //   if (input.target.files && input.target.files[0]) {
    //     var reader = new FileReader()
    //     reader.onload = e => {
    //       this.photo_url = e.target.result
    //     }
    //     reader.readAsDataURL(input.target.files[0])
    //   }
    // }
  },
  components: {
    VuePerfectScrollbar,
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

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
