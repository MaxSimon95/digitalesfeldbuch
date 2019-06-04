<template>
  <form>
    <ion-item>
      <ion-label position="stacked">Befundnummer</ion-label>
      <ion-input v-on:ionInput="structurenumber=$event.target.value" placeholder="Geben sie hier die Befundnummer ein" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Kurzbeschreibung</ion-label>
      <ion-textarea v-on:ionInput="description=$event.target.value" rows="4" placeholder="Geben Sie hier eine kurze Beschreibung des Befundes ein"></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Bodenart</ion-label>
      <ion-textarea v-on:ionInput="soil=$event.target.value" rows="4" placeholder="Geben Sie hier Art des Befundes und etwaige Einschlüsse ein"></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Vorläufige Datierung</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" placeholder="Geben sie hier eine vorläufige Datierung des Befundes ein" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Bodenfarbe</ion-label>
      <ion-input v-on:ionInput="colour=$event.target.value" placeholder="Geben sie hier die FArbe des Befundes ein" ></ion-input>
    </ion-item>

    <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
    <ion-button @click="goBack()"> Abbrechen </ion-button>
  </form>
</template>

<script>
var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('structures_database') // creates new database or opens existing one
var remoteDB = new PouchDB('http://localhost:5984/structures')

db.sync(remoteDB, {
  live: true,
  retry: false
}).on('change', function (change) {
}).on('paused', function (info) {
}).on('active', function (info) {
}).on('error', function (err) {
  console.log(err)
})

export default {
  name: 'StructureCreation',
  data: function () {
    return {
      structurenumber: '',
      description: '',
      soil: '',
      date: '',
      prelimdate: '',
      excavation: 'Grabung 1',
      colour: ''
    }
  },
  methods: {
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let campaign = {
        _id: this.findnumber + new Date().toISOString(),
        structurenumber: this.structurenumber,
        description: this.description,
        date: new Date().toDateString(),
        excavation: this.excavation,
        soil: this.soil,
        prelimdate: this.prelimdate,
        colour: this.colour
      }
      db.put(campaign, function callback (err, result) {
        if (!err) {
          console.log('Successfully posted a Structure! STANDO POWER!')
          // eslint-disable-next-line standard/object-curly-even-spacing
          router.push({ name: 'StructuresOverview'})
        }
      })
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'StructuresOverview'})
    }
  }
}
</script>

<style scoped>

</style>
