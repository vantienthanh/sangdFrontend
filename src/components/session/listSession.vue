<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3>title</h3>
                <p>start time</p>
                <p>end time</p>
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
        return this.$store.getters.listSession
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
