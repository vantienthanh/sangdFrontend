<template>
    <div class="container login">
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="exampleInputEmail1">User name</label>
            <input v-model="loginForm.username" type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter user name">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="loginForm.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button @click="submit" type="submit" class="btn btn-primary text-center">Submit</button>
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
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
