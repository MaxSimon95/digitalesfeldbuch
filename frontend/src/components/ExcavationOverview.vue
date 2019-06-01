<template>
  <div>
    <ExcavationHeader/>
    <h1> {{title}}</h1>
    TODO: Hier am Prototypen orientieren.
    <ion-button @click="modifyExcavation()">Ausgrabung bearbeiten</ion-button>
    <hr>
    <!-- the list of excavations and correlating functionality comes from a nested component: -->
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
      description: '',
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
      context.description = result.description
    })
  },
  methods: {
    modifyExcavation: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifyExcavation', params: { _id: context._id }})
    }
  }
}
</script>

<style scoped>

</style>
