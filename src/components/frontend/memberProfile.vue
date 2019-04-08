<template>
    <div class="container">
        <div class="row">
            <div class="col-12 m-5">
                <div class="row">
                    <div class="col-12">
                        <h3 class="text-center">Thông tin tài khoản</h3>
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1">
                        <p>username</p>
                    </div>
                    <div class="col-6">
                        <p class="form-control">thanhvt</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-1">
                        <p>Họ tên</p>
                    </div>
                    <div class="col-6">
                        <input class="form-control" type="text" name="" id="">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-1">
                        <p>Mô tả về bản </p>
                    </div>
                    <div class="col-6">
                        <textarea class="form-control" name="" id="" cols="20" rows="5"></textarea>
                    </div>
                </div>
                <button class="btn btn-primary mt-3">Lưu lại</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'memberProfile',
  data: function () {
    return {
      memberInfo: {}
    }
  },
  mounted () {
    this.$store.dispatch('memberInfo', localStorage.getItem('user_id'))
      .then(() => {
        this.memberInfo = this.$store.getters.userInfo.data
        console.log(this.memberInfo)
      })
      .catch(err => console.log(err))
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
