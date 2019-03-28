<template>
  <div>{{list}}</div>
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
        console.log(this.list)
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
