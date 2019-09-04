<template>
  <div>
    <h1>Fund bearbeiten</h1>
    <form>
      <ion-item>
        <ion-label position="stacked">Fundnummer</ion-label>
        <ion-input v-on:ionInput="findnumber=$event.target.value" :value=findnumber ></ion-input>
      </ion-item>

      <ion-item >Schnitt
        <p v-if="availableSections.length === 0">
          <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Schnitte angelegt.
        </p>
        <ion-select v-else interface="popover" v-on:ionChange="sectionnumber=$event.target.value">

          <ion-select-option v-if="item.title !== sectionnumber" v-for="item in availableSections" v-bind:key="item._id" lines="inset" v-bind:value="item.sectionnumber" selected="false">
            <ion-text>
              {{item.title}}
            </ion-text>
          </ion-select-option>
          <ion-select-option v-else v-bind:key="item._id" lines="inset" v-bind:value="item.sectionnumber" selected="true">
            <ion-text>
              {{item.title}} &check;
            </ion-text>
          </ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item >Befund (SE)
        <p v-if="availableStructures.length === 0">
          <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Befunde hinterlegt.
        </p>
        <ion-select interface="popover" v-on:ionChange="structurenumber=$event.target.value">

          <ion-select-option v-if="item.structurenumber !== structurenumber" v-for="item in availableStructures" v-bind:key="item._id" lines="inset" v-bind:value="item.structurenumber" selected="false">
            <ion-text>
              {{item.structurenumber}}
            </ion-text>
          </ion-select-option>
          <ion-select-option v-else v-bind:key="item._id" lines="inset" v-bind:value="item.structurenumber" selected="true">
            <ion-text>
              {{item.structurenumber}} &check;
            </ion-text>
          </ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item >Material
        <p v-if="availableMaterials.length === 0">
          <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Materialien hinterlegt.
        </p>
        <ion-select interface="popover" v-on:ionChange="affiliatedMaterial=$event.target.value">

          <ion-select-option v-if="item !== affiliatedMaterial" v-for="item in availableMaterials" v-bind:key="item" lines="inset" v-bind:value="item" selected="false">
            <ion-text>
              {{item}}
            </ion-text>
          </ion-select-option>
          <ion-select-option v-else v-bind:key="item" lines="inset" v-bind:value="item" selected="true">
            <ion-text>
              {{item}}
            </ion-text>
          </ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item >
        Fundart
        <p v-if="availableTypes.length === 0">
          <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Typen hinterlegt.
        </p>
        <ion-select interface="popover" v-on:ionChange="type=$event.target.value">

          <ion-select-option v-for="item in availableTypes" v-if="item !== type" v-bind:key="item" lines="inset" v-bind:value="item" selected="false">
            <ion-text>
              {{item}}
            </ion-text>
          </ion-select-option>
          <ion-select-option v-else v-bind:key="item" lines="inset" v-bind:value="item" selected="true">
            <ion-text>
              {{item}}
            </ion-text>
          </ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Tachymeter ID</ion-label>
        <ion-input v-on:ionInput="tachymeterid=$event.target.value" :value=tachymeterid ></ion-input>
      </ion-item>
<!--
      <ion-item>
        <ion-label position="stacked">Fundtyp</ion-label>
        <ion-input v-on:ionInput="type=$event.target.value" :value=type ></ion-input>
      </ion-item>
-->
      <ion-item>
        <ion-label position="stacked">Kurzbeschreibung</ion-label>
        <ion-textarea v-on:ionInput="description=$event.target.value" rows="4" :value=description></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Vorläufige Datierung</ion-label>
        <ion-input v-on:ionInput="prelimdate=$event.target.value" :value=prelimdate></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Vorläufige Verortung</ion-label>
        <ion-input v-on:ionInput="coordinates=$event.target.value" :value=coordinates></ion-input>
      </ion-item>

      <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
      <ion-button @click="goBack()"> Abbrechen </ion-button>
    </form>
  </div>

</template>

<script>
import {path} from '../adress.js'
import VueCookies from 'vue-cookies'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var findsdb = new PouchDB('finds_database') // creates new database or opens existing one
var db_structures = new PouchDB('structures_database')
var db_sections = new PouchDB('sections_database')
var findsremoteDB = new PouchDB(path + '/finds')

findsdb.sync(findsremoteDB, {
  live: true,
  retry: true
}).on('change', function (change) {
}).on('paused', function (info) {
}).on('active', function (info) {
}).on('error', function (err) {
  console.log(err)
})
let context
export default {
  name: 'FindModification',
  data: function () {
    return {
      findnumber: '',
      structurenumber: '',
      sectionnumber: '',
      description: '',
      type: '',
      availableMaterials: [],
      availableTypes: [],
      availableStructures: [],
      affiliatedMaterial: '',
      tachymeterid: '',
      prelimdate: '',
      coordinates: '',
      date: '',
      excavationId: '',
      availableSections: [],
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0,
      // eslint-disable-next-line vue/no-reserved-keys
      _rev: 0
    }
  },
  beforeMount () {
    this.getMaterials()
    this.getTypes()
    this.getStructures()
    this.getSections()
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    context = this
    context._id = context.$route.params._id
    findsdb.get(context._id).then(function (result) {
      context.findnumber = result.findnumber
      context.structurenumber = result.structurenumber
      context.sectionnumber = result.sectionnumber
      context.description = result.description
      context.type = result.type
      context.affiliatedMaterial = result.affiliatedMaterial
      console.log("affiliated Mat: " + result.affiliatedMaterial)
      context.tachymeterid = result.tachymeterid
      context.prelimdate = result.prelimdate
      context.coordinates = result.coordinates
      context.date = result.date
      context.excavationId = result.excavationId
      context._rev = result._rev
    })
    this.sectionnumber = context.sectionnumber
    this.findnumber = context.findnumber
    this.structurenumber = context.structurenumber
    this.sectionnumber = context.sectionnumber
    this.description = context.description
    this.type = context.type
    this.affiliatedMaterial = context.affiliatedMaterial
    this.tachymeterid = context.tachymeterid
    this.prelimdate = context.prelimdate
    this.coordinates = context.coordinates
    this.date = context.date
    this.excavationId = context.excavationId
    this._rev = context._rev
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
      context.availableTypes.push("Baumaterial")
      context.availableTypes.sort()
    },
    getSections(){
      let context = this
      db_sections.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        console.log(result)
        console.log(context.sectionnumber)
        for (let item of result.rows) {
          if (item.doc.excavationId === VueCookies.get('currentExcavation')._id) context.availableSections.push(item.doc)

        }
      })
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
      context.availableMaterials.push("Schiefer")
      context.availableMaterials.sort()
    },
    logForm: function () {
      let router = this.$router // the corre'form'is' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let find = {
        _id: context._id,
        structurenumber: context.structurenumber,
        sectionnumber: context.sectionnumber,
        findnumber: context.findnumber,
        description: context.description,
        type: context.type,
        affiliatedMaterial: context.affiliatedMaterial,
        tachymeterid: context.tachymeterid,
        prelimdate: context.prelimdate,
        coordinates: context.coordinates,
        date: context.date,
        excavationId: context.excavationId,
        _rev: context._rev
      }
      findsdb.put(find, function callback (err, result) {
        if (!err) {
          console.log('Successfully changed a find! ')
          // eslint-disable-next-line standard/object-curly-even-spacing
          // router.push({ name: 'CampaignsOverview'})
          router.go(-1) // dynamic and fun
        } else {
          console.log(err)
        }
      })
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      // this.$router.push({ name: 'CampaignsOverview'}) // commented out because its static
      this.$router.go(-1) // dynamic and fun
    }
  }
}
</script>

<style scoped>
  button {
    --width:95% !important;
  }

</style>
