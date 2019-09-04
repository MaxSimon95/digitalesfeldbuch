<template>
  <div class="contentContainer">
    <h1> Detailansicht Befund (SE)</h1>
    <p> <span class="bolder">Befundnummer: </span>{{structurenumber}}</p>
    <p> <span class="bolder">Kurzansprache: {{structurename}}</span></p>
    <p> <span class="bolder">zugehöriger Schnitt: </span> {{sectionnumber}}</p>
    <p> <span class="bolder">Maße: </span> {{measurings}}</p>
    <p> <span class="bolder">Niveau: </span> {{niveau}}</p>
    <p> <span class="bolder">Lokalisierung in Sondage: </span> {{localisation}}</p>
    <p> <span class="bolder">Ausdehnung: </span> {{extension}}</p>
    <p> <span class="bolder">Konsistenz Oberfläche: </span> {{outerconsistency}}</p>
    <p> <span class="bolder">Konsistenz Schichtinneres: </span> {{innerconsistency}}</p>
    <!--p> <span class="bolder">Bodenart: </span> {{soil}}</p-->
    <p> <span class="bolder">Bodenfarbe: </span> </p>
      <p> Farbwerte: Hue: {{colour_hue}}, Value: {{colour_value}}, Chroma: {{colour_chroma}} </p>
    <p> Farbvorschau: <span class="color_preview_container" v-html="colour_preview_html"></span> </p>

    <p>
      <span class="bolder"> Einschlüsse: </span>
      <span v-for="item in affiliatedInclusions">
        {{item.name}}<span v-if="affiliatedInclusions.length !== 0"> </span>
        {{item.percentage}}<span v-if="affiliatedInclusions.length !== 0">%;</span>
      </span></p>
    <p> <span class="bolder">Allgemeine Beschreibung: </span> {{description}}</p>
    <p> <span class="bolder">Vorläufige Datierung/ Interpretation: </span> {{prelimdate}}</p>

    <div class="center">
      <ion-button @click="modifyStructure()">Befund bearbeiten</ion-button>
    </div>
    <hr>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import chroma from 'chroma-js'
import * as munsell from 'munsell'
import {path} from '../adress.js'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var structuresdb = new PouchDB('structures_database') // creates new database or opens existing one
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
  name: 'StructureOverview',
  data: function () {
    return {
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
      prelimdate: '',
      colour_hue: '',
      colour_value: '',
      colour_chroma: '',
      colour_preview_html: '',
      affiliatedInclusions: [],

      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0
    }
  },
  created () {
    context = this
    // context._id = context.$route.params._id
    context._id = VueCookies.get('currentStructure')._id
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
      context.prelimdate = result.prelimdate
      context.affiliatedInclusions = result.affiliatedInclusions
      context.colour_hue = result.colour_hue
      context.colour_value = result.colour_value
      context.colour_chroma = result.colour_chroma
      console.log(context.colour_hue + context.colour_chroma +  context.colour_value)
      //var colour_rgb = chroma.hcl(parseInt(context.colour_hue), parseInt(context.colour_chroma), parseInt(context.colour_value));
      let colour_munsell = context.colour_hue + " " + context.colour_chroma + "/" + context.colour_value
      let colour_rgb_array = munsell.munsellToRgb255(colour_munsell);
      let colour_rgb = "rgb("+colour_rgb_array[0]+","+colour_rgb_array[1]+","+colour_rgb_array[2]+")"
      console.log(colour_munsell)
      console.log(colour_rgb)

      //context.colour_preview_html = chroma.hcl(130, 40, 80);
      context.colour_preview_html = '<span style="display: inherit; width: 100%; height: 100%; background-color: ' + colour_rgb + '"></span>'
    })
  },
  beforeMount () {


  },
  methods: {
    modifyStructure: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'StructureModification', params: { _id: context._id }})
    }
  }
}
</script>

<style scoped>
  div.contentContainer{
    text-align: left;
    padding: 10px
  }
  .bolder{
    font-weight: bolder;
  }

  div.center{
    text-align: center
  }

  div.contentContainer h1 {
    text-align: center;
  }

  span.color_preview_container{
  width: 100%;
  display: inline-block;
    height: 35px
  }

</style>
