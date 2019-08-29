<template>
  <div>
    <h1>Befund bearbeiten</h1>
  <form>
    <ion-item>
      <ion-label position="stacked">Befundnummer (SE)</ion-label>
      <ion-input v-on:ionInput="structurenumber=$event.target.value" :value=structurenumber ></ion-input>
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

    <ion-item>
      <ion-label position="stacked">Maße (Ausdehnung/ Schichtstärke)</ion-label>
      <ion-input v-on:ionInput="measurings=$event.target.value" :value=measurings></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Niveau (OK + UK)</ion-label>
      <ion-input v-on:ionInput="niveau=$event.target.value" :value=niveau></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Lokalisierung in Sondage</ion-label>
      <ion-input v-on:ionInput="localisation=$event.target.value" :value=localisation></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Ausdehnung (reicht von/ bis, stößt an, zieht ins Profil)</ion-label>
      <ion-textarea v-on:ionInput="extension=$event.target.value" rows="4" :value=extension></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Konsistenz Oberfläche (kompakt -weich etc.)</ion-label>
      <ion-textarea v-on:ionInput="outerconsistency=$event.target.value" rows="2" :value=outerconsistency></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Konsistenz Schichtinneres (kompakt -weich etc.)</ion-label>
      <ion-textarea v-on:ionInput="innerconsistency=$event.target.value" rows="2" :value=innerconsistency></ion-textarea>
    </ion-item>

    <!--ion-item>
      <ion-label position="stacked">Bodenart</ion-label>
      <ion-textarea v-on:ionInput="soil=$event.target.value" rows="4" :value=soil ></ion-textarea>
    </ion-item-->

    <div class="munsellWrapperOuter">
      <div class="munsellWrapperInner">

        <ion-label position="stacked">Bodenfarbe (Munsell-Format, z.B. 10YR 5/4)</ion-label>
        <!--<ion-label position="stacked">Hue: (z.B. 10.0PB)</ion-label>-->
        <div>
          <div class="munselInputDiv" id="hueInputDiv">
            <ion-input v-on:ionInput="colour_hue=$event.target.value" placeholder="10YR"></ion-input>
          </div>
          <!--<ion-label position="stacked">Value (z.B. 5.00):</ion-label>-->
          <div class="munselInputDiv" id="valueInputDiv">
            <ion-input v-on:ionInput="colour_value=$event.target.value" placeholder="5"></ion-input>
          </div>
          <!--<ion-label position="stacked">Chroma (z.B. 8.00):</ion-label>-->
          /
          <div class="munselInputDiv" id="chromaInputDiv">
            <ion-input v-on:ionInput="colour_chroma=$event.target.value" placeholder="4"></ion-input>
          </div>
        </div>
      </div>
    </div>

    <div class="inclusionWrapper">
      <div>
      <ion-label position="stacked">Einschlüsse</ion-label>


      <ion-list>
        <ion-button v-for="item in affiliatedInclusions" v-bind:key="item._id" @click="removeElement(item)">
          <ion-text>
            {{item.name}},
            {{item.percentage}}%
          </ion-text>
          <ion-icon name="close"></ion-icon>
        </ion-button>

      </ion-list>

      <ion-button @click="showOverlay" color="secondary"> Einschluss hinzufügen</ion-button>
      </div>
    </div>

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

    <!--div class="formOverlayOuter overlayVisible" v-bind:style="{ display: overlayDisplay }" >
      <div class="formOverlayInner">
        <h2>Einschluss hinzufügen</h2>
        <hr/>

        <ion-item>Hier kann man einen Einschluss .</ion-item>
        <p v-if="availableInclusions.length === 0">
          <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Einschlüsse hinterlegt.
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
    </div-->

    <ion-item>
      <ion-label position="stacked">Allgemeine Beschreibung</ion-label>
      <ion-textarea v-on:ionInput="description=$event.target.value" rows="4" :value=description ></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Vorläufige Datierung/ Interpretation</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" :value=prelimdate ></ion-input>
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
let context
export default {
  name: 'StructureModification',
  data: function () {
    return {
      overlayDisplay: 'none',
      structurenumber: '',
      sectionnumber: '',
      description: '',
      extension: '',
      outerconsistency: '',
      innerconsistency: '',
      measurings: '',
      niveau: '',
      localisation: '',
      //soil: '',
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
      availableInclusions: [],
      affiliatedInclusions: [],
      availableSections: []
    }
  },
  beforeMount () {
    this.getMaterials()
    this.getSections()
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    context = this
    context._id = context.$route.params._id
    structuresdb.get(context._id).then(function (result) {
      context.structurenumber = result.structurenumber
      context.sectionnumber = result.sectionnumber
      context.description = result.description
      context.extension = result.extension
      context.outerconsistency = result.outerconsistency
      context.innerconsistency = result.innerconsistency
      context.measurings = result.measurings
      context.niveau = result.niveau
      context.localisation = result.localisation
      //context.soil = result.soil
      context.date = result.date
      context.prelimdate = result.prelimdate
      context.colour_hue = result.colour_hue
      context.colour_value = result.colour_value
      context.colour_chroma = result.colour_chroma
      context._rev = result._rev
      context.excavationId = result.excavationId
      context.affiliatedInclusions = result.affiliatedInclusions
    })
    this.sectionnumber = context.sectionnumber
    this.structurenumber = context.structurenumber
    this.description = context.description
    this.extension = context.extension
    this.outerconsistency = context.outerconsistency
    this.innerconsistency = context.innerconsistency
    this.measurings = context.measurings
    this.niveau = context.niveau
    this.localisation = context.localisation
    //this.soil = context.soil
    this.date = context.date
    this.prelimdate = context.prelimdate
    this.colour_hue = context.colour_hue
    this.colour_value = context.colour_value
    this.colour_chroma = context.colour_chroma
    this._rev = context._rev
    this.excavationId = context.excavationId
    this.affiliatedInclusions = context.affiliatedInclusions
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
    addInclusion: function () {
        this.hideOverlay()
        var newinclusion = {
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
      let router = this.$router // the corre'form'is' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let structure = {
        _id: context._id,
        structurenumber: context.structurenumber,
        description: context.description,
        extension: context.extension,
        outerconsistency: context.outerconsistency,
        innerconsistency: context.innerconsistency,
        measurings: context.measurings,
        niveau: context.niveau,
        localisation: context.localisation,
        //soil: context.soil,
        date: context.date,
        prelimdate: context.prelimdate,
        colour_hue: context.colour_hue,
        colour_value: context.colour_value,
        colour_chroma: context.colour_chroma,
        affiliatedInclusions: context.affiliatedInclusions,
        _rev: context._rev,
        excavationId: context.excavationId,
        sectionnumber: context.sectionnumber
      }
      structuresdb.put(structure, function callback (err, result) {
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

  .munsellWrapperOuter{
    text-align: left;
    padding-left: 16px;
  }

  .munsellWrapperInner{
    border-bottom: solid 1px #d0ced0;
  }

  .munselInputDiv{
    display: inline-block;
    width: 75px;
  }

  #valueInputDiv, #chromaInputDiv{
    text-align: center;
  }

  .inclusionWrapper{
    text-align: left;
    padding-left: 16px;
  }

  .inclusionWrapper div{
    border-bottom: solid 1px #d0ced0;
  }

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
