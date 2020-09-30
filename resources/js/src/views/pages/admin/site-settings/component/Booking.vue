<template>
  <div class="vx-col w-full md:w-12/12 mb-base">



            <vx-card  class="mb-5 ml-2 mr-5 mt-5" >
                    <div class="vx-row">

                        <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                             <vs-input :label="$t('price')" placeholder="ex= 120"  v-model="calendarInfo.price" class="mt-5 w-full"  />
                         </div>

                        <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                            <vs-input :label="$t('tax')" placeholder="ex= 18"  v-model="calendarInfo.kdv" class="mt-5 w-full"  />
                        </div>



                    </div>

                </vx-card>

                <div class="flex flex-wrap items-center justify-end">
                    <vs-button class="ml-auto mt-2" @click="SaveData('calendarInfo')">{{$t('save')}}</vs-button>
                </div>



  </div>

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
    vSelect,
    quillEditor
  },
  data () {
    return {
        calendarInfo:
                {
                price: '',
                kdv: '',
                }

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
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.auth.user
    }
  },
  created () {
    this.$store.dispatch('custom/fetchItems')
      .then((response) => {
        response.data.forEach(element => {
          if (element.type === 'calendarInfo') {
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
