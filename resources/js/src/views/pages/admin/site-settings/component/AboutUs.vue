<template>
  <div class="vx-col w-full md:w-12/12 mb-base">


             <vx-card >
               <div class="flex flex-wrap items-center mb-5 mt-5 ml-5 h-full">
                      <span>{{$t('Content')}}</span>
                      <quill-editor v-model="aboutUsPage.content" :label="$t('Content')" height="600" />
                      <span class="text-danger text-sm" v-show="errors.has('aboutUsPage.Content')">{{ errors.first('Content') ? $t('Content') : ''}}</span>
               </div>
               <div class="flex flex-wrap items-center mb-5 mt-10 ml-5 h-full">
                      <span>{{$t('mission')}}</span>
                      <quill-editor v-model="aboutUsPage.mission" :label="$t('mission')" height="600" />
                      <span class="text-danger text-sm" v-show="errors.has('aboutUsPage.mission')">{{ errors.first('mission') ? $t('mission') : ''}}</span>
               </div>
               <div class="flex flex-wrap items-center mb-5 mt-10 ml-5 h-full">
                      <span>{{$t('vision')}}</span>
                      <quill-editor v-model="aboutUsPage.vision" :label="$t('vision')" height="600" />
                      <span class="text-danger text-sm" v-show="errors.has('aboutUsPage.vision')">{{ errors.first('vision') ? $t('vision') : ''}}</span>
               </div>
            </vx-card>
           <vs-button class="ml-auto mt-2" @click="SaveData('aboutUsPage')">{{$t('save')}}</vs-button>


        

            <vx-card v-for="(option,index)  in AboutUSMembers" :key="index" class="mb-5 ml-2 mr-5 mt-5" >
                    <div class="vx-row">

                        <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                             <vs-input :label="'Name'"  v-model="option.name" class="mt-5 w-full"  />
                         </div>

                        <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                           <vs-input :label="'Position'"  v-model="option.position" class="mt-5 w-full"  />
                        </div>

                        <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                            <vs-input :label="'Url'"  v-model="option.url" class="mt-5 w-full"  />
                        </div>

                        <div class="vx-col sm:w-1/2 lg:w-1/1 mb-2">
                            <div class="flex flex-wrap items-center mb-base ml-3 mt-2">
                          <img v-if="!option.image"  src="https://via.placeholder.com/150.png"  height="150px"  width="150px" class="card-img-top" />
                          <img v-else :src="option.image"   height="150px"  width="150px" class="card-img-top" />
                        <div>
                            <input type="file"  class="hidden" :ref="'AboutUSMembers'+index" @change="sliderUpload($event,index,'AboutUSMembers')" accept="image/*">
                            <vs-button class="ml-3 sm:mb-0 mb-2" @click="openFileInput('AboutUSMembers'+index)">{{$t('AboutUSMembers')}}</vs-button>
                        </div>
                        </div>
                        </div>


                    </div>
                    <vs-button class="bg-danger mt-3" @click="removeThis(index,'AboutUSMembers')" >{{$t('removeThisSection')}}</vs-button>
                </vx-card>

                <vs-button class="mr-6" @click="addOptions('AboutUSMembers')" >{{$t('AddNew')}}</vs-button>
                <div class="flex flex-wrap items-center justify-end">
                    <vs-button class="ml-auto mt-2" @click="SaveData('AboutUSMembers')">{{$t('save')}}</vs-button>
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
        title: '',
        AboutUSMembers:
            [
                {
                    name: '',
                position: '',
                image: '',
                url: ''
                }
            ],
            aboutUsPage:{
                content : '',
                mission : '',
                vision : ''
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
          if (element.type === 'AboutUSMembers') {
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
