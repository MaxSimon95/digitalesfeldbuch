<template>
  <div>
    <h1>Befund anlegen</h1>
  <form>
    <ion-item>
      <ion-label position="stacked">Befundnummer</ion-label>
      <ion-input v-on:ionInput="structurenumber=$event.target.value" placeholder="Geben sie hier die Befundnummer ein" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Zugehöriger Schnitt</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" placeholder="Wählen Sie hier den zugehörigen Schnitt aus" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Bodenart</ion-label>
      <ion-textarea v-on:ionInput="soil=$event.target.value" rows="4" placeholder="Geben Sie hier Art des Befundes an"></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Einschlüsse</ion-label>
      <ion-list>

        <ion-button>
          Beispieleinschluss 1: 10%
          <ion-icon name="close"></ion-icon>
        </ion-button>

        <ion-button>
          Beispieleinschluss 2: 10%
          <ion-icon name="close"></ion-icon>
        </ion-button>

        <ion-button>
          Beispieleinschluss 3: 12%
          <ion-icon name="close"></ion-icon>
        </ion-button>

        <ion-button>
          Beispieleinschluss 4: 6%
          <ion-icon name="close"></ion-icon>
        </ion-button>

      </ion-list>
      <ion-button color="secondary"> Hinzufügen </ion-button>
    </ion-item>


    <ion-item>
      <!--<ion-label psoition="floating">Bodenfarbe</ion-label> -->
      <ion-label >Hue:</ion-label>
      <ion-input v-on:ionInput="colour=$event.target.value" ></ion-input>
      <ion-label >Value:</ion-label>
      <ion-input v-on:ionInput="colour=$event.target.value" ></ion-input>
      <ion-label >Chroma:</ion-label>
      <ion-input v-on:ionInput="colour=$event.target.value" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Vorläufige Datierung</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" placeholder="Geben sie hier eine vorläufige Datierung des Befundes ein" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Anmerkung</ion-label>
      <ion-textarea v-on:ionInput="description=$event.target.value" rows="4" placeholder="Geben Sie hier weitere Anmerkungen zu dem Befund ein"></ion-textarea>
    </ion-item>

    <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
    <ion-button @click="goBack()"> Abbrechen </ion-button>
  </form>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('structures_database') // creates new database or opens existing one
var remoteDB = new PouchDB(path + '/structures')

db.sync(remoteDB, {
  live: true,
  retry: true
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
      excavationId: '',
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
        colour: this.colour,
        excavationId: VueCookies.get('currentExcavation')._id
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
