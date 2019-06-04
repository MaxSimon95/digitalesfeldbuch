<template>
  <form>
    <ion-item>
      <ion-label position="stacked">Fundnummer</ion-label>
      <ion-input v-on:ionInput="findnumber=$event.target.value" type="number" placeholder="Geben sie hier die Fundnummer ein" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Tachymeter ID</ion-label>
      <ion-input v-on:ionInput="tachymeterid=$event.target.value" placeholder="Geben sie hier die Tachymeter ID des Fundes ein ein" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Fundtyp</ion-label>
      <ion-input v-on:ionInput="type=$event.target.value" placeholder="Geben sie hier den Fundtyp ein" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Kurzbeschreibung</ion-label>
      <ion-textarea v-on:ionInput="description=$event.target.value" rows="4" placeholder="Geben Sie hier eine kurze Beschreibung des Fundes ein"></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Material</ion-label>
      <ion-textarea v-on:ionInput="materials=$event.target.value" rows="4" placeholder="Geben Sie hier das Material des Fundes ein"></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Vorläufige Datierung</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" placeholder="Geben Sie hier eine vorläufige Datierung des Fundes ein"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Vorläufige Verortung</ion-label>
      <ion-input v-on:ionInput="coordinates=$event.target.value" placeholder="Geben Sie hier eine vorläufige Verortung des Fundes ein"></ion-input>
    </ion-item>

    <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
    <ion-button @click="goBack()"> Abbrechen </ion-button>
  </form>
</template>

<script>
import VueCookies from 'vue-cookies'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('finds_database') // creates new database or opens existing one
var remoteDB = new PouchDB('http://localhost:5984/finds')

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
  name: 'FindCreation',
  data: function () {
    return {
      findnumber: '',
      description: '',
      type: '',
      materials: '',
      tachymeterid: '',
      prelimdate: '',
      coordinates: '',
      date: '',
      excavationId: ''
    }
  },
  methods: {
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let campaign = {
        _id: this.findnumber + new Date().toISOString(),
        findnumber: this.findnumber,
        description: this.description,
        type: this.type,
        materials: this.materials,
        tachymeterid: this.tachymeterid,
        prelimdate: this.prelimdate,
        coordinates: this.coordinates,
        date: new Date().toDateString(),
        excavationId: VueCookies.get('currentExcavation')._id
      }
      db.put(campaign, function callback (err, result) {
        if (!err) {
          console.log('Successfully posted a Find! STANDO POWER!')
          // eslint-disable-next-line standard/object-curly-even-spacing
          router.push({ name: 'FindsOverview'})
        }
      })
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'FindsOverview'})
    }
  }
}
</script>

<style scoped>

</style>
