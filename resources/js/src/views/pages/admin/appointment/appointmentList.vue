

<template>
  <div id="data-list-list-view" class="data-list-container">

    <appointment-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />

   <table-ogur
        :sst="true"
        @search="handleSearch"
        @change-page="handleChangePage"
        @sort="handleSort"
        :total="blogPosts.total ? blogPosts.total : 15"
        v-model="selected"
        pagination
        search
        :max-items="blogPosts.to"
        :last-page="blogPosts.last_page"
        :data="blogPosts.data ? blogPosts.data : fakeData ">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center data-list-btn-container">

          <!-- ADD NEW -->
        <!--  <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">{{$t('addPost')}}</span>
          </div>-->

        </div>
     </div>


      <template slot="thead">
        <vs-th sort-key="id">{{$t('ID')}}</vs-th>
        <vs-th sort-key="appointment_id">{{$t('appointmentId')}}</vs-th>
        <vs-th sort-key="name">{{$t('name')}}</vs-th>
        <vs-th sort-key="email">{{$t('email')}}</vs-th>
        <vs-th sort-key="phone">{{$t('phone')}}</vs-th>
        <vs-th sort-key="message">{{$t('appointmendDate')}}</vs-th>

      </template>

        <template slot-scope="{data}">
          <tbody>
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td>
              <p class="product-name font-medium truncate">{{ tr.id}}</p>
              </vs-td>

              <vs-td>
                <p class="product-name font-medium truncate">{{ tr.appointment_id }}</p>
              </vs-td>
              <vs-td>
                <p class="product-name font-medium truncate">{{ tr.name }}</p>
              </vs-td>
              <vs-td>
                <p class="product-name font-medium truncate">{{ tr.email }}</p>
              </vs-td>
              <vs-td>
                <p class="product-name font-medium truncate">{{ tr.phone }}</p>
              </vs-td>


              <vs-td>
                <p class="product-name font-medium truncate">{{ tr.appointment_date.substr(0,10)}} / {{ tr.hours_between}}</p>
              </vs-td>

<!--              <vs-td>-->
<!--            <vs-progress :percent="Number(tr.price)" :color="getPopularityColor(Number(tr.price))" class="shadow-md" />-->
<!--              </vs-td>-->



            </vs-tr>
          </tbody>
        </template>
    </table-ogur>
  </div>
</template>

<script>
import appointmentSidebar from './appointmentSidebar.vue'
import Swal from 'sweetalert2'
import moment from 'moment'
import i18n from '@/i18n/i18n'
import axios from 'axios'
import TableOgur from '@/components/TableOgur'

export default {
  components: {
    appointmentSidebar,
    TableOgur

  },
  data () {
    return {
      selected: [],
      sst: false,
      professions: [],
      fakeData:[
        {
          user: {
            name: 'Loading...'
          },
          seo_title: 'Loading...',
          seo_description: 'Loading...',
          status: 1
        }
      ],
      itemsPerPage: 10,
      isMounted: false,
      addNewDataSidebar: false,
      sidebarData: {},
      FormData : {

      }
    }
  },
  computed: {
     currentPage () {
      return this.blogPosts.current_page
    },
    blogPosts () {
      return this.$store.state.form.formList
    },

  },
  methods: {
    format_date (value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY - hh:mm')
      }
    },handleSearch (search_value) {
      axios.post('/api/appointment-search', {search_value})
        .then(response => {
          console.log(response.data)
          this.$store.commit('form/SET_ITEM', response.data)
          //this.$store.state.post.pages = response.data.pages
        })
    },
    handleChangePage () {
      axios.get(this.blogPosts.next_page_url)
        .then(response => {
          //console.log(response.data)
         this.$store.commit('form/SET_ITEM', response.data)
          //this.$store.state.post.pages = response.data.pages
        })
    },
    handleSort (key, active) {
      //console.log(key, active)
      axios.post('/api/appointment-sort', {key, active})
        .then(response => {
          console.log(response.data)
          this.$store.commit('form/SET_ITEM', response.data)
          //this.$store.state.post.pages = response.data.pages
        })
    },
    addNewData () {
      this.sidebarData = {
        //categories:this.categoryList,
      }
      this.toggleDataSidebar(true)
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
          this.$store.dispatch('form/removeItem', id)
            .then((response) => {
              this.$vs.notify({
                title: 'Başarılı',
                text: `${response.data.post_title  } || Adlı içerik silindi`,
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
    },
    editData (data) {
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },
    getOrderStatusColor (status) {
      // if(status == 'open') return "warning"
      if (status == '1') return 'success'
      if (status == '0') return 'primary'
      return 'primary'
    },
    getPopularityColor (num) {
      if (num > 90) return 'success'
      if (num > 70) return 'primary'
      if (num >= 50) return 'warning'
      if (num < 50) return 'danger'
      return 'primary'
    },
    toggleDataSidebar (val = false) {
      this.addNewDataSidebar = val
    },
    appendFormData (data) {
      const map = new Map(Object.entries(JSON.parse(data.FormData)))
      for (const [key, value] of map) {
        this.FormData.push({
          key,
          value
        })
      }
      this.FormData.splice(0, 2)
      console.log(this.FormData)
      return this.FormData
    }
  },
  created () {
    this.$store.dispatch('form/fetchItems')
  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style lang="scss">
#data-list-list-view {
  .vs-con-table {

    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
