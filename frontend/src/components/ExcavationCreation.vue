<template>
  <div>
    <form>
      <ion-item>
        <ion-label position="stacked">Name der Ausgrabung</ion-label>
        <ion-input v-on:ionInput="title=$event.target.value" placeholder="Geben Sie die Bezeichnung der Ausgrabung ein" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Organisation</ion-label>
        <ion-input v-on:ionInput="organisation=$event.target.value" placeholder="Tragen Sie hier die zugehörige Organisation ein"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Auftraggeber</ion-label>
        <ion-input v-on:ionInput="customer=$event.target.value" placeholder="Tragen Sie hier den Auftraggeber der Ausgrabung ein"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Grabungsfokus</ion-label>
        <ion-textarea v-on:ionInput="excavationFocus=$event.target.value" rows="5" placeholder="Beschreiben Sie hier den Fokus dieser Ausgrabung"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ort</ion-label>
        <ion-textarea v-on:ionInput="location=$event.target.value" rows="2" placeholder="Geben Sie hier an, wo die Ausgrabung stattfindet"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Beginn der Ausgrabung</ion-label>
        <ion-input v-on:ionInput="excavationStartDate=$event.target.value" placeholder="Geben Sie hier das Startdatum der Ausgrabung an"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ende der Ausgrabung</ion-label>
        <ion-input v-on:ionInput="excavationEndDate=$event.target.value" placeholder="Geben Sie hier das Enddatum der Ausgrabung an"></ion-input>
      </ion-item>

      <!--
      <ion-item>
        <ion-label position="stacked">Ist die Ausgrabung aktiv?</ion-label>
        <div >
          <ion-toggle checked></ion-toggle>
        </div>
      </ion-item>
      -->

      <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
      <ion-button @click="goBack()"> Abbrechen </ion-button>
    </form>

  </div>
</template>

<script>
import VueCookies from 'vue-cookies'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('excavations_database') // creates new database or opens existing one
var remoteDB = new PouchDB('http://192.168.159.1:5984/excavations')

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
  console.log('whyyy')
  console.log(err)
})

export default {
  name: 'ExcavationCreation',
  data: function () {
    return {
      title: '',
      organisation: '',
      customer: '',
      excavationFocus: '',
      location: '',
      excavationStartDate: '',
      excavationEndDate: '',
      campaignId: ''
    }
  },
  methods: {
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let excavation = {
        _id: this.title + new Date().toISOString(),
        title: this.title,
        organisation: this.organisation,
        customer: this.customer,
        excavationFocus: this.excavationFocus,
        location: this.location,
        excavationEndDate: this.excavationEndDate,
        excavationStartDate: this.excavationStartDate,
        campaignId: VueCookies.get('currentCampaign')._id
      }
      db.put(excavation, function callback (err, result) {
        if (!err) {
          console.log('Successfully posted a excarvation')
          // eslint-disable-next-line standard/object-curly-even-spacing
          router.push({ name: 'CampaignOverview'})
        }
      })
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CampaignOverview'})
    }
  }
}
</script>

<style scoped>

</style>
