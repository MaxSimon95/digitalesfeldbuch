<template>
  <div>
    <ExcavationHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import ExcavationHeader from './ExcavationHeader'
export default {
  name: 'ExcavationOverview',
  components: {ExcavationHeader}
}

</script>

<style scoped>
div.contentContainer{
  text-align: left;
  padding: 10px
}
  .bolder{
    font-weight: bolder;
  }

div.contentContainer h1 {
  text-align: center;
}
</style>
