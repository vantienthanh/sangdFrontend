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
                <p></p>
            </div>
        </div>
        <div class="row">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'profile'
  }
</script>

<style scoped>

</style>
