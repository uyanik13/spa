<template>



          <vx-card class="mt-5 w-full">
               <vs-input :label="$t('orderDetailsTitle')"  v-model="orderDetails.title" class="mt-5 w-full"  />

                <div class="flex flex-wrap items-center mb-base mt-5">
               <img :src="!orderDetails.image ? 'https://via.placeholder.com/400.png' : orderDetails.image "  height="200px"  width="400px" class="card-img-top" />
                <div>
                    <input type="file" class="hidden" ref="updateImgInput" @change="update_avatar" accept="image/*">
                    <vs-button class="mr-4 sm:mb-0 mb-2 ml-3" @click="$refs.updateImgInput.click()">{{$t('addImage')}}</vs-button>
                </div>
                </div>

               <div class="flex flex-wrap items-center mb-5 mt-5  h-full">
                      <span>{{$t('Content')}}</span>
                      <quill-editor v-model="orderDetails.desc" :label="$t('Content')" height="600" />
                      <span class="text-danger text-sm" v-show="errors.has('orderDetails.desc')">{{ errors.first('orderDetails.desc') ? $t('Content') : ''}}</span>
                    </div>
                    <vs-button class="ml-auto mt-2" @click="SaveData('orderDetails')">{{$t('save')}}</vs-button>
          </vx-card>



</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    flatPickr,
    quillEditor,
    vSelect
  },

  data () {
    return {
        orderDetails:{ title : '', desc:'', image:''}
    }
  },
  methods:{
    addOptions (type) {
      this[type].push({})
    },
    removeThis (index, type) {
      this[type].splice(index, 1)
    },
    SaveData (dataType) {
      const obj = {
        [dataType]: this[dataType],
        type: dataType
      }
      console.log(obj)
      this.$store.dispatch('custom/addItem', obj).then((response) => {
        this.$vs.notify({
          title: 'Başarılı',
          text:' İçerik Başarıyla Eklendi',
          iconPack: 'feather',
          icon: 'icon-success',
          color: 'success'
        })

      }).catch(error => {
        this.$vs.notify({
          title: 'Hata',
          text: 'İçerik Eklenemedi.',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
      })
    },
    update_avatar (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.orderDetails.image = e.target.result
          console.log('IMAGEURL', e.target.result)
        }
        reader.readAsDataURL(input.target.files[0])
      }
    },

  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  },
  created () {
    this.$store.dispatch('custom/fetchItems')
      .then((response) => {
        response.data.forEach(element => {
          if (element.type === 'HomeUnderMenuSlider') {
            this[element.type].push(JSON.parse(element.JsonData)[element.type])
            this[element.type].splice(0, 1)
            this[element.type] = this[element.type][0]
          } else {
            this[element.type] = JSON.parse(element.JsonData)[element.type]
          }

        })

      })
      .catch((error) => { console.log(error) })

  }
}
</script>
