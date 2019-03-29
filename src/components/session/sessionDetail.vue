<template>
  <div class="container session-detail">
    <div class="row title">
      <div class="col-8">
        <h3>PHIÊN GIAO DỊCH VIỆC LÀM NGÀY 15/7/2017</h3>
        <p>Trung tâm Dịch vụ việc làm Hà Nam - Đường Trần Quang Khải – Lê Hồng Phong --- Phủ Lý- Hà Nam</p>
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12">
            <p>
              <span class="title-bold">Bắt đầu:</span>
            </p>
            <p>
              <span class="title-bold">Kết thúc:</span>
            </p>
            <p class="text-danger">
              <span class="title-bold text-danger">Hotline:</span>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="session-status">
              <h1>Lorem ipsum dolor sit</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="item border">
          <div class="my-2 mx-3">
            <p>Cần tuyển</p>
            <div class="border text-center">
              <p>Lorem ipsum dolor sit.</p>
              <img src="@/assets/img/avatar.png" alt="">
            </div>
            <p>
              <span>Ứng viên: 0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sessionDetail',
  data: function () {
    return {
      dataDetail: {}
    }
  },
  mounted () {
    this.$store.dispatch('sessionDetail', this.$route.params.id)
      .then(() => {
        this.dataDetail = this.getDataDetail
        console.log(this.dataDetail)
      })
      .catch(err => console.log(err))
  },
  computed: {
    getDataDetail: {
      get: function () {
        return this.$store.getters.sessionDetail
      }
    }
  }
}
</script>

<style scoped>

</style>
