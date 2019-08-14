<template>
  <div>
    <h1>Fund eintragen</h1>
  <form>
    <ion-item>
      <ion-label position="stacked">Fundnummer</ion-label>
      <ion-input v-on:ionInput="findnumber=$event.target.value" type="number" placeholder="Geben sie hier die Fundnummer ein" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Befund</ion-label>
      <ion-input v-on:ionInput="structurenumber=$event.target.value" type="number" placeholder="Wählen Sie hier den zugehörigen Befund aus" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Tachymeter ID</ion-label>
      <ion-input v-on:ionInput="tachymeterid=$event.target.value" placeholder="Geben sie hier die Tachymeter ID für die spätere Verortung ein" ></ion-input>
    </ion-item>

    <ion-item >Material
    <p v-if="availableMaterials.length === 0">
      <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Materialien hinterlegt.
    </p>
    <ion-select interface="popover" placeholder="Fundmaterial bestimmen" v-on:ionChange="affiliatedMaterial=$event.target.value">

      <ion-item>Clicker</ion-item>
      <ion-select-option v-for="item in availableMaterials" v-bind:key="item" lines="inset" v-bind:value="item" >
          <ion-text>
            {{item}}
          </ion-text>
        </ion-select-option>
    </ion-select>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Fundart</ion-label>
      <ion-input v-on:ionInput="type=$event.target.value" placeholder="Geben sie hier die Art des Fundes ein" ></ion-input>
    </ion-item>




    <ion-item>
      <ion-label position="stacked">Vorläufige Datierung</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" placeholder="Geben Sie hier eine vorläufige Datierung des Fundes ein"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Anmerkung</ion-label>
      <ion-textarea v-on:ionInput="description=$event.target.value" rows="4" placeholder="Geben Sie hier weitere Anmerkungen zu dem Fund an"></ion-textarea>
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
var db = new PouchDB('finds_database') // creates new database or opens existing one
var remoteDB = new PouchDB(path + '/finds')

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
      excavationId: '',
      availableMaterials: [],
      affiliatedMaterial: ''
    }
  },
  beforeMount () {
    this.getMaterials()
  },
  methods: {
    getMaterials: function () {
      var context = this // to enable accessing the 'contactPersons' variable inside submethods
      /*contactPersonDb.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          context.availableMaterials.push(item.doc)
        }
      }).catch(function (err) {
        console.log(err)
      })
      */
      context.availableMaterials.push("Beispielmaterial 1")
      context.availableMaterials.push("Beispielmaterial 2")
      context.availableMaterials.push("Beispielmaterial 3")
      context.availableMaterials.push("Beispielmaterial 4")
    },
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let campaign = {
        _id: this.findnumber + new Date().toISOString(),
        findnumber: this.findnumber,
        description: this.description,
        type: this.type,
        tachymeterid: this.tachymeterid,
        prelimdate: this.prelimdate,
        coordinates: this.coordinates,
        date: new Date().toDateString(),
        excavationId: VueCookies.get('currentExcavation')._id,
        affiliatedMaterial: this.affiliatedMaterial
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
