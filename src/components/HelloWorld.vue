<template>
  <div class="container">
    <div class="row"> <!-- tìm kiếm -->
      <div class="col-12">
        <div class="footer p-3">
          <div class="row ">
            <div class="col-md-5">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-briefcase"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Tiêu đề tuyển dụng"
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
        <div class="login py-3 font-weight-bold">
          <a href="#" class="">
            <div>
              <i class="fas fa-lock d-block fa-4x"></i>
            </div>
            <p class="text-uppercase">đăng nhập</p>
          </a>
        </div>
      </div>
      <div class="col-md-2 text-center">
        <div class="login py-3 font-weight-bold">
          <a href="#" class="d-block">
            <div>
              <i class="fas fa-sign-in-alt fa-4x"></i>
            </div>
            <div class="text-uppercase">đăng ký</div>
          </a>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <div class="login py-3 px-5">
          <a href="#">
            <div><i class="far fa-check-circle fa-4x"></i></div>
            <div class="text-uppercase font-weight-bold">hoàn thiện hồ sơ</div>
          </a>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <div class="login py-3 px-5">
          <a href="#">
            <div>
              <i class="far fa-clipboard fa-4x"></i>
            </div>
            <div class="text-uppercase font-weight-bold">đăng tuyển miễn phí</div>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12"> <!--việc làm cần gấp-->
        <div class="box-bg mt-3 p-3"><h5 class="m-0 p-0"><i class="fas fa-briefcase"></i> VIỆC LÀM TUYỂN GẤP</h5></div>
        <div class="box-bg px-3">
          <div class="row">
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
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-8">
        <div class="pl-3 box-bg pt-3">
          <div class="row  ">
            <div class="col-md-12">
              <h5><i class="fas fa-briefcase"></i> VIỆC LÀM HẤP DẪN</h5>
              <hr>
            </div>
          </div>
        </div>
        <div class="box-bg scroll-bar pl-3">
          <div class="row ">
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
        </div>
        <!--VIỆC LÀM LƯƠNG CAO-->
        <div class=" pt-3 pl-3 mt-3 box-bg">
          <div class="row">
            <div class="col-md-12">
              <h5><i class="fas fa-briefcase"></i> VIỆC LÀM LƯƠNG CAO</h5>
              <hr>
            </div>
          </div>
        </div>
        <div class="box-bg scroll-bar pl-3">
          <div class="row">
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
      </div>
      <div class="col-md-4"> <!--danh sách icon nhà tuyển dụng-->
        <div class="box-bg">
          <div class="row pt-3 px-3">
            <div class="col-md-12">
              <h5><i class="fas fa-building"></i> NHÀ TUYỂN DỤNG HÀNG ĐẦU</h5>
              <hr>
            </div>
          </div>
          <div class="row px-3 pb-3">
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
    <div class="mt-3 box-bg">
      <div class="row"> <!--HOTLINE CHO NHÀ TUYỂN DỤNG-->
        <div class="col-12 text-center">
          <div class="font-weight-bold text-uppercase hotline py-3">Hotline tư vấn dành cho nhà tuyển dụng</div>
          <h5 class="mt-4 py-3">KHU VỰC MIỀN BẮC HOTLINE (0123) 456 78910</h5>
        </div>
      </div>
    </div>
    <div class="box-bg pb-4">
      <div class="row text-center">
        <div class="col-md-3">
          <div><span class="phone">013344657</span> Mr Hưng</div>
        </div>
        <div class="col-md-3">
          <div><span class="phone">013344657</span> Mr Duy</div>
        </div>
        <div class="col-md-3">
          <div><span class="phone">013344657</span> Mr Thành</div>
        </div>
        <div class="col-md-3">
          <div><span class="phone">013344657</span> Mr Tường</div>
        </div>
        <hr>
      </div> <!--END HOTLINE CHO NHÀ TUYỂN DỤNG-->
    </div>
    <div class="box-bg">
      <div class="row mt-3"> <!--HOTLINE CHO ỨNG VIÊN-->
        <div class="col-12 text-center">
          <div class="font-weight-bold text-uppercase hotline py-3">hotline tư vấn dành cho ứng viên</div>
          <h5 class="mt-4 pb-3">TOÀN QUỐC: (024) 710 88688</h5>
        </div>
      </div> <!-- END HOTLINE CHO ỨNG VIÊN-->
    </div>
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
