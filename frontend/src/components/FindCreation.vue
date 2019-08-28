<template>
  <div>
    <h1>Fund eintragen</h1>
  <form>
    <ion-item>
      <ion-label position="stacked">Fundnummer</ion-label>
      <ion-input v-on:ionInput="findnumber=$event.target.value" placeholder="Geben sie hier die Fundnummer ein" ></ion-input>
    </ion-item>

    <!-- <ion-item>
      <ion-label position="stacked">Befund</ion-label>
      <ion-input v-on:ionInput="structurenumber=$event.target.value" type="number" placeholder="Wählen Sie hier den zugehörigen Befund aus" ></ion-input>
    </ion-item> -->

    <ion-item >Schnitt
      <p v-if="availableSections.length === 0">
        <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Schnitte angelegt.
      </p>
      <ion-select v-else interface="popover" placeholder="zugehöriger Schnitt" v-on:ionChange="sectionnumber=$event.target.value">

        <ion-select-option v-for="item in availableSections" v-bind:key="item._id" lines="inset" v-bind:value="item.sectionnumber" >
          <ion-text>
            {{item.title}}
          </ion-text>
        </ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item >Befund (SE)
      <p v-if="availableStructures.length === 0">
        <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Befunde hinterlegt.
      </p>
      <ion-select v-else interface="popover" placeholder="zugehöriger Befund" v-on:ionChange="structurenumber=$event.target.value">

        <ion-select-option v-for="item in availableStructures" v-bind:key="item._id" lines="inset" v-bind:value="item.structurenumber" >
          <ion-text>
            {{item.structurenumber}}
          </ion-text>
        </ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item >Material
    <p v-if="availableMaterials.length === 0">
      <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Materialien hinterlegt.
    </p>
    <ion-select v-else interface="popover" placeholder="Fundmaterial bestimmen" v-on:ionChange="affiliatedMaterial=$event.target.value">

      <ion-select-option v-for="item in availableMaterials" v-bind:key="item" lines="inset" v-bind:value="item" >
          <ion-text>
            {{item}}
          </ion-text>
        </ion-select-option>
    </ion-select>
    </ion-item>

    <!--<ion-item>
      <ion-label position="stacked">Fundart</ion-label>
      <ion-input v-on:ionInput="type=$event.target.value" placeholder="Geben sie hier die Art des Fundes ein" ></ion-input>
    </ion-item> -->

    <ion-item >Typ
      <p v-if="availableTypes.length === 0">
        <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Typen hinterlegt.
      </p>
      <ion-select v-else placeholder="Fundart bestimmen" interface="popover" v-on:ionChange="type=$event.target.value">

        <ion-select-option v-for="item in availableTypes" v-bind:key="item" lines="inset" v-bind:value="item" selected="false">
          <ion-text>
            {{item}}
          </ion-text>
        </ion-select-option>

      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Tachymeter ID</ion-label>
      <ion-input v-on:ionInput="tachymeterid=$event.target.value" placeholder="Geben sie hier die Tachymeter ID für die spätere Verortung ein" ></ion-input>
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
var db_structures = new PouchDB('structures_database') //
var db_sections = new PouchDB('sections_database')
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
      structurenumber: '',
      sectionnumber: '',
      description: '',
      type: '',
      materials: '',
      tachymeterid: '',
      prelimdate: '',
      coordinates: '',
      date: '',
      excavationId: '',
      availableMaterials: [],
      affiliatedMaterial: '',
      availableTypes: [],
      availableStructures: [],
      availableSections:[]
    }
  },
  beforeMount () {
    this.getMaterials()
    this.getTypes()
    this.getStructures()
    this.getSections()
  },
  methods: {
    getStructures(){
      let context = this
      db_structures.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          if (item.doc.excavationId === VueCookies.get('currentExcavation')._id) context.availableStructures.push(item.doc)

        }
      })
    },
    getSections(){
      let context = this
      db_sections.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          if (item.doc.excavationId === VueCookies.get('currentExcavation')._id) context.availableSections.push(item.doc)

        }
      })
    },
    getTypes: function () {
      var context = this
      context.availableTypes.push("Fibel")
      context.availableTypes.push("Schmuck")
      context.availableTypes.push("Münze")
      context.availableTypes.push("Objekt")
      context.availableTypes.push("Schlacke")
      context.availableTypes.push("Militaria")
      context.availableTypes.push("Gefäß")
      context.availableTypes.push("Fensterglas")
      context.availableTypes.push("Nägel")
      context.availableTypes.push("Beschläge")
      context.availableTypes.push("Kugeln")
      context.availableTypes.push("Randstück (RS)")
      context.availableTypes.push("Wandstück (WS)")
      context.availableTypes.push("Bodenstück (BS)")
      context.availableTypes.push("Henkelstück (HS)")
      context.availableTypes.push("Deckelstück (DS)")
      context.availableTypes.push("Amphorenstöpsel")
      context.availableTypes.push("Werkzeug")
      context.availableTypes.push("Spielzeug")
      context.availableTypes.push("Produktionsrückstand")
      context.availableTypes.push("Wandmalerei")
      context.availableTypes.push("Boden")
      context.availableTypes.push("Mosaik")
      context.availableTypes.push("Statuette")
      context.availableTypes.push("Plastik")
      context.availableTypes.push("Rohr")
    },
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
      context.availableMaterials.push("Metall")
      context.availableMaterials.push("Gold")
      context.availableMaterials.push("Silber")
      context.availableMaterials.push("Kupferlegierung")
      context.availableMaterials.push("Blei")
      context.availableMaterials.push("Eisen")
      context.availableMaterials.push("Unbestimmt")
      context.availableMaterials.push("Glas")
      context.availableMaterials.push("Stein")
      context.availableMaterials.push("Mörtel/Putz")
      context.availableMaterials.push("Knochen")
      context.availableMaterials.push("Organische Reste")
      context.availableMaterials.push("Ziegel")
      context.availableMaterials.push("Keramik")
      context.availableMaterials.push("Terra Sigillata (TS)")
      context.availableMaterials.push("Glanztonware")
      context.availableMaterials.push("Terra Nigra")
      context.availableMaterials.push("Terra Rubra")
      context.availableMaterials.push("Marmorierte Ware")
      context.availableMaterials.push("Goldglimmerware")
      context.availableMaterials.push("Glasierte Ware")
      context.availableMaterials.push("Backplatten")
      context.availableMaterials.push("Glattwandige Ware")
      context.availableMaterials.push("Rauwandige Ware")
      context.availableMaterials.push("Schwerkeramik")
      context.availableMaterials.push("Amphoren")
      context.availableMaterials.push("Frei geformte Ware")
      context.availableMaterials.push("Mittelalter/Neuzeit Keramik")
      context.availableMaterials.push("Mittelalter/Neuzeit Glas")

    },
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let campaign = {
        _id: this.findnumber + new Date().toISOString(),
        structurenumber: this.structurenumber,
        sectionnumber: this.sectionnumber,
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
