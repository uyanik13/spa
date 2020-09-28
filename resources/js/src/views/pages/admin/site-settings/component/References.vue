<template>

             <div>
                 <vx-card v-for="(option,index)  in References" :key="index" class="mb-5 ml-2 mr-5 mt-5" >
                    <div class="vx-row">
                        <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                              <vs-input :label="'Brand Name'"  v-model="option.name" class="mt-5 w-full"  />
                        </div>
                        <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                           <vs-input :label="'Brand Url (ex = https://google.com)'"  v-model="option.url" class="mt-5 w-full"  />
                        </div>

                        <div class="flex flex-wrap items-center mb-base ml-3 mt-2">
                          <img v-if="!option.image"  src="https://via.placeholder.com/150.png"  height="150px"  width="150px" class="card-img-top" />
                          <img v-else :src="option.image"   height="150px"  width="150px" class="card-img-top" />
                        <div>
                            <input type="file"  class="hidden" :ref="'brandImage'+index" @change="sliderUpload($event,index,'References')" accept="image/*">
                            <vs-button class="ml-3 sm:mb-0 mb-2" @click="openFileInput('brandImage'+index)">{{$t('addBrandImage')}}</vs-button>
                        </div>
                        </div>
                    </div>
                    <vs-button class="bg-danger mt-3" @click="removeThis(index,'References')" >{{$t('removeThisSection')}}</vs-button>
                </vx-card>

                <vs-button class="mr-6" @click="addOptions('References')" >{{$t('AddNew')}}</vs-button>
                <div class="flex flex-wrap items-center justify-end">
                    <vs-button class="ml-auto mt-2" @click="SaveData('References')">{{$t('save')}}</vs-button>
                </div>
             </div>



</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'


export default {
  components: {
    flatPickr,
    vSelect
  },

  data () {
    return {
      References:
      [
        {
          name: '',
          image: '',
          url: ''
        }
      ]
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
      sliderUpload (input,index,type) {
        //console.log(input.target.files[0])
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
         return this[type][index].image = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    },
    openFileInput (type) {
      return this.$refs[type][0].click()
    }

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
          if (element.type === 'References') {
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
