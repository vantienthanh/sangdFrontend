<template>
  <div class="container register">
    <div class="row">
      <div class="col-12">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Tên đăng nhập</label>
          <div class="col-sm-8">
            <input v-model="registerFrom.username" type="text" class="form-control" placeholder="UserName">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Mật khẩu</label>
          <div class="col-sm-8">
            <input v-model="registerFrom.password" type="password" class="form-control" placeholder="Password">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Email</label>
          <div class="col-sm-8">
            <input type="email" class="form-control" placeholder="Email">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Lựa chọn loại tài khoản</label>
          <div class="col-sm-8">
            <div class="form-check form-check-inline">
              <input v-model="registerFrom.role" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="member" checked="">
              <label class="form-check-label active" for="inlineRadio1">Người tìm việc</label>
            </div>
            <div class="form-check form-check-inline">
              <input v-model="registerFrom.role" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="enterprise">
              <label class="form-check-label" for="inlineRadio2">Nhà tuyển dụng</label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12 text-center">
            <button @click="submit" class="btn btn-success mr-2">Hoàn tất đăng ký</button>
            <button class="btn btn-success ml-2">Nhập lại</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data: function () {
    return {
      registerFrom: {
        username: '',
        password: '',
        role: ''
      },
      error: ''
    }
  },
  methods: {
    submit: function () {
      this.$store.dispatch('register1', this.registerFrom)
        .then(() => {
          this.$router.push({ 'name': 'home' })
        })
        .catch(err => {
          this.error = err
        })
    }
  }
}
</script>

<style scoped>

</style>
