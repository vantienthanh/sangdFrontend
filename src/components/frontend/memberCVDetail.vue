<template>
  <div>{{dataDetail}}</div>
</template>

<script>
export default {
  name: 'memberCVDetail',
  data: function () {
    return {
      dataDetail: {}
    }
  },
  mounted () {
    this.$store.dispatch('m_DetailCV', this.$route.params.id)
      .then(() => {
        this.dataDetail = this.getDataDetail
        console.log(this.dataDetail)
      })
      .catch(err => console.log(err))
  },
  computed: {
    getDataDetail: {
      get: function () {
        return this.$store.getters.m_detailCV.data
      }
    }
  }
}
</script>

<style scoped>

</style>
