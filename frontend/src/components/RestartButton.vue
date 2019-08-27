<template>
  <ion-button color="secondary" expand="block" @click="restartApp()">Synchronisieren und App neustarten</ion-button>
</template>

<script>

    export default {
        name: "RestartButton",
      methods: {
          restartApp(){
            //navigator.app.loadUrl("file:///android_asset/www/index.html", {wait:2000, loadingDialog:"Wait,Loading App", loadUrlTimeoutValue: 60000});
            //window.navigator.app.exitApp()
            //window.top.location = "file:///android_asset/www/index.html";
          }

      }
    }
</script>

<style scoped>

</style>
