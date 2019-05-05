<template>

      <Push>
        <router-link to="/">Startseite</router-link>
        <router-link to="/userprofile">Profil</router-link>
        <router-link to="/tbd">Platzhalter</router-link>
        <router-link to="/tbd">Platzhalter</router-link>
        <router-link to="/tbd">Platzhalter</router-link>
      </Push>

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

<style>
  .bm-menu a{
    color: #594743;
  }
  .bm-burger-button {

    width: 36px;
    height: 30px;
    left: 18px;
    top: 18px;
    cursor: pointer;
    z-index: 100
  }
  .bm-burger-bars {
    background-color: #f5f2f2;
    z-index: 100;
    border-radius: 2px;
  }
  .line-style {
    position: absolute;
    height: 15%;
    left: 0;
    right: 0;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }
  .bm-cross {
    background-color: #594743;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-menu {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color: #e8e4d9 ; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    -webkit-box-shadow: 0px 0px 16px 0px rgba(46,74,117,1);
    -moz-box-shadow: 0px 0px 16px 0px rgba(46,74,117,1);
    box-shadow: 0px 0px 16px 0px rgba(46,74,117,1);
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .bm-item-list {
    color: #b8b7ad;
    margin-left: 10%;
    font-size: 20px;
  }

  .bm-item-list > *  {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
  }

  .bm-item-list > * > span {
    margin-left: 10px;
    font-weight: 700;
    color: white;
  }
</style>
