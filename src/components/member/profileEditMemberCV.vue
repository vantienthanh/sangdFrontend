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
        <p>Địa chỉ</p>
      </div>
      <div class="col-9">
        <input v-model="formData.location" class="form-control" type="text" name="title" id="title">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3 text-right">
        <p>Nghành nghề</p>
      </div>
      <div class="col-9">
        <input v-model="formData.job" class="form-control" type="text" name="title" id="title">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3 text-right">
        <p>Kinh nghiệm làm việc</p>
      </div>
      <div class="col-9">
        <textarea v-model="formData.description" class="form-control" name="description" id="description" cols="30" rows="10"></textarea>
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
      </div>
      <div class="col-9">
        <button class="btn btn-primary" @click="submit">Cập nhật</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profileEditMemberCV',
  data: function () {
    return {
      formData: {
        title: '',
        description: '',
        user_id: '',
        location: '',
        job: '',
        workingTime: ''
      }
    }
  },
  mounted () {
    this.formData.user_id = localStorage.getItem('user_id')
    this.$store.dispatch('m_detailCV', this.$route.params.id)
      .then(() => {
        console.log(this.$store.getters.m_detailCV.data)
        let dataRes = this.$store.getters.m_detailCV.data
        this.formData.workingTime = dataRes.workingTime
        this.formData.title = dataRes.title
        this.formData.description = dataRes.description
        this.formData.location = dataRes.location
        this.formData.job = dataRes.job
      })
      .catch(err => console.log(err))
  },
  methods: {
    submit: function () {
      let params = {
        id: this.$route.params.id,
        form: this.formData
      }
      this.$store.dispatch('editMemberCV', params)
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
