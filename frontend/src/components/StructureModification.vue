<template>
  <div>
    <h1>Befund bearbeiten</h1>
  <form>
    <ion-item>
      <ion-label position="stacked">Befundnummer</ion-label>
      <ion-input v-on:ionInput="structurenumber=$event.target.value" :value=structurenumber ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Kurzbeschreibung</ion-label>
      <ion-textarea v-on:ionInput="description=$event.target.value" rows="4" :value=description ></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Bodenart</ion-label>
      <ion-textarea v-on:ionInput="soil=$event.target.value" rows="4" :value=soil ></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Bodenfarbe (HVC-Format)</ion-label>
      <ion-label position="stacked">Hue:</ion-label>
      <ion-input v-on:ionInput="colour_hue=$event.target.value" :value=colour_hue></ion-input>
      <ion-label position="stacked">Value:</ion-label>
      <ion-input v-on:ionInput="colour_value=$event.target.value" :value=colour_value></ion-input>
      <ion-label position="stacked">Chroma:</ion-label>
      <ion-input v-on:ionInput="colour_chroma=$event.target.value" :value="colour_chroma"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Vorläufige Datierung</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" :value=prelimdate ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Einschlüsse</ion-label>


      <ion-list>
        <ion-button v-for="item in affiliatedMaterials" v-bind:key="item._id">
          <ion-text>
            {{item}}

          </ion-text>
          <!-- <ion-icon name="close"></ion-icon> -->
        </ion-button>

      </ion-list>

      <ion-button @click="showOverlay" color="secondary"> Einschluss hinzufügen</ion-button>
    </ion-item>

    <div class="formOverlayOuter overlayVisible" v-bind:style="{ display: overlayDisplay }" >
      <div class="formOverlayInner">
        <h2>Einschluss hinzufügen</h2>
        <hr/>

        <ion-item>Hier kann man ein einen Einschluss aus einem bestimmten Material dokumentieren.</ion-item>
        <p v-if="availableMaterials.length === 0">
          <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Materialien hinterlegt.
        </p>
        <ion-list>
          <ion-item v-for="item in availableMaterials" v-bind:key="item._id" lines="inset">
            <ion-button color="secondary" @click="addExistingMaterialToStructure(item)">
              <ion-text>
                {{item}}
              </ion-text>
            </ion-button>
          </ion-item>
        </ion-list>
        <ion-button @click="hideOverlay()">
          Abbrechen
        </ion-button>
      </div>
    </div>

    <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
    <ion-button @click="goBack()"> Abbrechen </ion-button>
  </form>
  </div>
</template>

<script>
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
let context
export default {
  name: 'StructureModification',
  data: function () {
    return {
      overlayDisplay: 'none',
      structurenumber: '',
      description: '',
      soil: '',
      date: '',
      prelimdate: '',
      excavationId: '',
      colour_hue: '',
      colour_value: '',
      colour_chroma: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0,
      // eslint-disable-next-line vue/no-reserved-keys
      _rev: 0,
      availableMaterials: [],
      affiliatedMaterials: []
    }
  },
  beforeMount () {
    this.getMaterials()
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    context = this
    context._id = context.$route.params._id
    db.get(context._id).then(function (result) {
      context.structurenumber = result.structurenumber
      context.description = result.description
      context.soil = result.soil
      context.date = result.date
      context.prelimdate = result.prelimdate
      context.colour_hue = result.colour_hue
      context.colour_value = result.colour_value
      context.colour_chroma = result.colour_chroma
      context._rev = result._rev
      context.excavationId = result.excavationId
      context.affiliatedMaterials = result.affiliatedMaterials
    })
    this.structurenumber = context.structurenumber
    this.description = context.description
    this.soil = context.soil
    this.date = context.date
    this.prelimdate = context.prelimdate
    this.colour_hue = context.colour_hue
    this.colour_value = context.colour_value
    this.colour_chroma = context.colour_chroma
    this._rev = context._rev
    this.excavationId = context.excavationId
    this.affiliatedMaterials = context.affiliatedMaterials
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
    },
    addExistingMaterialToStructure: function (item) {
      this.hideOverlay()
      this.affiliatedMaterials.push(item)
    },
    hideOverlay: function () {
      this.overlayDisplay = 'none';
    },
    showOverlay: function () {
      this.overlayDisplay = 'block';
    },
    logForm: function () {
      let router = this.$router // the corre'form'is' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let structure = {
        _id: context._id,
        structurenumber: context.structurenumber,
        description: context.description,
        soil: context.soil,
        date: context.date,
        prelimdate: context.prelimdate,
        colour_hue: context.colour_hue,
        colour_value: context.colour_value,
        colour_chroma: context.colour_chroma,
        affiliatedMaterials: context.affiliatedMaterials,
        _rev: context._rev,
        excavationId: context.excavationId
      }
      db.put(structure, function callback (err, result) {
        if (!err) {
          console.log('Successfully changed a structure! ')
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

</style>
