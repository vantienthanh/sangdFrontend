<template>
  <div class="container enterpriseCVDetail">
    <div class="row pt-3">
      <div class="col-12">
        <div class="row">
          <div class="col-6">
            <h2 v-if="dataDetail.companyName !== null" class="heading-title">{{dataDetail.companyName}}</h2>
          </div>
          <div class="col-6">
            <div class="text-right">
              <button class="btn">Quay lại</button>
            </div>
          </div>
        </div>
        <div class="heading-line mb-4"></div>
        <div class="row">
          <div class="col-3 right-column">
            <img src="@/assets/img/noimageavailable.png" alt="">
            <div class="content-info border">
              <h3 class="info-header ">Thông tin tuyển dụng</h3>
              <p class="text-center font-weight-bold">Tình trạng hồ sơ</p>
              <div class="d-flex justify-content-center my-2">
                <span class="text-center cv_status">Được phê duyệt</span>
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
                    <p>Ngày tạo hồ sơ</p>
                  </div>
                  <div class="col-6">
                    <p class="float-right color-orange">{{dataDetail.created_at}}</p>
                  </div>
                </div>
                <div class="dotted-line"></div>
                <div class="row">
                  <div class="col-6">
                    <p>Hạn nộp CV</p>
                  </div>
                  <div class="col-6">
                    <p class="float-right color-orange">{{dataDetail.endTime}}</p>
                  </div>
                </div>
                <div class="apply">
                  <i class="far fa-file-alt"></i>
                  <span>Nộp CV</span>
                </div>
              </div>

            </div>
          </div>
          <div class="col-9 left-column border">
            <h2 class="text-center">{{dataDetail.title}}</h2>
            <!--<div class="dotted-line"></div>-->
            <!--<div>-->
              <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error expedita id nulla quia quos!</p>-->
              <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, nesciunt!</p>-->
            <!--</div>-->
            <div class="dotted-line"></div>
            <h2>Mô tả công việc</h2>
            <div class="dotted-line"></div>
            <div>
              <p>{{dataDetail.description}}</p>
            </div>
            <div class="dotted-line"></div>
            <h2>Chế độ đãi ngộ</h2>
            <div class="dotted-line"></div>
            <div>
              <p>{{dataDetail.benefit}}</p>
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
        return this.$store.getters.e_detailCV.data
      }
    }
  }
}
</script>

<style scoped>

</style>
