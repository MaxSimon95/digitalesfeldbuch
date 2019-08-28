<template>
  <div class="contentContainer">
    <h1> Detailansicht Fund</h1>
    <p> <span class="bolder">Fundnummer: </span>{{findnumber}}</p>
    <p> <span class="bolder">zugehöriger Schnitt: </span>{{sectionnumber}}</p>
    <p> <span class="bolder">zugehöriger Befund (SE): </span>{{structurenumber}}</p>
    <p> <span class="bolder">Tachymeter ID: </span>{{tachymeterid}}</p>
    <p> <span class="bolder">Fundtyp: </span>{{type}}</p>
    <p> <span class="bolder">Kurzbeschreibung: </span> {{description}}</p>
    <p> <span class="bolder">Material: </span> {{affiliatedMaterial}}</p>
    <p> <span class="bolder">Vorläufige Datierung: </span> {{prelimdate}}</p>
    <p> <span class="bolder">Vorläufige Verortung: </span> {{coordinates}}</p>

    <div class="center">
      <ion-button @click="modifyFind()">Fund bearbeiten</ion-button>
    </div>
    <hr>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var findsdb = new PouchDB('finds_database') // creates new database or opens existing one
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
  name: 'FindOverview',
  data: function () {
    return {
      sectionnumber:'',
      findnumber: '',
      structurenumber: '',
      tachymeterid: '',
      type: '',
      description: '',
      affiliatedMaterial: '',
      prelimdate: '',
      coordinates: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0
    }
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    context = this
    // context._id = context.$route.params._id
    context._id = VueCookies.get('currentFind')._id
    findsdb.get(context._id).then(function (result) {
      context.findnumber = result.findnumber
      context.sectionnumber = result.sectionnumber
      context.structurenumber = result.structurenumber
      context.tachymeterid = result.tachymeterid
      context.type = result.type
      context.description = result.description
      context.affiliatedMaterial = result.affiliatedMaterial
      context.prelimdate = result.prelimdate
      context.coordinates = result.coordinates
      console.log(result)
    })
  },
  methods: {
    modifyFind: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'FindModification', params: { _id: context._id }})
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
</style>
