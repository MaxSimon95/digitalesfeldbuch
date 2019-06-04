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
import VueCookies from 'vue-cookies'

VueCookies.set('beispielcooki', 'beispielwert')
console.log(VueCookies.get('beispielcooki'))

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

  :root {

    --detail-icon-color: black;

    --ion-color-base: #e86fc0;
    --ion-color-base-rgb: 232,111,192;
    --ion-color-contrast: #15ff03;
    --ion-color-contrast-rgb: 21,255,3;
    --ion-color-shade: #e86fc0;
    --ion-color-tint: #e86fc0;

    --ion-color-primary: #594743;
    --ion-color-primary-rgb: 139,77,99;
    --ion-color-primary-contrast: #ffffff;
    --ion-color-primary-contrast-rgb: 255,255,255;
    --ion-color-primary-shade: #463332;
    --ion-color-primary-tint: #aeaba4;

    --ion-color-secondary: #8b4b63;
    --ion-color-secondary-rgb: 139,77,99;
    --ion-color-secondary-contrast: #ffffff;
    --ion-color-secondary-contrast-rgb: 255,255,255;
    --ion-color-secondary-shade: #784156;
    --ion-color-secondary-tint: #9b546f;

    --ion-color-tertiary: #f1e0b2;
    --ion-color-tertiary-rgb: 241,224,178;
    --ion-color-tertiary-contrast: #594743;
    --ion-color-tertiary-contrast-rgb: 139,77,99;
    --ion-color-tertiary-shade: #B3A27C;
    --ion-color-tertiary-tint: #fcebbb;

    --ion-color-success: #10dc60;
    --ion-color-success-rgb: 16,220,96;
    --ion-color-success-contrast: #ffffff;
    --ion-color-success-contrast-rgb: 255,255,255;
    --ion-color-success-shade: #0ec254;
    --ion-color-success-tint: #28e070;

    --ion-color-warning: #ffce00;
    --ion-color-warning-rgb: 255,206,0;
    --ion-color-warning-contrast: #ffffff;
    --ion-color-warning-contrast-rgb: 255,255,255;
    --ion-color-warning-shade: #e0b500;
    --ion-color-warning-tint: #ffd31a;

    --ion-color-danger: #f04141;
    --ion-color-danger-rgb: 245,61,61;
    --ion-color-danger-contrast: #ffffff;
    --ion-color-danger-contrast-rgb: 255,255,255;
    --ion-color-danger-shade: #d33939;
    --ion-color-danger-tint: #f25454;

    --ion-color-dark: #222428;
    --ion-color-dark-rgb: 34,34,34;
    --ion-color-dark-contrast: #ffffff;
    --ion-color-dark-contrast-rgb: 255,255,255;
    --ion-color-dark-shade: #1e2023;
    --ion-color-dark-tint: #383a3e;

    --ion-color-medium: #989aa2;
    --ion-color-medium-rgb: 152,154,162;
    --ion-color-medium-contrast: #ffffff;
    --ion-color-medium-contrast-rgb: 255,255,255;
    --ion-color-medium-shade: #86888f;
    --ion-color-medium-tint: #a2a4ab;

    --ion-color-light: #e8e4d9;
    --ion-color-light-rgb: 232,228,217;
    --ion-color-light-contrast: #594743;
    --ion-color-light-contrast-rgb: 255,255,255;
    --ion-color-light-shade: #A7A39A;
    --ion-color-light-tint: #F6F2E6;

    --background: var(--ion-color-light);
    --ion-item-background: var(--background);
    --ion-background-color: var(--background);

  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--ion-color-light-contrast);
    margin-top: 0px;
  }

  body {
    background-color: var(--ion-color-light);
    position: static;
    max-height: none;
    height: auto;
    overflow: auto;
  }

</style>
