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
          <div class="col-6">
            <div class="row">
              <div class="col-3">
                <p>username</p>
              </div>
              <div class="col-9">
                <p class="form-control">thanhvt</p>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-3">
                <p>Họ tên</p>
              </div>
              <div class="col-9">
                <input class="form-control" type="text" name="full_name" id="full_name" v-model="name">
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-3">
                <p>Email</p>
              </div>
              <div class="col-9">
                <input class="form-control" type="email" name="email" id="email" v-model="email">
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-3">
                <p>Avatar</p>
              </div>
              <div class="col-9">
                <input type="file" name="avatar" id="avatar" ref="avatar" v-on:change="handleFileUploadAvatar()">
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-3">
                <p>CV</p>
              </div>
              <div class="col-9">
                <input type="file" name="cv" id="cv" ref="cv" v-on:change="handleFileUploadCV()">
              </div>
            </div>
            <button class="btn btn-primary mt-3" @click="submitForm">Lưu lại</button>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-12 text-center">
                <h3>Avatar</h3>
                <img v-if="avatar !== null" :src="avatar" alt="" width="150px">
                <img v-else src="@/assets/img/noimageavailable.png" alt="" width="150px">
              </div>
            </div>
            <div class="row">
              <div v-if="cv !== null" class="col-12 text-center">
                <h3>Download CV</h3>
                <a target="_blank" :href="cv"><img src="@/assets/img/cv.png" alt="" width="150px"></a>
              </div>
              <div v-else class="col-12 text-center">
                <h3>Bạn chưa upload CV</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'memberProfile',
  data: function () {
    return {
      name: '',
      email: '',
      user_id: '',
      cv: '',
      avatar: ''
    }
  },
  mounted () {
    this.user_id = localStorage.getItem('user_id')
    this.$store.dispatch('memberInfo', localStorage.getItem('user_id'))
      .then(() => {
        let dataResponse = this.$store.getters.userInfo.data
        this.name = dataResponse.name
        this.cv = dataResponse.cv
        this.email = dataResponse.email
        this.avatar = dataResponse.avatar
      })
      .catch(err => console.log(err))
  },
  methods: {
    handleFileUploadAvatar () {
      this.avatar = this.$refs.avatar.files[0]
    },
    handleFileUploadCV () {
      this.cv = this.$refs.cv.files[0]
    },
    submitForm () {
      let data = new FormData()
      data.append('avatar', this.avatar)
      data.append('cv', this.cv)
      data.append('user_id', this.user_id)
      data.append('name', this.name)
      data.append('email', this.email)
      console.log(data, 'avt')
      this.$store.dispatch('updateProfileInfo', data)
        .then(() => {
          console.log(123)
          // need to update localStorage user info and user avatar
        })
        .catch(err => console.log(err, 'error'))
    }
  }
}
</script>

<style scoped>

</style>
