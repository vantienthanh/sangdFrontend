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
                    <router-link v-if="accountRole === 'member'" :to="{name: 'profileEditMemberCV', params: {id:item.id}}"><i class="fas fa-edit text-primary p-2"></i></router-link>
                    <router-link v-else :to="{name: 'profileEditEnterpriseCV', params: {id:item.id}}"><i class="fas fa-edit text-primary p-2"></i></router-link>
                    <button class="btn" data-toggle="modal" data-target="#modalDelete" @click="setDeleteID(item.id)"><i class="fas fa-trash-alt text-danger"></i></button>
                  </td>
                </tr>
            </tbody>
        </table>
    </div>
  <!-- Modal join session  -->
  <div class="modal fade" id="modalDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h3 v-if="accountRole === 'enterprise'">Xác nhận xóa tin tuyển dụng ?</h3>
          <h3 v-else>Xác nhận xóa CV ?</h3>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary"
                  @click="deleteRecord">Xác nhận
          </button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'profileCVIndex',
  data: function () {
    return {
      profileListCV: {},
      accountRole: '',
      deleteID: 0
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
  },
  methods: {
    updateList () {
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
    },
    deleteRecord () {
      if (localStorage.getItem('role') === 'member') {
        this.$store.dispatch('deleteMemberCV', this.deleteID)
          .then(() => {
            // update list
            this.updateList()
            // close modal using jquery
            // eslint-disable-next-line
            $('#modalDelete').trigger('click')
          })
          .catch(err => console.log(err))
      } else {
        this.$store.dispatch('deleteEnterpriseCV', this.deleteID)
          .then(() => {
            // update list
            this.updateList()
            // close modal using jquery
            // eslint-disable-next-line
            $('#modalDelete').trigger('click')
          })
          .catch(err => console.log(err))
      }
    },
    setDeleteID (id) {
      this.deleteID = id
    }
  }
}
</script>

<style scoped>

</style>
