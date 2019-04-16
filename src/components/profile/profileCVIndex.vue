<template>
<div class="col-12">
    <div class="text-right">
        <router-link v-if="accountRole === 'member'" class="btn btn-primary" :to="{name:'profileCreateMemberCV'}">Tạo mới CV</router-link>
        <router-link v-else class="btn btn-primary" :to="{name:'profileCreateMemberCV'}">Tạo tin tuyển dụng mới</router-link>
    </div>
    <div>
        <table class="table table-hover mt-2">
            <tbody>
                <tr>
                    <td>STT</td>
                    <td></td>
                </tr>
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
  name: 'profileCVIndex',
  data: function () {
    return {
      profileListCV: {},
      accountRole: ''
    }
  },
  mounted () {
    this.accountRole = localStorage.getItem('role')
    if (localStorage.getItem('role') === 'member') {
      this.$store.dispatch('profile_getListMemberCVByUser', localStorage.getItem('user_id'))
        .then(() => {
          this.profileListCV = this.$store.getters.listMemberCVByUser.data
          console.log(this.profileListCV)
        })
        .catch(err => console.log(err))
    } else {
      this.$store.dispatch('listSession')
        .then(() => {
          this.listSession = this.getListSession
          console.log(this.listSession)
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
