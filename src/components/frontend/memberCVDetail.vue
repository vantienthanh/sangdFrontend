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
              <button class="btn" @click="backBtn">Quay lại</button>
            </div>
          </div>
        </div>
        <div class="heading-line mb-4"></div>
        <div class="row">
          <div class="col-3 right-column">
            <img v-if="dataDetail.avatar !== null" :src="dataDetail.avatar" alt="">
            <img v-else src="@/assets/img/noimageavailable.png" alt="">
            <div class="content-info border">
              <h3 class="info-header ">Thông tin ứng viên</h3>
              <p class="text-center font-weight-bold">Tình trạng hồ sơ</p>
              <div class="d-flex justify-content-center my-2">
                <span class="text-center cv_status">Được phê duyệt</span>
              </div>
              <div class="mx-3 my-2">
                <div class="dotted-line"></div>
                <div class="row">
                <div class="col-6">
                <p>Họ tên:</p>
                </div>
                <div class="col-6">
                <p class="float-right color-orange">{{dataDetail.fullName}}</p>
                </div>
                </div>
                <div class="dotted-line"></div>
                <!--<div class="row">-->
                  <!--<div class="col-6">-->
                    <!--<p>Thời gian bắt đầu</p>-->
                  <!--</div>-->
                  <!--<div class="col-6">-->
                    <!--<p class="float-right color-orange">{{dataDetail.startTime}}</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="dotted-line"></div>-->
                <!--<div class="row">-->
                  <!--<div class="col-6">-->
                    <!--<p>Thời gian kết thúc</p>-->
                  <!--</div>-->
                  <!--<div class="col-6">-->
                    <!--<p class="float-right color-orange">{{dataDetail.endTime}}</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="dotted-line"></div>-->
                <div class="row">
                  <div class="col-6">
                    <p>Ngày tạo hồ sơ</p>
                  </div>
                  <div class="col-6">
                    <p class="float-right color-orange">{{dataDetail.created_at}}</p>
                  </div>
                </div>
                <!--<div class="dotted-line"></div>-->
                <!--<div class="row">-->
                  <!--<div class="col-6">-->
                    <!--<p>Hạn nộp CV</p>-->
                  <!--</div>-->
                  <!--<div class="col-6">-->
                    <!--<p class="float-right color-orange">{{dataDetail.endTime}}</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="apply">-->
                <!--<i class="far fa-file-alt"></i>-->
                <!--<span>Nộp CV</span>-->
                <!--</div>-->
              </div>

            </div>
          </div>
          <div class="col-9 left-column border">
            <h2 class="text-center">{{dataDetail.title}}</h2>
            <div class="dotted-line"></div>
            <h2>Nghành nghề</h2>
            <div class="dotted-line"></div>
            <div>
              <p>{{dataDetail.job}}</p>
            </div>
            <div class="dotted-line"></div>
            <h2>Địa điểm tìm việc</h2>
            <div class="dotted-line"></div>
            <div>
              <p>{{dataDetail.location}}</p>
            </div>
            <div class="dotted-line"></div>
            <h2>Thời gian làm việc mong muốn</h2>
            <div class="dotted-line"></div>
            <div>
              <p>{{dataDetail.workingTime}}</p>
            </div>
            <div class="dotted-line"></div>
            <h2>Kinh nghiệm làm việc và mong muốn</h2>
            <div class="dotted-line"></div>
            <div>
              <p>{{dataDetail.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    this.$store.dispatch('m_detailCV1', this.$route.params.id)
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
  },
  methods: {
    backBtn: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
