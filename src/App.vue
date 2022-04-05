<template>
  <div id="app">
  <Header></Header>
    <Slide></Slide>
    <Product></Product>
      <Thumbnail></Thumbnail>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Slide from './components/Slide'
import Product from './components/Product'
import Thumbnail from './components/Thumbnail'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Slide,
    Product,
      Thumbnail,
    Footer
  }
}
</script>

<style>

</style>
