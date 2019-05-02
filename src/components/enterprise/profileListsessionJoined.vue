<template>
    <div class="col-md-12">
      <table class="table table-hover">
        <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>
            <router-link :to="{name: 'profileListMemberJoin', params: {id:item.id}}">{{item.title}}</router-link>
          </td>
          <td><i class="far fa-clock"></i>{{item.startTime}} - {{item.endTime}}</td>
          <td><i class="fas fa-map-marker-alt"></i> {{item.location}}</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'profileListsessionJoined',
  data () {
    return {
      list: {}
    }
  },
  mounted () {
    this.$store.dispatch('profile_getListSessionJoined1', localStorage.getItem('user_id'))
      .then(() => {
        this.list = this.$store.getters.listSessionEJoined.data
      })
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>
