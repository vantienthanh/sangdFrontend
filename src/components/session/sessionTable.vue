<template>
  <div>
    <div class="container sessionTable">
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
              <h2>{{dataDetail.title}}</h2>
            </div>
          </div>
          <div class="line"></div>
          <div class="row mt-3 text-center">
            <div class="col-4">
              <p>Đang tuyển dụng</p>
              <p>{{dataDetail.amount}}</p>
            </div>
            <div class="col-4">
              <p>Ngày tạo tin </p>
              <p>{{dataDetail.created_at}}</p>
            </div>
            <div class="col-4">
              <button v-if="user_role === 'member'" class="btn btn-danger" @click="apply">Nộp CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col-12">
        <div class="row mt-4">
          <div class="col-12">
            <h3>Thông tin chi tiết</h3>
            <p>{{dataDetail.description}}</p>
            <h3>Chế độ đãi ngộ</h3>
            <p>{{dataDetail.benefit}}</p>
            <h3>Thời gian làm việc</h3>
            <p>{{dataDetail.workingTime}}</p>
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
      user_role: '',
      formData: {
        user_id: null,
        enterpriseSession_id: null
      }
    }
  },
  mounted () {
    this.user_role = localStorage.getItem('role')
    this.formData.user_id = localStorage.getItem('user_id')
    this.formData.enterpriseSession_id = this.$route.params.id
    this.$store.dispatch('tableGetEnterpriseCV', this.$route.params.id)
      .then(() => {
        this.dataDetail = this.$store.getters.tableEnterpriseCV.data
        console.log(this.dataDetail)
      })
      .catch(err => console.log(err))
  },
  methods: {
    apply: function () {
      this.$store.dispatch('m_joinSession', this.formData)
        .then(() => {
          console.log('done')
          // call to toasted
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
