<template>
  <div class="container table_listSession">
    <div class="row">
      <div class="col-12">
        <h1>Chào mừng bạn đến với sàn giao dịch việc làm</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-hover">
          <tbody>
            <tr v-for="item in listSession" :key="item.id">
              <td>
                <router-link :to="{name: 'sessionDetail', params: {id:item.id}}">{{item.title}}</router-link>
              </td>
              <!--<td><i class="fas fa-dollar-sign"></i> 1000$</td>-->
              <td><i class="far fa-clock"></i>{{item.startTime}} - {{item.endTime}}</td>
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
