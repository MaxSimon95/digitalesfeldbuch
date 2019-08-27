<template>
  <div id="excavationHeader">
    <ul>
      <router-link to="/excavation" exact><li class="excavationHeaderItem" id="headerItemInfo"> <span>Info </span></li></router-link>
      <router-link to="/excavation/sections"><li class="excavationHeaderItem" id="headerItemSections"> <span>Schnitte </span></li></router-link>
      <router-link to="/excavation/structures"><li class="excavationHeaderItem" id="headerItemStructures"> <span>Befunde</span></li></router-link>
      <router-link to="/excavation/finds"><li class="excavationHeaderItem" id="headerItemFinds"> <span>Funde </span></li></router-link>
      <router-link to="/excavation/probes"><li class="excavationHeaderItem" id="headerItemProbes"> <span>Proben </span></li></router-link>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'ExcavationHeader'
}
</script>

<style scoped>
  a{
    background: none !important;
    font-weight: bolder;
  }
  a.router-link-active li{
    background-color: var(--ion-color-tertiary);
    color: var(--ion-color-tertiary-contrast);
    border-bottom: solid 3px var(--ion-color-secondary)
  }
  ul {
    padding: 0;
    margin: 0
  }
  div#excavationHeader{
    background-color: var(--ion-color-tertiary-shade);
    height: 80px;
  }
  li.excavationHeaderItem {
    vertical-align: central;
    width: 19%;
    list-style: none;
    height: 80px;
    display: inline-block;
  }

  .excavationHeaderItem span{
    top: 40%;
    position: relative;
  }

</style>
