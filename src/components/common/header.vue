<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name:'enterpriseListCV'}">Việc tìm người</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name:'memberListCV'}">Người tìm việc</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name:'session'}">Sàn giao dịch</router-link>
              </li>
            </ul>
            <div class="form-inline my-2 my-lg-0 header__right">
              <div v-show="loginStatus">
                <div class="d-flex justify-content-between login" >
                  <div>
                    <p class="header__name mt-1">{{user.username}}</p>
                    <p class="header__name float-right">{{user.role}}</p>
                  </div>
                  <div class="ml-2">
                    <img src="@/assets/img/avatar.png" id="avatar" class="header_avatar">
                  </div>
                  <div class="header__logout-panel">
                    <router-link :to="{name:'profileInfo'}" class="btn">Tài khoản</router-link>
                    <button class="btn" @click="logout">Đăng xuất</button>
                  </div>
                </div>
              </div>
              <div v-show="!loginStatus">
                <div class="d-flex justify-content-between" >
                  <router-link :to="{name:'login'}" class="btn">Đăng nhập</router-link>
                  <router-link :to="{name:'register'}" class="btn">Đăng ký</router-link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data: function () {
    return {
      user: {
        username: '',
        role: ''
      }
    }
  },
  mounted () {
    this.user.username = localStorage.getItem('username')
    this.user.role = localStorage.getItem('role')
  },
  computed: {
    loginStatus: function () {
      return this.$store.getters.loginStatus
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      this.$router.push({ 'name': 'home' })
    }
  }
}
</script>

<style scoped>

</style>
