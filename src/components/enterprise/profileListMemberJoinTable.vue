<template>
<div class="col-12">

</div>
</template>

<script>
export default {
  name: 'profileListMemberJoinTable',
  data () {
    return {
      list: {}
    }
  },
  mounted () {
    this.$store.dispatch('profile_getListUserJoined1', this.$route.params.id)
      .then(() => {
        this.list = this.$store.getters.listMemberJoinedTable
        console.log(this.list)
      })
  }
}
</script>

<style scoped>

</style>
