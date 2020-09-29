<!-- =========================================================================================
  File Name: UserEditTabSocial.vue
  Description: User Edit Social Tab content
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
========================================================================================== -->

<template>
  <div id="user-edit-tab-info">
    <div class="vx-row">
        <div class="vx-col w-full sm:w-1/2 lg:w-1/2 ">
                  <div class="my-6">

                             <p class="text-grey">QR Code : </p>
                             <img src="@assets/images/place-holders/qr.png"  height="80px"  width="80px" class="card-img-top" />
                    </div>
            </div>

            <!-- CONTENT CARD - PROGRESS BAR/GOAL -->
            <div class="vx-col w-full sm:w-1/2 lg:w-1/2 ">
             <div class="my-6">
                        <h5 class="mb-2">Ticket/Kundeninformationen</h5>

                    </div>
                    <vs-button type="gradient" class="mt-6 mr-5" color="#7367F0" gradient-color-secondary="#BA300B">Kunde einchecken</vs-button>
            </div>



    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="save_changes" :disabled="!validateForm">Save Changes</vs-button>
          <vs-button class="ml-4 mt-2" type="border" color="warning" @click="reset_data">Reset</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any()
    }
  },
  methods: {
    save_changes() {
      if(!this.validateForm) return

      // Here will go your API call for updating data
      // You can get data in "this.data_local"
    },
    reset_data() {
      this.data_local = Object.assign({}, this.data)
    }
  },
}
</script>
