<template>
  <div class="container frontEnterpriseListCV">
    <div class="row">
      <div class="col-12">
        <div v-for="item in list" :key="item.id" class="row list">
          <div class="col-1">
            <img v-if="item.avatar === null" src="@/assets/img/noimageavailable.png" alt="">
            <img v-else :src="item.avatar" alt="">
          </div>
          <div class="col-7">
            <div class="row">
              <div class="col-8">
                <router-link :to="{name:'enterpriseCVDetail', params: {id:item.id}}">
                  <h6 class="mb-0 mt-1">{{item.title}}</h6>
                </router-link>
              </div>
              <div class="col-2 ">
                <span class="date d-block text-center">{{item.created_at}}</span>
              </div>
              <div class="col-2 d-flex">
                <i class="fas fa-map-marker-alt mt-2 mr-1"></i>
                <span class="d-block  mt-1">HaNoi</span>
              </div>
            </div>
            <div class="list-dotted my-1"></div>
            <div class="row">
              <div class="col-8">
              </div>
              <div class="col-4 ">
                <p><i class="fas fa-donate"></i>  {{item.salary}}</p>
              </div>
            </div>
          </div>
          <div class="col-4">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enterpriseListCV',
  data: function () {
    return {
      list: {}
    }
  },
  mounted () {
    this.$store.dispatch('e_getListCV')
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
        return this.$store.getters.enterprise_getListCV.data
      }
    }
  }
}
</script>

<style scoped>

</style>
