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
                <select class="custom-select">
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
    <div class="row">
      <div class="col-md-12"> <!--việc làm cần gấp-->
        <div class="box-bg mt-3 p-3"><h5 class="m-0 p-0"><i class="fas fa-briefcase"></i> VIỆC LÀM PART TIME</h5></div>
        <div class="box-bg px-3">
          <div class="row">
            <div v-for="item in partTimeList" :key="item.id" class="col-md-4">
              <div class="job-border p-1 my-2 clearfix">
                <router-link :to="{name:'enterpriseCVDetail', params: {id:item.id}}">
                  <div class="float-left">
                    <img v-if="item.avatar !== null" class="img-fluid img-size" :src="item.avatar" alt="" style="width: 55px; height: 55px">
                    <img v-else src="@/assets/img/noimageavailable.png" alt="" style="width: 55px; height: 55px">
                  </div>
                  <div class="float-left">
                    <p>{{item.title}}</p>
                    <p>{{item.companyName}}</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-8">
        <div class="pt-3 pl-3 box-bg">
          <div class="row ">
            <div class="col-md-12">
              <h5><i class="fas fa-briefcase"></i> VIỆC LÀM HẤP DẪN</h5>
              <hr>
            </div>
          </div>
        </div>
        <div class="box-bg scroll-bar">
          <div class="row px-3">
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
        <!--VIỆC LÀM MỚI-->
        <div class="pt-3 pl-3 mt-3 box-bg">
          <div class="row">
            <div class="col-md-12">
              <h5><i class="fas fa-briefcase"></i> VIỆC LÀM MỚI</h5>
              <hr>
            </div>
          </div>
        </div>
        <div class="box-bg">
          <div class="row">
            <div v-for="item in list" :key="item.id" class="col-12">
              <div class="row job-border p-1 my-2">
                <div class="col-2">
                  <img class="img-fluid img-size" v-if="item.avatar === null" src="@/assets/img/noimageavailable.png" alt="">
                  <img class="img-fluid img-size" v-else :src="item.avatar" alt="">
                </div>
                <div class="col-5">
                  <router-link :to="{name:'enterpriseCVDetail', params: {id:item.id}}">
                    {{item.title}}
                  </router-link>
                </div>
                <div class="col-2">
                  <p><i class="fas fa-hand-holding-usd"></i> {{item.salary}}</p>
                  <p><i class="fas fa-map-marker-alt mt-2 mr-1"></i>Ha Noi</p>
                </div>
                <div class="col-3">
                  <p><i class="far fa-clock"></i> {{item.created_at}}</p>
                </div>
              </div>
            </div>
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
        </div>
        <div class="pt-3 pl-3 mt-3 box-bg">
          <div class="row "><!--VIỆC LÀM THEO NGÀNH NGHỀ-->
            <div class="col-md-12">
              <h5><i class="fas fa-briefcase"></i> VIỆC LÀM THEO NGÀNH NGHỀ</h5>
              <hr>
            </div>
          </div>
          <div class="row">
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
      </div>
      <div class="col-md-4"> <!--TUYỂN DỤNG HẤP DẪN-->
        <div class="box-bg">
          <div class="row pt-3 pl-3">
            <div class="col-md-12">
              <h5><i class="fas fa-building"></i> TUYỂN DỤNG HẤP DẪN</h5>
              <hr>
            </div>
          </div>
          <div class="row px-3">
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
            <span class="mr-1 p-1 el-tag el-tag--gray mx-1 mt-2">
              <span>Phát triển thị trường</span>
            </span>
            <span class="p-1 el-tag el-tag--gray mx-1 mt-2">
              <span>Telesale</span>
            </span>
            <span class="p-1 el-tag el-tag--gray mx-1 mt-2">
              <span>IT</span>
            </span>
            <span class="p-1 el-tag el-tag--gray mx-1 mt-2">
              <span>Lập trình viên</span>
            </span>
            <span class="p-1 el-tag el-tag--gray mx-1 mt-2">
              <span>Tự động hóa</span>
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
      list: {},
      partTimeList: {}
    }
  },
  mounted () {
    this.$store.dispatch('e_getListCV')
      .then(() => {
        this.list = this.getList
      }).catch(err => console.log(err))

    this.$store.dispatch('e_getListPartTime')
      .then(() => {
        this.partTimeList = this.$store.getters.e_listParttime.data
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
