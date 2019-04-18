<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <router-link :to="{name:'profileInfo'}">Thông tin tài khoản</router-link>
            </div>
            <div class="col-4">
                <router-link :to="{name:'profileCVIndex'}">Danh sách việc làm</router-link>
            </div>
            <div class="col-4">
              <router-link v-if="role ==='member'" :to="{name:'profileCVIndex'}">Danh sách các bàn đã tham gia trong sàn giao dịch</router-link>
              <router-link v-ielse :to="{name:'profileCVIndex'}">Danh sách ứng viên tham gia bàn giao dịch</router-link>
            </div>
        </div>
        <div class="row">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      role: ''
    }
  },
  mounted () {
    this.role = localStorage.getItem('role')
  }
}
</script>

<style scoped>

</style>
