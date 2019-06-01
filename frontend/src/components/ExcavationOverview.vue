<template>
  <div>
    <ExcavationHeader/>
    <div class="contentContainer">
      <h1> {{title}}</h1>
      <p> <span class="bolder">Beauftragte Organisation: </span> {{organisation}}</p>
      <p> <span class="bolder">Auftraggeber: </span>{{customer}}</p>
      <p> <span class="bolder">Grabungsfokus: </span>{{excavationFocus}}</p>
      <p> <span class="bolder">Ort: </span>{{location}}</p>
      <p> <span class="bolder">Grabungszeitraum: </span> Von {{excavationStartDate}} bis {{excavationEndDate}}</p>

      <ion-button @click="modifyExcavation()">Ausgrabung bearbeiten</ion-button>
      <hr>
    </div>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import ExcavationHeader from './ExcavationHeader'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('excavations_database') // creates new database or opens existing one
let context
export default {
  name: 'ExcavationOverview',
  components: {ExcavationHeader},
  data: function () {
    return {
      title: '',
      customer: '',
      organisation: '',
      excavationFocus: '',
      location: '',
      excavationStartDate: '',
      excavationEndDate: '',
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
    db.get(context._id).then(function (result) {
      context.title = result.title
      context.customer = result.customer
      context.organisation = result.organisation
      context.excavationFocus = result.excavationFocus
      context.location = result.location
      context.excavationStartDate = result.excavationStartDate
      context.excavationEndDate = result.excavationEndDate
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

div.contentContainer h1 {
  text-align: center;
}
</style>
