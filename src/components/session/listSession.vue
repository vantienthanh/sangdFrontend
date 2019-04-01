<template>
  <div class="container table_listSession">
    <div class="row">
      <div class="col-12">
        <h1>Title session</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-hover">
          <tbody>
            <tr v-for="item in listSession" :key="item.id">
              <td width="8%"><img src="@/assets/img/avatar.png" alt=""></td>
              <td>
                <router-link :to="{name: 'sessionDetail', params: {id:item.id}}">{{item.title}}</router-link>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </td>
              <td><i class="fas fa-dollar-sign"></i> 1000$</td>
              <td><i class="far fa-clock"></i>{{item.startTime}}</td>
              <td><i class="fas fa-map-marker-alt"></i> Ha Noi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listSession',
  data: function () {
    return {
      listSession: {}
    }
  },
  mounted () {
    this.$store.dispatch('listSession')
      .then(() => {
        this.listSession = this.getListSession
        console.log(this.listSession)
      })
      .catch(err => console.log(err))
  },
  computed: {
    getListSession: {
      get: function () {
        return this.$store.getters.listSession.data
      }
    }
  },
  methods: {
    viewDetail: function (id) {

    }
  }
}
</script>

<style scoped>

</style>
