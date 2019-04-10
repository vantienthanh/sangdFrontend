<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <input type="text" name="search" id="search" class="form-control" placeholder="Tìm kiếm thông tin">
      </div>
      <div class="col-2">
        <button class="btn btn-danger">Tìm kiếm</button>
      </div>
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
