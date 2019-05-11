<template>
<div>
  <form @submit="logForm()">
  <ion-item>
    <ion-label position="floating">Name der Kampagne</ion-label>
    <ion-input placeholder="Geben Sie den Namen der Kampagne ein"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Kurzbeschreibung</ion-label>
    <ion-textarea rows="14" placeholder="Geben Sie hier eine kurze Beschreibung der Kampagne ein"></ion-textarea>
  </ion-item>

  <ion-button type="submit" color="secondary"> Speichern </ion-button>
    <ion-button @click="goBack()"> Abbrechen </ion-button>
  </form>

</div>
</template>

<script>
export default {
  name: 'CampaignCreation',
  methods: {
    logForm: function () {
      alert('Form')
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CampaignOverview'})
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CampaignOverview'})
    }
  }
}
</script>

<style scoped>

</style>
