<template>
<div class="container-fluid sessionTable">
  <div class="row my-3 py-3 row-background">
    <div class="col-12">
      <div class="row mb-3">
        <div class="col-3">
          <div class="table-number d-flex justify-content-center align-items-center h-100">
            <div>
              <p>Bàn tuyển dụng</p>
            </div>
          </div>
        </div>
        <div class="col-8 text-center">
          <h2>Lorem ipsum dolor sit.</h2>
        </div>
      </div>
      <div class="line"></div>
      <div class="row mt-3 text-center">
        <div class="col-4">
          <p>Số lượng tuyển</p>
          <p>99</p>
        </div>
        <div class="col-4">
          <p>Ngày hết hạn </p>
          <p>1/1/2019</p>
        </div>
        <div class="col-4">
          <button class="btn btn-danger" @click="apply">Tham gia </button>
        </div>
      </div>
    </div>
  </div>
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
