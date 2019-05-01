<template>
  <div class="container">
    <div class="row"> <!-- tìm kiếm -->
      <div class="col-12">
        <div class="row  footer p-3">
          <div class="col-md-5">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-briefcase"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="tiêu đề công việc, vị trí, địa điểm làm việc,..."
                     id="usr" name="username">
            </div>
          </div>
          <div class="col-md-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01"><i class="fas fa-hammer"></i></label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Tất cả ngành nghề</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01"><i class="fas fa-compass"></i></label>
              </div>
              <select class="custom-select" id="">
                <option selected>Tất cả địa điểm</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="col-md-1">
            <button class="btn px-4 btn-outline-primary btn-search" style="background-color: #fff;"><i
                    class="fas fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="row"> &lt;!&ndash; breadcrumb &ndash;&gt;-->
      <!--<div class="col-md-12">-->
        <!--<nav aria-label="breadcrumb">-->
          <!--<ol class="breadcrumb" id="bc-bg">-->
            <!--<li class="breadcrumb-item"><a href="#">Home</a></li>-->
            <!--<li class="breadcrumb-item"><a href="#">Library</a></li>-->
            <!--<li class="breadcrumb-item active" aria-current="page">Data</li>-->
          <!--</ol>-->
        <!--</nav>-->
      <!--</div>-->
    <!--</div>-->
    <div class="row mt-3"> <!-- việc làm mới -->
      <div class="col-md-12">
        <div class="clearfix box-bg p-3 mb-3">
          <div class="text-uppercase float-md-left">việc làm mới</div>
          <div class="float-md-right">Hôm nay có 218 việc làm mới
            <a href="#">Bấm xem ngay</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row"> <!-- đăng ký đăng nhập -->
      <div class="col-md-2 text-center">
        <div class="login py-3 px-5 font-weight-bold">
          <a href="#" class="d-block">
            <div>
              <i class="fas fa-lock d-block fa-4x"></i>
            </div>
            <div class="text-uppercase">đăng nhập</div>
          </a>
        </div>
      </div>
      <div class="col-md-2 text-center">
        <div class="login py-3 px-5 font-weight-bold">
          <a href="#" class="d-block">
            <div>
              <i class="fas fa-lock d-block fa-4x"></i>
            </div>
            <div class="text-uppercase">đăng ký</div>
          </a>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <div class="login py-4 px-5">
          <a href="#">
            <div><i class="far fa-check-circle fa-4x"></i></div>
            <div class="text-uppercase font-weight-bold">hoàn thiện hồ sơ</div>
          </a>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <div class="login py-4 px-5">
          <a href="#">
            <div>
              <i class="fas fa-lock fa-4x"></i>
            </div>
            <div class="text-uppercase font-weight-bold">đăng tuyển miễn phí</div>
          </a>
        </div>
      </div>
    </div>
    <div class="row box-bg mt-3 pt-3"> <!--việc làm cần gấp-->
      <div class="col-md-12"><h5><i class="fas fa-briefcase"></i> VIỆC LÀM TUYỂN GẤP</h5></div>
    </div>
    <div class="row box-bg"><!--việc làm cần gấp-->
      <div class="col-md-4">
        <div class="job-border p-1 my-2 clearfix">
          <a href="#">
            <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
            <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="job-border p-1 my-2 clearfix">
          <a href="#">
            <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
            <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="job-border p-1 my-2 clearfix">
          <a href="#">
            <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
            <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="job-border p-1 my-2 clearfix">
          <a href="#">
            <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
            <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="job-border p-1 my-2 clearfix">
          <a href="#">
            <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
            <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="job-border p-1 my-2 clearfix">
          <a href="#">
            <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
            <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
          </a>
        </div>
      </div>
    </div><!-- ends việc làm cần gấp-->
    <div class="row mt-3">
      <div class="col-md-8">
        <div class="row pt-3 pl-2 box-bg">
          <div class="col-md-12">
            <h5><i class="fas fa-briefcase"></i> VIỆC LÀM HẤP DẪN</h5>
            <hr>
          </div>
        </div>
        <div class="row box-bg scroll-bar">
          <div class="col-md-6">
            <div class="job-border p-1 my-2 clearfix">
              <a href="#">
                <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
                <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="job-border p-1 my-2 clearfix">
              <a href="#">
                <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
                <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="job-border p-1 my-2 clearfix">
              <a href="#">
                <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
                <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="job-border p-1 my-2 clearfix">
              <a href="#">
                <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
                <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
              </a>
            </div>
          </div>
        </div>
        <!--VIỆC LÀM LƯƠNG CAO-->
        <div class="row pt-3 pl-2 mt-3 box-bg">
          <div class="col-md-12">
            <h5><i class="fas fa-briefcase"></i> VIỆC LÀM LƯƠNG CAO</h5>
            <hr>
          </div>
        </div>
        <div class="row box-bg scroll-bar">
          <div class="col-12">
            <div class="job-border p-1 my-2 clearfix">
              <a href="#">
                <div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>
                <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4"> <!--danh sách icon nhà tuyển dụng-->
        <div class="box-bg">
          <div class="row pt-3 pl-2">
            <div class="col-md-12">
              <h5><i class="fas fa-building"></i> NHÀ TUYỂN DỤNG HÀNG ĐẦU</h5>
              <hr>
            </div>
          </div>
          <div class="row p-1">
            <div class="col-md-4 mb-1">
              <a href=""><img src="img/nha-tuyen-dung-1.jpeg" alt=""
                              class="img-fluid p-1 comp-icon img-border"></a>
            </div>
            <div class="col-md-4">
              <a href=""><img src="img/nha-tuyen-dung-2.png" alt=""
                              class="img-fluid p-1 comp-icon img-border"></a>
            </div>
            <div class="col-md-4">
              <a href=""><img src="img/nha-tuyen-dung-3.jpg" alt=""
                              class="img-fluid p-1 comp-icon img-border"></a>
            </div>
            <div class="col-md-4">
              <a href=""><img src="img/nha-tuyen-dung-3.jpg" alt=""
                              class="img-fluid p-1 comp-icon img-border"></a>
            </div>
            <div class="col-md-4">
              <a href=""><img src="img/nha-tuyen-dung-2.png" alt=""
                              class="img-fluid p-1 comp-icon img-border"></a>
            </div>
            <div class="col-md-4">
              <a href=""><img src="img/nha-tuyen-dung-1.jpeg" alt=""
                              class="img-fluid p-1 comp-icon img-border"></a>
            </div>
          </div>
        </div>
        <div class="mt-3 p-3 box-bg"> <!--gửi email nhận tin việc làm-->
          <div class="text-uppercase font-weight-bold">
            <i class="far fa-envelope mr-2"></i>nhận bản tin việc làm
          </div>
          <hr>
          <div class="form-group clearfix">
            <div class="float-left"><input class="form-control" placeholder="Địa chỉ email"></div>
            <button class="btn px-4 float-right btn-send">Gửi</button>
          </div>
        </div>
        <div class="mt-3 p-3 box-bg"> <!--danh sách việc làm theo ngành nghề-->
          <div class="text-uppercase font-weight-bold">
            <i class="fas fa-hammer mr-2"></i>việc làm theo ngành nghề
          </div>
          <hr>
          <div class="form-group">
            <input class="form-control" placeholder="Tìm ngành nghề">
          </div>
          <div>
            <ul>
              <li><a href="">Việc làm phiên dịch/ngoại ngữ</a></li>
              <li><a href="">Việc làm công chức viên chức</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3 box-bg"> <!--HOTLINE CHO NHÀ TUYỂN DỤNG-->
      <div class="col-12 text-center">
        <div class="font-weight-bold text-uppercase hotline py-3">hotline tư vấn dành cho nhà tuyển dụng</div>
        <h5 class="mt-4 py-3">KHU VỰC MIỀN BẮC HOTLINE (024) 710 88688</h5>
      </div>
    </div>
    <div class="row text-center box-bg pb-4">
      <div class="col-md-3">
        <div><span class="phone">013344657</span> Mrs Hương</div>
      </div>
      <div class="col-md-3">
        <div><span class="phone">013344657</span> Mrs Hương</div>
      </div>
      <div class="col-md-3">
        <div><span class="phone">013344657</span> Mrs Hương</div>
      </div>
      <div class="col-md-3">
        <div><span class="phone">013344657</span> Mrs Hương</div>
      </div>
      <hr>
    </div> <!--END HOTLINE CHO NHÀ TUYỂN DỤNG-->
    <div class="row mt-3"> <!--HOTLINE CHO ỨNG VIÊN-->
      <div class="col-12 text-center box-bg">
        <div class="font-weight-bold text-uppercase hotline py-3">hotline tư vấn dành cho ứng viên</div>
        <h5 class="mt-4 pb-3">TOÀN QUỐC: (024) 710 88688</h5>
      </div>
    </div> <!-- END HOTLINE CHO ỨNG VIÊN-->
    <div class="row text-center mt-3 p-3 final-total"> <!--TỔNG KẾT THÔNG TIN-->
      <div class="col-md-3">
        <h4>4,071,365</h4>
        <div>Ứng viên</div>
      </div>
      <div class="col-md-3">
        <h4>4,071,365</h4>
        <div>Ứng viên</div>
      </div>
      <div class="col-md-3">
        <h4>4,071,365</h4>
        <div>Ứng viên</div>
      </div>
      <div class="col-md-3">
        <h4>4,071,365</h4>
        <div>Ứng viên</div>
      </div>
    </div><!-- END TỔNG KẾT THÔNG TIN-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
