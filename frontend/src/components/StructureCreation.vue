<template>
  <div>
    <h1>Befund anlegen</h1>
  <form>
    <ion-item>
      <ion-label position="stacked">Befundnummer (SE)</ion-label>
      <ion-input v-on:ionInput="structurenumber=$event.target.value" placeholder="Geben sie hier die Befundnummer ein" ></ion-input>
    </ion-item>

    <!-- <ion-item>
      <ion-label position="stacked">Zugehöriger Schnitt</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" placeholder="Wählen Sie hier den zugehörigen Schnitt aus" ></ion-input>
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
      <ion-label position="stacked">Bodenfarbe (Munsell-Format, z.B. 10.0PB 5.00/8.0)</ion-label>
      <ion-label position="stacked">Hue: (z.B. 10.0PB)</ion-label>
      <ion-input v-on:ionInput="colour_hue=$event.target.value" placeholder="Hier Hue-Wert der Bodenfarbe angeben"></ion-input>
      <ion-label position="stacked">Value (z.B. 5.00):</ion-label>
      <ion-input v-on:ionInput="colour_value=$event.target.value" placeholder="Hier Value-Wert der Bodenfarbe angeben"></ion-input>
      <ion-label position="stacked">Chroma (z.B. 8.00):</ion-label>
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
        <ion-button v-for="item in affiliatedInclusions" v-bind:key="item._id" @click="removeElement(item)">
          <ion-text>
            {{item.name}}, {{item.percentage}}%
          </ion-text>
          <ion-icon name="close"></ion-icon>
        </ion-button>

      </ion-list>

      <ion-button @click="showOverlay" color="secondary"> Hinzufügen</ion-button>
    </ion-item>

    <div class="formOverlayOuter overlayVisible" v-bind:style="{ display: overlayDisplay }" >
      <div class="formOverlayInner">
        <ion-list>
          <ion-item>Einen neuen Einschluss hinzufügen</ion-item>
          <ion-item>
            <ion-label position="stacked">Bezeichnung</ion-label>
            <ion-input placeholder="Hier die Bezeichnung eintragen"
                       v-on:ionInput="inclusionName=$event.target.value"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Anteil</ion-label>
            <ion-input placeholder="Hier den Anteil in % angeben"
                       v-on:ionInput="inclusionPercentage=$event.target.value"></ion-input>
          </ion-item>
          <ion-item>
            <ion-button color="secondary" @click="addInclusion()"> Hinzufügen</ion-button>
          </ion-item>
        </ion-list>
        <ion-button @click="hideOverlay()"> Abbrechen </ion-button>
      </div>
    </div>

    <!--<ion-item>
      <ion-label position="stacked">Einschlüsse</ion-label>


      <ion-list>
        <ion-button v-for="item in affiliatedInclusions" v-bind:key="item._id" @click="removeElement(item)">
          <ion-text>
            {{item}}

          </ion-text>
          <ion-icon name="close"></ion-icon>
        </ion-button>

      </ion-list>

      <ion-button @click="showOverlay" color="secondary"> Hinzufügen</ion-button>
    </ion-item>

    <div class="formOverlayOuter overlayVisible" v-bind:style="{ display: overlayDisplay }" >
      <div class="formOverlayInner">
        <h2>Einschluss hinzufügen</h2>
        <hr/>

        <ion-item>Hier kann man ein einen Einschluss aus einem bestimmten Material dokumentieren.</ion-item>
        <p v-if="availableInclusions.length === 0">
          <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Einschlüsse hinzugefügt.
        </p>
        <ion-list>
          <ion-item v-for="item in availableInclusions" v-bind:key="item._id" lines="inset">
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
    </div>-->

    <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
    <ion-button @click="goBack()"> Abbrechen </ion-button>
  </form>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var structuresdb = new PouchDB('structures_database') // creates new database or opens existing one
var db_sections = new PouchDB('sections_database')
var structuresremoteDB = new PouchDB(path + '/structures')

structuresdb.sync(structuresremoteDB, {
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
      sectionnumber: '',
      description: '',
      overlayDisplay: 'none',
      soil: '',
      date: '',
      prelimdate: '',
      excavationId: '',
      colour_hue: '',
      colour_value: '',
      colour_chroma: '',
      availableInclusions: [],
      affiliatedInclusions: [],
      availableSections:[]
    }
  },
  beforeMount () {
    //this.getInclusions()
    this.getSections()
  },
  methods: {
    removeElement(item)
    {
      console.log("remove da " + item)
      var tempArray = this.affiliatedInclusions.filter(function(arrayitem) {
        console.log(arrayitem._id + " " + item._id)
        return arrayitem !== item
      })
      this.affiliatedInclusions = tempArray
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
    getInclusions: function () {
      var context = this // to enable accessing the 'contactPersons' variable inside submethods
      /*contactPersonDb.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          context.availableInclusions.push(item.doc)
        }
      }).catch(function (err) {
        console.log(err)
      })
      */
      context.availableInclusions.push("Holzkohle")
      context.availableInclusions.push("gebrannter Lehm (Rotlehm)")
      context.availableInclusions.push("gebrannter Lehm (Hüttenlehm)")
      context.availableInclusions.push("Mörtelreste")
      context.availableInclusions.push("Ziegelreste")
      context.availableInclusions.push("Steine")
      context.availableInclusions.push("Keramik")
      context.availableInclusions.push("Knochen")
      context.availableInclusions.push("Zement")
      context.availableInclusions.push("Mörtel/Putz")
      context.availableInclusions.push("Oxyde")
      context.availableInclusions.push("Sonstiges")
    },
    addInclusion: function (){
      this.hideOverlay()
      var newinclusion={
          name: this.inclusionName,
          percentage: this.inclusionPercentage
      }
      this.affiliatedInclusions.push(newinclusion)
    },
    addExistingMaterialToStructure: function (item) {
      this.hideOverlay()
      this.affiliatedInclusions.push(item)
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
        sectionnumber: this.sectionnumber,
        description: this.description,
        date: new Date().toDateString(),
        excavation: this.excavation,
        soil: this.soil,
        prelimdate: this.prelimdate,
        colour_hue: this.colour_hue,
        colour_value: this.colour_value,
        colour_chroma: this.colour_chroma,
        affiliatedInclusions: this.affiliatedInclusions,
        excavationId: VueCookies.get('currentExcavation')._id
      }
      structuresdb.put(campaign, function callback (err, result) {
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
