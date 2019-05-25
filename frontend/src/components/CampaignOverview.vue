<template>
  <div>
    <h1> {{title}}</h1>
    <p> {{description}}</p>
    <ion-button @click="modifyCampaign()">Kampagne bearbeiten</ion-button>
    <hr>
    <!-- the list of excavations and correlating functionality comes from a nested component: -->
    <ExcavationsOverview/>
  </div>
</template>

<script>
import ExcavationsOverview from './ExcavationsOverview'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('campaigns_database') // creates new database or opens existing one
let context
export default {
  name: 'CampaignOverview',
  components: {ExcavationsOverview},
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
    context._id = context.$route.params._id
    db.get(context._id).then(function (result) {
      context.title = result.title
      context.description = result.description
      console.log(context.title + context.description)
    })
  },
  methods: {
    modifyCampaign: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifyCampaign', params: { _id: context._id }})
    }
  }
}
</script>

<style scoped>

</style>
