<template>
  <div class="contentContainer">
    <h1> Schnitt: {{title}}</h1>
    <p> <span class="bolder">Datum: </span>{{date}}</p>
    <p> <span class="bolder">Schnittleiter: </span>{{leader}}</p>
    <p> <span class="bolder">StartNiveau: </span>{{startNiveau}}</p>
    <p> <span class="bolder">Endniveau: </span> {{endNiveau}}</p>

    <div class="center">
      <ion-button @click="modifySection()">Schnitt bearbeiten</ion-button>
    </div>
    <hr>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var sectiondb = new PouchDB('sections_database') // creates new database or opens existing one
var sectionremoteDB = new PouchDB(path + '/sections')

sectiondb.sync(sectionremoteDB, {
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
  console.log(err)
})

let context
export default {
  name: 'ExcavationInfo',
  data: function () {
    return {
      date: '',
      title: '',
      leader: '',
      startNiveau: '',
      endNiveau: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0
    }
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    context = this
    // context._id = context.$route.params._id
    context._id = VueCookies.get('currentSection')._id
    sectiondb.get(context._id).then(function (result) {
      context.title = result.title
      context.leader = result.leader
      context.startNiveau = result.startNiveau
      context.endNiveau = result.endNiveau
      context.date = result.date
    })
  },
  methods: {
    modifySection: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifySection'})
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
