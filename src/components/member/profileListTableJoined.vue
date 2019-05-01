<template>
    <div class="col-12">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center mt-4">Danh sách các bàn bạn đã ứng tuyển</h2>
            </div>
        </div>
        <div class="row mt-5" v-for="item in dataRes" :key="item.id" style="background-color: #eeeeee">
            <div class="col-2">
                <img v-if="item.enterprise_avatar !== null" :src="item.enterprise_avatar" alt="" style="width: 110px;height: 110px">
            </div>
            <div class="col-10">
                <div class="row mt-3">
                    <div class="col-12">
                        <p>Tên công ty: {{item.enterprise_name}}</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <p>Thời gian phỏng vấn: {{item.timeInterview}}</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <p>Ngày nộp CV: {{item.created_at}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'profileListTableJoined',
  data: function () {
    return {
      dataRes: {
      }
    }
  },
  mounted () {
    this.$store.dispatch('listTableJoined', localStorage.getItem('user_id'))
      .then(() => {
        this.dataRes = this.$store.getters.listTableJoined.data
        console.log(this.dataRes)
      })
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>
