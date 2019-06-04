<template>
<div id="navWrapper">
      <Push>
        <router-link to="/home">Startseite</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/campaigns">Kampagnenauswahl</router-link>
        <router-link to="/campaign">Grabungsauswahl</router-link>
        <router-link to="/excavation">Ausgrabung</router-link>
     <!--   <router-link to="/structures">Befunde</router-link>
        <router-link to="/finds">Funde</router-link> -->
      </Push>
</div>
</template>

<script>

import { Push } from 'vue-burger-menu' // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  components: {
    Push // Register your component
  },
  methods: {
    handleClick: function () { alert('asd') }
  }
}

</script>

<style >

  div#navWrapper{
    position: fixed !important;
    top: 18px !important;
    left: 18px !important;
    z-index:45 !important;
  }

  .bm-menu a{
    color: #594743 !important;
  }

  a.router-link-active{
    color:  var(--ion-color-primary-contrast) !important;
    background-color:  var(--ion-color-primary) !important;
  }

  .bm-burger-button {

    width: 36px !important;
    height: 30px !important;
    left: 18px !important;
    top: 18px !important;
    cursor: pointer !important;
    z-index: 100 !important;
    position: sticky !important;
  }
  .bm-burger-bars {
    background-color: var(--ion-color-primary-contrast) !important;
    z-index: 100 !important;
    border-radius: 2px !important;
  }
  .line-style {
    position: absolute !important;
    height: 15% !important;
    left: 0 !important;
    right: 0 !important;
  }
  .cross-style {
    position: absolute !important;
    top: 12px !important;
    right: 2px !important;
    cursor: pointer !important;
  }
  .bm-cross {
    background-color: #594743 !important;
  }
  .bm-cross-button {
    height: 24px !important;
    width: 24px !important;
  }
  .bm-menu {
    height: 100% !important; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000 !important; /* Stay on top */
    top: 0;
    left: 0;
    background-color: var(--ion-color-light)  !important; /* Black*/
    overflow-x: hidden !important; /* Disable horizontal scroll */
    padding-top: 60px !important; /* Place content 60px from the top */
    transition: 0.5s !important; /*0.5 second transition effect to slide in the sidenav*/
    -webkit-box-shadow: 0px 0px 16px 0px var(--ion-color-light-contrast) !important;
    -moz-box-shadow: 0px 0px 16px 0px var(--ion-color-light-contrast) !important;
    box-shadow: 0px 0px 16px 0px var(--ion-color-light-contrast) !important;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3) !important;
  }
  .bm-item-list {
    color: var(--ion-color-light) !important;
    /*margin-left: 10%;*/
    margin-left: 0 !important;
    font-size: 20px !important;
  }

  .bm-item-list > *  {
    display: flex !important;
    text-decoration: none !important;
    padding: 0.7em !important;
    padding-left: 30px !important;
  }

  .bm-item-list > * > span {
    margin-left: 10px !important;
    font-weight: 700 !important;
    color: white !important;
  }
</style>
