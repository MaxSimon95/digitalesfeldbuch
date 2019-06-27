<template>
<div>
  <form>
  <ion-item>
    <ion-label position="stacked">Name der Kampagne</ion-label>
    <ion-input v-on:ionInput="title=$event.target.value" placeholder="Geben Sie den Namen der Kampagne ein" ></ion-input>
  </ion-item>

    <ion-list>
      Ansprechpartner
      <ion-button>
        <ion-text>
          Max Mustermann
        </ion-text>
        <ion-icon name="close"></ion-icon>
      </ion-button>

      <ion-button>
        <ion-text>
          Frau Schmitz
        </ion-text>
        <ion-icon name="close"></ion-icon>
      </ion-button>

      <ion-button color="secondary"> Hinzufügen </ion-button>
    </ion-list>

  <ion-item>
    <ion-label position="stacked">Kurzbeschreibung</ion-label>
    <ion-textarea v-on:ionInput="description=$event.target.value" rows="14" placeholder="Geben Sie hier eine kurze Beschreibung der Kampagne ein"></ion-textarea>
  </ion-item>



  <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
    <ion-button @click="goBack()"> Abbrechen </ion-button>
  </form>

</div>
</template>

<script>
import {path} from '../adress.js'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('campaigns_database') // creates new database or opens existing one
var remoteDB = new PouchDB(path + '/campaigns')

db.sync(remoteDB, {
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

export default {
  name: 'CampaignCreation',
  data: function () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let campaign = {
        _id: this.title + new Date().toISOString(),
        title: this.title,
        description: this.description
      }
      db.put(campaign, function callback (err, result) {
        if (!err) {
          console.log('Successfully posted a campaign! STANDO POWER!')
          // eslint-disable-next-line standard/object-curly-even-spacing
          router.push({ name: 'CampaignsOverview'})
        }
      })
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CampaignsOverview'})
    }
  }
}
</script>

<style scoped>

</style>
