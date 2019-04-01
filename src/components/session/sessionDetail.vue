<template>
    <div class="container session-detail">
        <div class="row title">
            <div class="col-8">
                <h3>{{sessionInfo.title}}</h3>
                <p>Trung tâm Dịch vụ việc làm Hà Nam - Đường Trần Quang Khải – Lê Hồng Phong --- Phủ Lý- Hà Nam</p>
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-12">
                        <p>
                            <span class="title-bold">Bắt đầu: </span>
                            {{sessionInfo.startTime}}
                        </p>
                        <p>
                            <span class="title-bold">Kết thúc: </span>
                            {{sessionInfo.endTime}}
                        </p>
                        <p class="text-danger">
                            <span class="title-bold text-danger">Hotline:</span>
                            01234567890
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="session-status">
                            <!--<h1>Phiên giao dịch đã kết thúc</h1>-->
                            <a data-toggle="modal" data-target="#exampleModal" href="#">Tham gia</a>
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
                        <a href="">
                            <div class="border text-center">
                                <p>Lorem ipsum dolor sit.</p>
                                <img src="@/assets/img/avatar.png" alt="">
                            </div>
                        </a>
                        <p>
                            <span>Ứng viên: 0</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal join session  -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tham gia sàn giao dịch</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p v-if="roleUser === 'enterprise'">Xác nhận tham gia sàn giao dịch</p>
                        <p v-else>Tài khoản của bạn không phải là tài khoản doanh nghiệp </p>
                    </div>
                    <div class="modal-footer">
                        <button v-if="roleUser === 'enterprise'" type="button" class="btn btn-primary"
                                @click="joinSession">Xác nhận
                        </button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
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
      dataDetail: {},
      sessionInfo: {},
      roleUser: ''
    }
  },
  mounted () {
    this.$store.dispatch('sessionInfo', this.$route.params.id)
      .then(() => {
        this.sessionInfo = this.getSessionInfo
      })
      .catch(err => console.log(err))
    this.$store.dispatch('sessionDetail', this.$route.params.id)
      .then(() => {
        this.dataDetail = this.getDataDetail
        console.log(this.dataDetail)
      })
      .catch(err => console.log(err))
    this.roleUser = localStorage.getItem('role')
  },
  computed: {
    getDataDetail: {
      get: function () {
        return this.$store.getters.sessionDetail.data
      }
    },
    getSessionInfo: {
      get: function () {
        return this.$store.getters.sessionInfo.data
      }
    }
  },
  methods: {
    joinSession: function () {
      let data = {
        user_id: localStorage.getItem('user_id'),
        session_id: this.$route.params.id,
        status: 'waitting'
      }
      this.$store.dispatch('e_joinSession', data)
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
