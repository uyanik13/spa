<!-- =========================================================================================
    File Name: ForgotPassword.vue
    Description: FOrgot Password Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: https://www.dijitalreklam.org
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@assets/images/pages/forgot-password.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Şifrenizi Sıfırlayınız</h4>
                                    <p>Lütfen e-posta adresinizi girin, size şifrenizi nasıl sıfırlayacağınızla ilgili talimatlar gönderelim.</p>
                                </div>
                              <form class="user" @submit.prevent="send">
                                <vs-input type="email" name="email" label-placeholder="Email" v-model="email" :class="{ 'is-invalid': errors.has('email') }" class="w-full mb-8" />
                                <vs-button type="border" to="/panel/login" class="px-4 w-full md:w-auto">Girişe Dön</vs-button>

                                <vs-button @click="send()"  class="float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0">Şifreyi Sıfırla</vs-button>

                              </form>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

  import axios from "axios";

  export default {
    middleware: 'guest',

    metaInfo () {
      return { title: this.$t('reset_password') }
    },

    data: () => ({
        email: '',
        status: '',
    }),

    methods: {
      async send () {
          await axios.post("/api/email/resend", {email: this.email, status: this.status}).then((response) => {
          this.status = response.status
          this.$vs.notify({
            title: 'Başarılı',
            text: 'E-posta Adresinize Sıfırlama İsteği Gönderdik.',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'success'
          })
          this.form.reset()
        })
          .catch(error => {
            this.$vs.loading.close()
            this.$vs.notify({
              title: 'Error',
              text: 'Bu Hesap Zaten Onaylı',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            })
          })

      }
    }
  }
</script>
