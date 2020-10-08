<template>
  <div>
    <vs-input
        v-validate="'required|email|min:3'"
        data-vv-validate-on="blur"
        name="email"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        :label-placeholder="$t('Email')"
        v-model="email"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('email')? $t('EmailRequired') : '' }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:6|max:24'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        :label-placeholder="$t('Password')"
        v-model="password"
        @keyup.enter="login"
        class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password')? $t('PasswordRequired') : '' }}</span>

    <div class="flex flex-wrap justify-between my-5">
        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">{{$t('RememberMe')}}</vs-checkbox>
        <router-link to="/panel/password/email">{{$t('ForgotPassword')}}</router-link>
    </div>
    <div class="flex flex-wrap justify-between mb-3">
      <vs-button  type="border" @click="registerUser">{{$t('Register')}}</vs-button>
      <vs-button :disabled="!validateForm"   @click="login">{{$t('Login')}}</vs-button>
    </div>
  </div>
</template>

<script>

import i18n from '@/i18n/i18n'
import Cookies from 'js-cookie'

export default {
  created () {
      this.checkUser()
    if (this.$route.query.sessionExpired == 1) {
      this.$acl.change('guest')
      console.clear()
    }
  },
  data () {
    return {
      email: '',
      password: '',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.email !== '' && this.password !== ''
    }
  },
  methods: {
    login () {
      this.$vs.loading()
      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('auth/login', payload)
        .then((response) => {
          // console.log('İÇ',response)
          this.$vs.loading.close()
          this.$acl.change(response.role)
           // this.showAlert(i18n.t('Success'), i18n.t('login_successfull'), 'icon-success', 'success')
            if (response){
            if (response.role === 'user') {

                //this.showAlert(i18n.t('Error'), i18n.t('you_are_logged_in'), 'icon-alert-circle', 'warning')
                return this.showAlert(i18n.t('Authorisation Error'), i18n.t('auth_error'), 'icon-alert-circle', 'warning')
            } else if (response.role === 'admin') {
                //this.showAlert(i18n.t('Error'), i18n.t('you_are_logged_in'), 'icon-alert-circle', 'warning')
                return this.$router.push({ name: 'admin.dashboard'}).catch(error => { console.info(error.message) })
            }else if (response.role === 'staff') {
                //this.showAlert(i18n.t('Error'), i18n.t('you_are_logged_in'), 'icon-alert-circle', 'warning')
                return this.$router.push({ name: 'staff.dashboard'}).catch(error => { console.info(error.message) })
            }
        }
        })
        .catch(error => {
          console.log(error)
          this.$vs.loading.close()
          this.showAlert(i18n.t('Error'), i18n.t('your_credentials_not_match_our_records'), 'icon-alert-circle', 'warning')
        })
    },
    registerUser () {
      this.$router.push('/panel/register').catch(() => {})
    },
      checkUser(){
          const userInfo = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null
        if (userInfo){
            if (userInfo.role === 'user') {

                //this.showAlert(i18n.t('Error'), i18n.t('you_are_logged_in'), 'icon-alert-circle', 'warning')
                return this.showAlert(i18n.t('Authorisation Error'), i18n.t('auth_error'), 'icon-alert-circle', 'warning')
            } else if (userInfo.role === 'admin') {
                //this.showAlert(i18n.t('Error'), i18n.t('you_are_logged_in'), 'icon-alert-circle', 'warning')
                return this.$router.push({ name: 'admin.dashboard'}).catch(error => { console.info(error.message) })
            }else if (userInfo.role === 'staff') {
                //this.showAlert(i18n.t('Error'), i18n.t('you_are_logged_in'), 'icon-alert-circle', 'warning')
                return this.$router.push({ name: 'staff.dashboard'}).catch(error => { console.info(error.message) })
            }
        }
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
  }
}

</script>

