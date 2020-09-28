<template>
    <div class="vx-row">

        <div class="vx-col w-full lg:w-1/4" v-for="(file,index) in List" :key="index">
                <vx-card class="overlay-card overflow-hidden mb-5">
                    <template slot="no-body">
                      <img class="responsive h-64" :src=" file.type === 'png' || file.type === 'jpeg' || file.type === 'jpg' ? file.slug : '/images/site_settings/file.png' ">
                        <div class="card-overlay text-white flex flex-col justify-between">
                            <div class="flex justify-between flex-wrap">
                            <popup-background v-show="file.type === 'png' || file.type === 'jpeg' || file.type === 'jpg'" :File="file"/>
                            <vs-button color="warning" type="filled" icon-pack="feather"
                                        v-clipboard:copy="file.slug"
                                        v-clipboard:success="copySlug" icon="icon-copy"></vs-button>
                            <vs-button color="danger" type="filled" icon-pack="feather" @click.stop="deleteData(file.id)" icon="icon-trash"></vs-button>
                            </div>
                        </div>
                    </template>
                </vx-card>
            </div>



    </div>
</template>

<script>

import PopupBackground from './PopupBackground.vue'
import Swal from 'sweetalert2'
import i18n from '@/i18n/i18n'

export default {
  components:{
    PopupBackground

  },
  data () {
    return {
      site_url:process.env.MIX_APP_URL
    }
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    },
    List () {
      return this.$store.state.gallery.galleryList
    }
  },
  methods:{
    closeCardAnimationDemo (card) {
      card.removeRefreshAnimation(3000)
    },
    copySlug () {
      this.$vs.notify({
        title: 'Başarılı',
        text: 'Link Kopyalandı',
        color: 'success',
        iconPack: 'feather',
        position: 'top-center',
        icon:'icon-check-circle'
      })
    },
    deleteData (id) {
      Swal.fire({
        type: 'warning',
        title: i18n.t('areYouSureToDeleteThis'),
        text: i18n.t('areYouSureToDeleteData'),
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: i18n.t('ok'),
        cancelButtonText: i18n.t('cancel')
      }).then((result) => {
        if (result.value) {
          console.log(result)
          this.$store.dispatch('gallery/removeItem', id)
            .then((response) => {
              this.$vs.notify({
                title: 'Başarılı',
                text: 'içerik silindi',
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              })

            })
            .catch(error => {
              this.$vs.notify({
                title: 'Hata',
                text: 'İçerik Silinemedi.',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              })
            })
        }
      }).catch((error) => {
        console.log('ERROR:', error)
      })
    }
  },
  created () {
    this.$store.dispatch('gallery/fetchItems')
  }
}
</script>

<style lang="scss" scoped>
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }

}
</style>
