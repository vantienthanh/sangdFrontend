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
                            <a v-if="sessionInfo.userStatus === null" data-toggle="modal" data-target="#exampleModal" href="#" @click="join">Tham gia</a>
                            <p v-else-if="sessionInfo.userStatus === 'waitting'" href="#">Chờ xét duyệt</p>
                            <a v-else href="#">Không thể tham gia</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="item in dataDetail" :key="item.id" class="col-3">
                <div class="item border">
                    <div class="my-2 mx-3">
                        <p>Cần tuyển</p>
                        <router-link :to="{name:'sessionTable', params: {id:item.id}}">
                            <div class="border text-center">
                                <p>{{item.enterpriseName}}</p>
                                <img v-if="item.avatar === null" src="@/assets/img/noimageavailable.png" alt="">
                                <img v-else :src="item.avatar" alt="">
                            </div>
                        </router-link>
                        <p>
                            <span>Ứng viên: {{item.numberUserJoin}}</span>
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
                      <div v-if="roleUser === 'enterprise'" class="text-center">
                        <h3 >Xác nhận tham gia sàn giao dịch?</h3>
                        <p>Chọn hồ sơ tuyển dụng</p>
                        <select class="form-control mt-2" v-model="selectedCV" name="" id="">
                          <option v-for="item in listEnterpriseCV" :key="item.id" :value="item.id">{{item.title}}</option>
                        </select>
                      </div>
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
      roleUser: '',
      infoData: {
        user_id: null,
        id: null
      },
      listEnterpriseCV: {},
      selectedCV: 0
    }
  },
  mounted () {
    this.infoData.id = this.$route.params.id
    this.infoData.user_id = localStorage.getItem('user_id')
    this.$store.dispatch('sessionInfo', this.infoData)
      .then(() => {
        this.sessionInfo = this.getSessionInfo
        console.log(this.sessionInfo, 'aaa')
      })
      .catch(err => console.log(err, '111'))
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
        jobNews_id: this.selectedCV,
        status: 'waitting'
      }
      this.$store.dispatch('e_joinSession', data)
        .then(() => {
          // eslint-disable-next-line
          $('#exampleModal').trigger('click')
        })
        .catch(err => console.log(err))
    },
    join: function () {
      this.$store.dispatch('profile_getListEnterpriseCVByUser', localStorage.getItem('user_id'))
        .then(() => {
          this.listEnterpriseCV = this.$store.getters.listEnterpriseByUser.data
          console.log(this.listEnterpriseCV, '111')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
