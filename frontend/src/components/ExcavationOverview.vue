<template>
  <div v-if="excavationIsSet">
    <ExcavationHeader/>
    <router-view></router-view>
  </div>
  <div v-else>
    <h1><ion-icon name="alert"></ion-icon></h1>
    <p>
      Sie müssen zunächst eine Ausgrabung auswählen, bevor der Zugriff auf die zugehörigen Funktionen möglich ist.
    </p>
    <ion-button color="secondary" expand="block" @click="openExcavationsOverview()">Ausgrabung auswählen</ion-button>
  </div>
</template>

<script>
import ExcavationHeader from './ExcavationHeader'
import VueCookies from 'vue-cookies'
export default {
  name: 'ExcavationOverview',
  components: {ExcavationHeader},
  data: function (){
    return {
      excavationIsSet: false
    }
  },
  created () {
    if(VueCookies.get('currentExcavation') !== null) {
      this.excavationIsSet = true
    }
  },
  methods: {
    openExcavationsOverview: function () {
      this.$router.push({ name: 'CampaignOverview'})
    }
  }
}

</script>

<style scoped>

</style>
