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

</style>
