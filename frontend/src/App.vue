/* eslint-disable */
<template>
  <div id="app">
    <Navigation msg="test"/>
    <div id="page-wrap">
      <AppHeader/>
      <!-- <img src="./assets/logo.png"> -->
      <router-view></router-view>
      <AppFooter/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    AppHeader,
    AppFooter
  }
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }

  body {
    background-color: #e8e4d9;
  }

</style>
