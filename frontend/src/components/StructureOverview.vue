<template>
  <div class="contentContainer">
    <h1> Detailansicht Befund</h1>
    <p> <span class="bolder">Befundnummer: </span>{{structurenumber}}</p>
    <p> <span class="bolder">Kurzbeschreibung: </span> {{description}}</p>
    <p> <span class="bolder">Bodenart: </span> {{soil}}</p>
    <p> <span class="bolder">Vorläufige Datierung: </span> {{prelimdate}}</p>
    <p> <span class="bolder">Bodenfarbe: </span> {{colour}}</p>

    <div class="center">
      <ion-button @click="modifyStructure()">Beund bearbeiten</ion-button>
    </div>
    <hr>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('structures_database') // creates new database or opens existing one
var remoteDB = new PouchDB('http://192.168.159.1:5984/structures')

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
  name: 'StructureOverview',
  data: function () {
    return {
      structurenumber: '',
      description: '',
      soil: '',
      prelimdate: '',
      colour: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0
    }
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    context = this
    // context._id = context.$route.params._id
    context._id = VueCookies.get('currentStructure')._id
    db.get(context._id).then(function (result) {
      context.structurenumber = result.structurenumber
      context.description = result.description
      context.soil = result.soil
      context.prelimdate = result.prelimdate
      context.colour = result.colour
    })
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
</style>
