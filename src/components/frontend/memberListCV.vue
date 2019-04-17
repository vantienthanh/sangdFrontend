<template>
  <div class="container table_listSession">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Danh sách </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-hover">
          <tbody>
          <tr v-for="item in list" :key="item.id">
            <td v-if="item.avatar === null" width="8%"> <img  src="@/assets/img/noimageavailable.png" alt="" width="150px"></td>
            <td v-else width="8%"><img  :src="item.avatar" alt=""></td>
            <td width="60%">
              <router-link :to="{name: 'sessionDetail', params: {id:item.id}}">{{item.title}}</router-link>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </td>
            <td><i class="far fa-clock"></i>{{item.startTime}}</td>
            <td><i class="fas fa-map-marker-alt"></i> {{item.location}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'memberListCV',
  data: function () {
    return {
      list: {}
    }
  },
  mounted () {
    this.$store.dispatch('m_getListCV')
      .then(() => {
        this.list = this.getList
        console.log(this.list, '111')
      }).catch(err => console.log(err))
  },
  methods: {

  },
  computed: {
    getList: {
      get: function () {
        return this.$store.getters.m_listCV.data
      }
    }
  }
}
</script>

<style scoped>

</style>
