<template>
  <div class="container frontEnterpriseListCV">
    <div class="row"> <!-- tìm kiếm -->
      <div class="col-12">
        <div class="footer p-3">
          <div class="row ">
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
    </div>
    <!--<div class="row mt-3">-->
      <!--<div class="col-12">-->
        <!--<div v-for="item in list" :key="item.id" class="row list">-->
          <!--<div class="col-1">-->
            <!--<img v-if="item.avatar === null" src="@/assets/img/noimageavailable.png" alt="">-->
            <!--<img v-else :src="item.avatar" alt="">-->
          <!--</div>-->
          <!--<div class="col-7">-->
            <!--<div class="row">-->
              <!--<div class="col-8">-->
                <!--<router-link :to="{name:'enterpriseCVDetail', params: {id:item.id}}">-->
                  <!--<h6 class="mb-0 mt-1">{{item.title}}</h6>-->
                <!--</router-link>-->
              <!--</div>-->
              <!--<div class="col-2 ">-->
                <!--<span class="date d-block text-center">{{item.created_at}}</span>-->
              <!--</div>-->
              <!--<div class="col-2 d-flex">-->
                <!--<i class="fas fa-map-marker-alt mt-2 mr-1"></i>-->
                <!--<span class="d-block  mt-1">HaNoi</span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="list-dotted my-1"></div>-->
            <!--<div class="row">-->
              <!--<div class="col-8">-->
              <!--</div>-->
              <!--<div class="col-4 ">-->
                <!--<p><i class="fas fa-donate"></i>  {{item.salary}}</p>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-4">-->

          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="row box-bg mt-3 pt-3"> <!--TUYỂN DỤNG NHANH-->
      <div class="col-md-12"><h5><i class="fas fa-briefcase"></i> TUYỂN DỤNG NHANH</h5></div>
    </div>
    <div class="row box-bg"><!--TUYỂN DỤNG NHANH-->
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
    </div><!-- ENDS TUYỂN DỤNG NHANH-->
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
        <!--VIỆC LÀM MỚI-->
        <div class="row pt-3 pl-2 mt-3 box-bg">
          <div class="col-md-12">
            <h5><i class="fas fa-briefcase"></i> VIỆC LÀM MỚI</h5>
            <hr>
          </div>
        </div>
        <div class="row box-bg">
          <div v-for="item in list" :key="item.id" class="col-12">
            <div class="job-border p-1 my-2 clearfix">
              <router-link :to="{name:'enterpriseCVDetail', params: {id:item.id}}">
                <div class="float-left">
                  <img class="img-fluid img-size" v-if="item.avatar === null" src="@/assets/img/noimageavailable.png" alt="">
                  <img class="img-fluid img-size" v-else :src="item.avatar" alt="">
                </div>
                <div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>
              </router-link>
            </div>
          </div>
          <!--<div class="col-12">-->
            <!--<div class="job-border p-1 my-2 clearfix">-->
              <!--<a href="#">-->
                <!--<div class="float-left"><img class="img-fluid img-size" src="img/icon.jpg" alt=""></div>-->
                <!--<div class="float-right">Lorem ipsum dolor sit amet, consectetur.</div>-->
              <!--</a>-->
            <!--</div>-->
          <!--</div>-->
          <div class="col-12 mt-3">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Trang trước</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Trang sau</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="row pt-3 pl-2 mt-3 box-bg"><!--VIỆC LÀM THEO NGÀNH NGHỀ-->
          <div class="col-md-12">
            <h5><i class="fas fa-briefcase"></i> VIỆC LÀM THEO NGÀNH NGHỀ</h5>
            <hr>
          </div>
        </div>
        <div class="row box-bg">
          <div class="col-md-4">
            <a href="#">Bán hàng</a>
          </div>
          <div class="col-md-4">
            <a href="#">Bán hàng</a>
          </div>
          <div class="col-md-4">
            <a href="#">Bán hàng</a>
          </div>
          <div class="col-md-4">
            <a href="#">Bán hàng</a>
          </div>
        </div>
      </div>
      <div class="col-md-4"> <!--TUYỂN DỤNG HẤP DẪN-->
        <div class="box-bg">
          <div class="row pt-3 pl-2">
            <div class="col-md-12">
              <h5><i class="fas fa-building"></i> TUYỂN DỤNG HẤP DẪN</h5>
              <hr>
            </div>
          </div>
          <div class="row p-1">
            <div class="col-12">
              <div class="job-border p-1 my-2">
                <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
              </div>
            </div>
            <div class="col-12">
              <div class="job-border p-1 my-2">
                <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
              </div>
            </div>
            <div class="col-12">
              <div class="job-border p-1 my-2">
                <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3 p-3 box-bg"> <!--  TÌM KIẾM NÂNG CAO-->
          <div class="text-uppercase font-weight-bold">
            <i class="fas fa-hammer mr-2"></i> TÌM KIẾM NÂNG CAO
          </div>
          <hr>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01"><i class="fas fa-hammer"></i></label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected disabled>Tất cả ngành nghề</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01"><i class="fas fa-compass"></i></label>
            </div>
            <select class="custom-select" id="inputGroupSelect02">
              <option selected disabled>Địa điểm</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01"><i class="fas fa-clock"></i></label>
            </div>
            <select class="custom-select" id="inputGroupSelect03">
              <option selected disabled>Năm kinh nhiệm</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="form-group">
            <button class="btn btn-primary form-control">Tìm kiếm</button>
          </div>
        </div>
        <div class="mt-3 p-3 box-bg"> <!--  TOP TỪ KHÓA TUYỂN DỤNG -->
          <div class="text-uppercase font-weight-bold">
            <i class="fas fa-hammer mr-2"></i> TOP TỪ KHÓA TUYỂN DỤNG
          </div>
          <hr>
          <div>
                    <span class="mr-1 p-1 el-tag el-tag--gray">
                        <a href="">Phát triển thị trường</a>
                    </span>
            <span class="p-1 el-tag el-tag--gray">
                        <a href="">Tesele</a>
                    </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enterpriseListCV',
  data: function () {
    return {
      list: {}
    }
  },
  mounted () {
    this.$store.dispatch('e_getListCV')
      .then(() => {
        this.list = this.getList
        console.log(this.list)
      }).catch(err => console.log(err))
  },
  methods: {

  },
  computed: {
    getList: {
      get: function () {
        return this.$store.getters.enterprise_getListCV.data
      }
    }
  }
}
</script>

<style scoped>

</style>
