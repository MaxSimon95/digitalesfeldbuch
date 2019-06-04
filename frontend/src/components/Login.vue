<template>
  <form>
    <ion-item>
      <ion-label position="stacked">Accountname</ion-label>
      <ion-input v-on:ionInput="accountname=$event.target.value" placeholder="Name" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Passwort</ion-label>
      <ion-input v-on:ionInput="password=$event.target.value" rows="14" placeholder="Passwort"></ion-input>
    </ion-item>

    <ion-button color="secondary" @click="goBack()"> Einloggen </ion-button>  <!--type="submit"-->
    <ion-button @click="goBack()"> Abbrechen </ion-button>

  </form>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>

</style>
