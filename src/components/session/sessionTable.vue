<template>
<div>
    <button @click="apply">Tham gia </button>
</div>
</template>

<script>
export default {
  name: 'sessionTable',
  data: function () {
    return {
      dataDetail: {},
      formData: {
        user_id: null,
        enterpriseSession_id: null
      }
    }
  },
  mounted () {
    this.formData.user_id = localStorage.getItem('user_id')
    this.formData.enterpriseSession_id = this.$route.params.id
    // this.$store.dispatch('sessionDetail', this.$route.params.id)
    //   .then(() => {
    //     this.dataDetail = this.getDataDetail
    //     console.log(this.dataDetail)
    //   })
    //   .catch(err => console.log(err))
  },
  methods: {
    apply: function () {
      this.$store.dispatch('m_joinSession', this.formData)
        .then(() => {
          console.log('done')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
