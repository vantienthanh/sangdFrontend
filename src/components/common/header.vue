<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name:'enterpriseListCV'}">T1</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div class="form-inline my-2 my-lg-0 header__right">
              <div v-show="loginStatus">
                <div class="d-flex justify-content-between login" >
                  <div>
                    <p class="header__name mt-1">thanhvt</p>
                    <p class="header__name float-right">member</p>
                  </div>
                  <div class="ml-2">
                    <img src="@/assets/img/avatar.png" id="avatar" class="header_avatar">
                  </div>
                  <div class="header__logout-panel">
                    <button class="btn">View profile</button>
                    <button class="btn" @click="logout">Sign out</button>
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
    }
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
