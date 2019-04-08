<template>
    <div class="container login">
      <div class="row">
        <div class="col-12">
          <div class="form-group row">
            <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Tên tài khoản</label>
            <div class="col-sm-10">
              <input v-model="loginForm.username" type="text" class="form-control" id="exampleInputEmail1"  placeholder="username">
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Mật khẩu</label>
            <div class="col-sm-10">
              <input v-model="loginForm.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="password">
            </div>
          </div>
          <div class="form-group row mt-5">
            <div class="col-sm-12 text-center">
              <button @click="submit" type="submit" class="btn btn-success text-center">Đăng nhập</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit: function () {
      this.$store.dispatch('login', this.loginForm)
        .then(() => {
          this.$router.push({ 'name': 'home' })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
