<template>
  <div v-if="campaignIsSet">
    <h1> Kampagne: {{title}}</h1>
    <p> {{description}}</p>
    <p>
      Ansprechpartner:
      <span v-for="item in affiliatedContactPersons">
        {{item.name}}<span v-if="affiliatedContactPersons.length !== 0">,</span>
      </span></p>
    <ion-button @click="modifyCampaign()">Kampagne bearbeiten</ion-button>
    <hr>
    <!-- the list of excavations and correlating functionality comes from a nested component: -->
    <ExcavationsOverview/>
  </div>
  <div v-else>
    <h1><ion-icon name="alert"></ion-icon></h1>
    <p>
      Sie müssen zunächst eine Kampagne auswählen, bevor der Zugriff auf die zugehörigen Grabungen möglich ist.
    </p>
    <ion-button color="secondary" expand="block" @click="openCampaignsOverview()">Kampagne auswählen</ion-button>
  </div>
</template>

<script>
import ExcavationsOverview from './ExcavationsOverview'
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var campaignsdb = new PouchDB('campaigns_database') // creates new database or opens existing one
var remoteDB = new PouchDB(path + '/campaigns')
campaignsdb.sync(remoteDB, {
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
  name: 'CampaignOverview',
  components: {ExcavationsOverview},
  data: function () {
    return {
      title: '',
      description: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0,
      // eslint-disable-next-line vue/no-reserved-keys
      _rev: 0,
      affiliatedContactPersons: [],
      campaignIsSet: false
    }
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    if(VueCookies.get('currentCampaign') !== null)
    {
      this.campaignIsSet = true
      context = this
      // context._id = context.$route.params._id
      context._id = VueCookies.get('currentCampaign')._id
      campaignsdb.get(context._id).then(function (result) {
        context.title = result.title
        context.description = result.description
        context.affiliatedContactPersons = result.affiliatedContactPersons
      })

    }
    else{

    }


  },
  methods: {
    modifyCampaign: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifyCampaign', params: { _id: context._id }})
    },
    openCampaignsOverview: function () {
      this.$router.push({ name: 'CampaignsOverview'})
    }
  }

}
</script>

<style scoped>

</style>
