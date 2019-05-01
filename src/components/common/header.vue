<template>
  <nav class="menu--bgrnd mb-3">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-light py-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" :to="{name:'home'}">
                    <p class="text-center"><i class="fas fa-house-damage"></i></p>
                    <p>Trang chủ</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{name:'enterpriseListCV'}">
                    <p class="text-center"><i class="fas fa-briefcase"></i></p>
                    <p>Việc tìm người</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{name:'memberListCV'}">
                    <p class="text-center"><i class="fas fa-id-card-alt"></i></p>
                    <p>Người tìm việc</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{name:'session'}">
                    <p class="text-center"><i class="far fa-handshake"></i></p>
                    <p>Sàn giao dịch</p>
                  </router-link>
                </li>
              </ul>
              <div class="form-inline my-2 my-lg-0 header__right">
                <div v-show="loginStatus">
                  <div class="d-flex justify-content-between login_header" >
                    <div>
                      <p class="header__name mt-1"><i class="fas fa-user-md mr-3"></i>{{user.username}}</p>
                      <p v-if="user.role === 'member'" class="header__name float-right">Thành viên</p>
                      <p v-if="user.role === 'enterprise'" class="header__name float-right">Doanh nghiệp</p>
                    </div>
                    <div class="ml-2">
                      <!--<img src="@/assets/img/avatar.png" id="avatar" class="header_avatar">-->
                      <!--<img :src="@/assets/img/avatar.png" id="avatar" class="header_avatar">-->
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
  </nav>

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
    // loginStatus: function () {
    //   return this.$store.getters.loginStatus
    // }
    loginStatus: {
      get: function () {
        return this.$store.getters.loginStatus
      }
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      this.$router.push({ 'name': 'home' })
    },
    updateStatus: function () {
      this.user.username = localStorage.getItem('username')
      this.user.role = localStorage.getItem('role')
    }
  },
  watch: {
    '$route': {
      handler: function (to) {
        if (to.name === 'home') {
          this.user.username = localStorage.getItem('username')
          this.user.role = localStorage.getItem('role')
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
