<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
    <!-- <product></product> -->
    <Feet></Feet>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Home from '@/components/Home'
import product from '@/components/product'
import Feet from '@/components/Feet'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    product,
    Feet
  }
}
</script>

<style>
html{
 font-size: 12px;
}
@media (max-width:768px) {
  body{
    padding-right: 0!important;
  }
}
*{
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
