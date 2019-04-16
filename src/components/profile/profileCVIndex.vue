<template>
<div class="col-12">
    <div class="text-right">
        <router-link v-if="accountRole === 'member'" class="btn btn-primary" :to="{name:'profileCreateMemberCV'}">Tạo mới CV</router-link>
        <router-link v-else class="btn btn-primary" :to="{name:'profileCreateEnterpriseCV'}">Tạo tin tuyển dụng mới</router-link>
    </div>
    <div>
        <table class="table table-hover mt-2">
            <tbody>
                <tr>
                    <td width="50px">STT</td>
                  <td>Tiêu đề</td>
                    <td>Ngày tạo</td>
                  <td>Hành động</td>
                </tr>
                <tr v-for="(item, index) in profileListCV" :key="item.id">
                  <td>{{index+1}}</td>
                  <td>{{item.title}}</td>
                  <td>{{item.created_at}}</td>
                  <td>
                    <router-link><i class="fas fa-edit text-primary p-2"></i></router-link>
                    <button class="btn"><i class="fas fa-trash-alt text-danger"></i></button>
                  </td>
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
      this.$store.dispatch('profile_getListEnterpriseCVByUser', localStorage.getItem('user_id'))
        .then(() => {
          this.profileListCV = this.$store.getters.listEnterpriseByUser.data
          console.log(this.profileListCV)
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
