<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/header.vue'
import Footer from './components/common/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>

</style>
