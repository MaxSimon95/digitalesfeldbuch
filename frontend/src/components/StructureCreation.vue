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
<!--
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
    </ion-item> -->


    <ion-item>
      <ion-label position="stacked">Bodenfarbe (HVC-Format)</ion-label>
      <ion-label position="stacked">Hue:</ion-label>
      <ion-input v-on:ionInput="colour_hue=$event.target.value" placeholder="Hier Hue-Wert der Bodenfarbe angeben"></ion-input>
      <ion-label position="stacked">Value:</ion-label>
      <ion-input v-on:ionInput="colour_value=$event.target.value" placeholder="Hier Value-Wert der Bodenfarbe angeben"></ion-input>
      <ion-label position="stacked">Chroma:</ion-label>
      <ion-input v-on:ionInput="colour_chroma=$event.target.value" placeholder="Hier Chroma-Wert der Bodenfarbe angeben"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Vorläufige Datierung</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" placeholder="Geben sie hier eine vorläufige Datierung des Befundes ein" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Anmerkung</ion-label>
      <ion-textarea v-on:ionInput="description=$event.target.value" rows="4" placeholder="Geben Sie hier weitere Anmerkungen zu dem Befund ein"></ion-textarea>
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

      <ion-button @click="showOverlay" color="secondary"> Hinzufügen</ion-button>
    </ion-item>

    <div class="formOverlayOuter overlayVisible" v-bind:style="{ display: overlayDisplay }" >
      <div class="formOverlayInner">
        <h2>Einschluss hinzufügen</h2>
        <hr/>

        <ion-item>Hier kann man ein einen Einschluss aus einem bestimmten Material dokumentieren.</ion-item>
        <p v-if="availableMaterials.length === 0">
          <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Ansprechpartner angelegt.
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
      overlayDisplay: 'none',
      soil: '',
      date: '',
      prelimdate: '',
      excavationId: '',
      colour_hue: '',
      colour_value: '',
      colour_chroma: '',
      availableMaterials: [],
      affiliatedMaterials: []
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
        colour_hue: this.colour_hue,
        colour_value: this.colour_value,
        colour_chroma: this.colour_chroma,
        affiliatedMaterials: this.affiliatedMaterials,
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

  .formOverlayOuter {
    background: rgba(0, 0, 0, 0.50);
    position: fixed;
    left: 0;
    top: 0px;
    padding-top: 64px;
    height: 100%;
    width: 100%;
    z-index: 35;
    display: none;
    overflow: scroll
  }

  .formOverlayOuter.overlayVisible {
    display: block
  }

  .formOverlayInner {
    background: var(--ion-color-light);
    z-index: 500;

    padding: 8px
  }

  @media screen and (min-width: 768px) {
    .formOverlayOuter {
      top: 0
    }

    .formOverlayInner {
      min-height: auto;
      margin-left: 50px;
      margin-right: 50px;
      margin-top: 110px;
      border: 1px solid var(--ion-color-primary);
      -webkit-box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.24);
      -moz-box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.24);
      box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.24);
    }

  }
</style>
