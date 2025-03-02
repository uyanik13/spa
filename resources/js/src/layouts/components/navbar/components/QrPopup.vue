<!-- =========================================================================================
    File Name: PopupBackground.vue
    Description: Change background when popup opens
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: https://www.dijitalreklam.org
========================================================================================== -->

<template>
  <div class="align-content-center mt-5">
    <vs-button
      v-show="activeUser.role === 'admin' || activeUser.role === 'staff'"
      class="mb-4 ml-8 shadow-lg"
      type="gradient"
      color="#2196F3"
      gradient-color-secondary="#E8603B"
      @click="popupActive = true"
    >
      {{ $t("readQRCode") }}
    </vs-button>

    <vs-popup
      background-color="rgba(152,152,152,.7)"
      :background-color-popup="colorx"
      class="bg-primary-gradient"
      :title="$t('qrCodeReader')"
      :active.sync="popupActive"
    >
      <div class="vx-row pt-10 pl-5">
        <div class="vx-col w-full sm:w-1/1 lg:w-1/2 ">
          <div class="my-6">
            <vs-tabs>
              <vs-tab :label="$t('camera')">
                <qrcode-stream @decode="onDecode"></qrcode-stream>
              </vs-tab>

              <vs-tab :label="$t('IDNummer')">
                <vs-input
                  class="w-full mb-base"
                  icon-pack="feather"
                  icon="icon-search"
                  :label-placeholder="$t('appointment_id')"
                  v-model="orderId"
                ></vs-input>
                <vs-button @click="fetchUsersAppointment"
                  >Redeem ID</vs-button
                >
              </vs-tab>
            </vs-tabs>
          </div>
        </div>

        <!-- CONTENT CARD - PROGRESS BAR/GOAL -->
        <div v-show="AppointmentUsers.length">
          <div class="vx-col w-full sm:w-1/1 lg:w-1/2 ">
            <template>
              <div
                class="my-6"
                v-for="(appointment, index) in AppointmentUsers"
                :key="index"
              >
                <h5 class="mb-2">Ticket/Kundeninformationen</h5>
                <h6 class="mb-2">{{ appointment.name }}</h6>
                <p class="text-black">
                  TickedId:{{ appointment.appointment_id }}
                </p>
                <p class="text-black">
                  Datum:{{ appointment.appointment_date.substr(0, 10) }}
                </p>
                <p class="text-black">
                  Uhrzeit bis: {{ appointment.hours_between }}
                </p>
                <p class="text-black">
                  Dauerkartenbesitzer:
                  {{
                    appointment.user
                      ? appointment.user.subscribed
                        ? "Ja"
                        : "Nine"
                      : ""
                  }}
                </p>
                <vs-button
                  v-if="!appointment.user.isHere"
                  type="gradient"
                  class="mt-6 mr-5"
                  color="#7367F0"
                  @click="clientCameOrLeft(appointment.user_id, 1)"
                  gradient-color-secondary="#BA300B"
                >
                  {{ $t("clientCame") }}
                </vs-button>

                <vs-button
                  v-else
                  type="gradient"
                  class="mt-6 mr-5"
                  color="#7367F0"
                  @click="clientCameOrLeft(appointment.user_id, 0)"
                  gradient-color-secondary="#BA300B"
                >
                  {{ $t("clientHasLeft") }}
                </vs-button>

                <div class="my-6" v-show="!appointment.user.isHere && appointment.user.inAppointment">
                  <p class="text-black font-semibold">eingeloggt:</p>
                  {{ appointment.user.login_date }}
                  <p class="text-black font-semibold">Ausloggen:</p>
                  {{ appointment.user.logout_date }}
                  <p class="text-black font-semibold" >Aufenthaltsdauer:</p>
                  {{
                    diff_minutes(
                      new Date(appointment.user.login_date),
                      new Date(appointment.user.logout_date),
                      index
                    )
                  }}
                  Minuten 
                  <p
                    class="text-black font-semibold"
                    
                  >
                    Ablaufbetrag: € {{ countStayTime(appointment.stayTime) }}
                  </p>
                  <vs-divider></vs-divider>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import i18n from "@/i18n/i18n";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export default {
  components: {
    VuePerfectScrollbar
  },
  props: {},
  data() {
    return {
      colorx: "#ffffff",
      popupActive: false,
      stopLoop: true,
      orderId: "1",
      AppointmentUsers: [],
      calendarInfo: {},
      stayTime: ""
    };
  },
  computed: {
    activeUser() {
      return Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    }
  },

  methods: {
    diff_minutes(dt2, dt1,index) {
      var diff = (dt2.getTime() - dt1.getTime()) / 1000;
      diff /= 60;
      this.AppointmentUsers[index].stayTime = Math.abs(Math.round(diff));
      return this.AppointmentUsers[index].stayTime
      
    },

    countStayTime(stayTime) {
      console.log('stay',stayTime);
      //console.log(this.calendarInfo.timeout_price)
      let time = stayTime - 180;
      if (time < 0) return 0;
      //let timediff = (time / 30) < 30 ? 0 :  (time / 30) 
      let timediff = (time / 30) 
      return timediff * this.calendarInfo.timeout_price 
    
      //return true;
    },

    fetchUsersAppointment() {
      this.$store
        .dispatch("form/findAppointmentUsers", this.orderId)
        .then(res => {
          console.log(res);
          this.AppointmentUsers = res;
        })
        .catch(err => {
          if (err.response.status === 404) {
            this.AppointmentUsers = [];
            return;
          }
          console.error(err);
        });
    },

    clientCameOrLeft(userId, type) {
      const payload = {
        id: userId,
        isHere: type
      };
      this.$store
        .dispatch("user/updateUser", payload)
        .then(response => {
          this.$vs.notify({
            title: "Başarılı",
            text: "Değişiklikler Başarıyla Düzenlendi",
            iconPack: "feather",
            icon: "icon-success",
            color: "success"
          });

          this.fetchUsersAppointment();
        })
        .catch(error => {
          this.$vs.notify({
            title: "Hata",
            text: "Değişiklikler Kaydedilemedi.",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger"
          });
        });
    },
    showAlert(title, text, icon, color) {
      this.$vs.notify({
        title,
        text,
        iconPack: "feather",
        icon,
        color
      });
    },

    onDecode(decodedString) {
      console.log(decodedString);
      if (decodedString) {
        this.orderId = decodedString;
        return this.fetchUsersAppointment();
      }
    }
  },

  created() {
    //console.log(new Date(2020-10-01 07:16:15))
    //this.fetchUsersAppointment();
    this.$store
      .dispatch("custom/fetchItems")
      .then(response => {
        response.data.forEach(element => {
          if (element.type === "calendarInfo")
            this.calendarInfo = JSON.parse(element.JsonData).calendarInfo;
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
#ecommerce-checkout-demo {
  .item-view-primary-action-btn {
    color: #2c2c2c !important;
    background-color: #f6f6f6;
  }

  .item-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }

  .vue-form-wizard {
    padding-bottom: 0;

    ::v-deep .wizard-header {
      padding: 0;
    }

    ::v-deep .wizard-tab-content {
      padding-right: 0;
      padding-left: 0;
      padding-bottom: 0;

      .wizard-tab-container {
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>
