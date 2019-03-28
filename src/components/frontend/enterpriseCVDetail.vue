<template>
  <div class="container enterpriseCVDetail">
    <div class="row pt-3">
      <div class="col-12">
        <div class="row">
          <div class="col-6">
            <h2 class="heading-title">Lorem ipsum dolor sit amet.</h2>
          </div>
          <div class="col-6">
            <span>Quay lại</span>
          </div>
        </div>
        <div class="heading-line mb-4"></div>
        <div class="row">
          <div class="col-3 right-column">
            <img src="@/assets/img/noimageavailable.png" alt="">
            <div class="content-info border">
              <h3 class="info-header ">Lorem ipsum dolor sit.</h3>
              <p class="text-center font-weight-bold">Lorem ipsum dolor sit.</p>
              <div class="d-flex justify-content-center my-2">
                <span class="text-center cv_status">Lorem ipsum dolor</span>
              </div>
              <div class="mx-3 my-2">
                <div class="dotted-line"></div>
                <div class="row">
                  <div class="col-6">
                    <p>Lorem ipsum.</p>
                  </div>
                  <div class="col-6">
                    <p class="float-right color-orange">Lorem ipsum.</p>
                  </div>
                </div><div class="dotted-line"></div>
                <div class="row">
                  <div class="col-6">
                    <p>Lorem ipsum.</p>
                  </div>
                  <div class="col-6">
                    <p class="float-right color-orange">Lorem ipsum.</p>
                  </div>
                </div>
                <div class="dotted-line"></div>
                <div class="row">
                  <div class="col-6">
                    <p>Lorem ipsum.</p>
                  </div>
                  <div class="col-6">
                    <p class="float-right color-orange">Lorem ipsum.</p>
                  </div>
                </div>
                <div class="dotted-line"></div>
                <div class="row">
                  <div class="col-6">
                    <p>Lorem ipsum.</p>
                  </div>
                  <div class="col-6">
                    <p class="float-right color-orange">Lorem ipsum.</p>
                  </div>
                </div>
                <div class="dotted-line"></div>
                <div class="row">
                  <div class="col-6">
                    <p>Lorem ipsum.</p>
                  </div>
                  <div class="col-6">
                    <p class="float-right color-orange">Lorem ipsum.</p>
                  </div>
                </div>
                <div class="apply">
                  <i class="far fa-file-alt"></i>
                  <span>Apply</span>
                </div>
              </div>

            </div>
          </div>
          <div class="col-9 left-column border">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <div class="dotted-line"></div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error expedita id nulla quia quos!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, nesciunt!</p>
            </div>
            <div class="dotted-line"></div>
            <h2>Lorem ipsum dolor sit.</h2>
            <div class="dotted-line"></div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem consequuntur culpa cum doloremque doloribus excepturi, explicabo illo magnam minus,
                porro quisquam quo unde? Iusto laborum possimus qui. Earum, enim esse eum exercitationem harum nam nesciunt repellendus tempore vero voluptates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enterpriseCVDetail',
  data: function () {
    return {
      dataDetail: {}
    }
  },
  mounted () {
    this.$store.dispatch('e_DetailCV', this.$route.params.id)
      .then(() => {
        this.dataDetail = this.getDataDetail
        console.log(this.dataDetail)
      })
      .catch(err => console.log(err))
  },
  computed: {
    getDataDetail: {
      get: function () {
        return this.$store.getters.e_detailCV
      }
    }
  }
}
</script>

<style scoped>

</style>
