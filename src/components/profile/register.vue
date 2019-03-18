<template>
  <div class="container register">
    <div class="row">
      <div class="col-12">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Tên đăng nhập</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" placeholder="UserName">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Mật khẩu</label>
          <div class="col-sm-8">
            <input type="password" class="form-control" placeholder="Password">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Nhập lại mật khẩu</label>
          <div class="col-sm-8">
            <input type="password" class="form-control" placeholder="Re - Password">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Lựa chọn loại tài khoản</label>
          <div class="col-sm-8">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              <label class="form-check-label" for="inlineRadio1">Người tìm việc</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">Nhà tuyển dụng</label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12 text-center">
            <button class="btn btn-success mr-2">Hoàn tất đăng ký</button>
            <button class="btn btn-success ml-2">Nhập lại</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<style scoped>

</style>
