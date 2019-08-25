<template>
  <div class="contentContainer">
    <h1> {{title}}</h1>
    <p>
      Ansprechpartner:
      <span v-for="item in affiliatedContactPersons">
        {{item.name}}<span v-if="affiliatedContactPersons.length !== 0">,</span>
      </span></p>
    <p> <span class="bolder">Beauftragte Organisation: </span> {{organisation}}</p>
    <p> <span class="bolder">Auftraggeber: </span>{{customer}}</p>
    <p> <span class="bolder">Grabungsfokus: </span>{{excavationFocus}}</p>
    <p> <span class="bolder">Ort: </span>{{location}}</p>
    <p> <span class="bolder">Grabungszeitraum: </span> Von {{excavationStartDate}} bis {{excavationEndDate}}</p>

    <div class="center">
      <ion-button @click="modifyExcavation()">Ausgrabung bearbeiten</ion-button>
    </div>
    <hr>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'
var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var excavationsdb = new PouchDB('excavations_database') // creates new database or opens existing
var excavationsremoteDB = new PouchDB(path + '/excavations')

excavationsdb.sync(excavationsremoteDB, {
  live: true,
  retry: true
}).on('change', function (change) {
  // yo, something changed!
}).on('paused', function (info) {
  // replication was paused, usually because of a lost connection
}).on('active', function (info) {
  // replication was resumed
// eslint-disable-next-line handle-callback-err
}).on('error', function (err) {
  // totally unhandled error (shouldn't happen)
  console.log('whyyy')
  console.log(err)
})
let context
export default {
  name: 'ExcavationInfo',
  data: function () {
    return {
      title: '',
      customer: '',
      organisation: '',
      excavationFocus: '',
      location: '',
      excavationStartDate: '',
      excavationEndDate: '',
      affiliatedContactPersons: [],
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0,
      // eslint-disable-next-line vue/no-reserved-keys
      _rev: 0
    }
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    context = this
    // context._id = context.$route.params._id
    context._id = VueCookies.get('currentExcavation')._id
    excavationsdb.get(context._id).then(function (result) {
      context.title = result.title
      context.customer = result.customer
      context.organisation = result.organisation
      context.excavationFocus = result.excavationFocus
      context.location = result.location
      context.excavationStartDate = result.excavationStartDate
      context.excavationEndDate = result.excavationEndDate
      context.affiliatedContactPersons = result.affiliatedContactPersons
    })
  },
  methods: {
    modifyExcavation: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifyExcavation'})
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
