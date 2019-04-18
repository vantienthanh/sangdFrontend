<template>
  <div class="col-12">
    <div class="row mt-3">
      <div class="col-3 text-right">
        <p>Tiêu đề</p>
      </div>
      <div class="col-9">
        <input v-model="formData.title" class="form-control" type="text" name="title" id="title">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3 text-right">
        <p>Mô tả công việc</p>
      </div>
      <div class="col-9">
        <textarea v-model="formData.description" class="form-control" name="description" id="description" cols="30" rows="10"></textarea>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3 text-right">
        <p>Quyền lợi</p>
      </div>
      <div class="col-9">
        <textarea v-model="formData.benefit" class="form-control" name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3 text-right">
        <p>Thời gian làm việc</p>
      </div>
      <div class="col-9">
        <select v-model="formData.workingTime" class="form-control" name="" id="">
          <option value="Giờ hành chính">Giờ hành chính</option>
          <option value="8 tiếng">8 tiếng</option>
          <option value="Freelancer">Freelancer</option>
          <option value="PartTime">PartTime</option>
        </select>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3 text-right">
        <p>Mức lương</p>
      </div>
      <div class="col-9">
        <input v-model="formData.salary" class="form-control" type="text" name="" id="">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3 text-right">
      </div>
      <div class="col-9">
        <button class="btn btn-primary" @click="submit">Cập nhật</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profileEditEnterpriseCV',
  data: function () {
    return {
      formData: {
        title: '',
        description: '',
        user_id: '',
        benefit: '',
        salary: '',
        workingTime: ''
      }
    }
  },
  mounted () {
    this.formData.user_id = localStorage.getItem('user_id')
    this.$store.dispatch('e_DetailCV', this.$route.params.id)
      .then(() => {
        console.log(this.$store.getters.e_detailCV.data)
        let dataRes = this.$store.getters.e_detailCV.data
        this.formData.workingTime = dataRes.workingTime
        this.formData.title = dataRes.title
        this.formData.description = dataRes.description
        this.formData.benefit = dataRes.benefit
        this.formData.salary = dataRes.salary
      })
      .catch(err => console.log(err))
  },
  methods: {
    submit: function () {
      let params = {
        id: this.$route.params.id,
        form: this.formData
      }
      this.$store.dispatch('updateEnterpriseCV', params)
        .then(() => {
          this.$router.push({ name: 'profileCVIndex' })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
