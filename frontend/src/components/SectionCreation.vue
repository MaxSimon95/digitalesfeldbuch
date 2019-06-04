<template>
  <div>
    <form>
      <ion-item>
        <ion-label position="stacked">Name des Schnitts</ion-label>
        <ion-input v-on:ionInput="title=$event.target.value" placeholder="Geben Sie die Bezeichnung des Schnitts ein" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Datum</ion-label>
        <ion-input v-on:ionInput="date=$event.target.value" placeholder="Tragen Sie hier ein zugehörendes Datum ein"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Schnittleiter</ion-label>
        <ion-input v-on:ionInput="leader=$event.target.value" placeholder="Tragen Sie hier den Leiter des Schnitts ein"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Startniveau</ion-label>
        <ion-input v-on:ionInput="startNiveau=$event.target.value" placeholder="Geben Sie hier das Startniveau des Schnitts an"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Endeniveau</ion-label>
        <ion-input v-on:ionInput="endNiveau=$event.target.value" placeholder="Geben Sie hier das Endniveau des Schnitts an"></ion-input>
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
var db = new PouchDB('sections_database') // creates new database or opens existing one
var remoteDB = new PouchDB('http://192.168.137.1:5984/sections')

db.sync(remoteDB, {
  live: false,
  retry: false
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
  name: 'SectionCreation',
  data: function () {
    return {
      title: '',
      date: '',
      leader: '',
      startNiveau: '',
      endNiveau: '',
      excavationId: ''
    }
  },
  methods: {
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let section = {
        _id: this.title + new Date().toISOString(),
        title: this.title,
        date: this.date,
        leader: this.leader,
        startNiveau: this.startNiveau,
        endNiveau: this.endNiveau,
        excavationEndDate: this.excavationEndDate,
        excavationStartDate: this.excavationStartDate,
        excavationId: VueCookies.get('currentExcavation')._id
      }
      db.put(section, function callback (err, result) {
        if (!err) {
          console.log('Successfully posted a section')
          // eslint-disable-next-line standard/object-curly-even-spacing
          router.push({ name: 'SectionsOverview'})
        }
      })
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'SectionsOverview'})
    }
  }
}
</script>

<style scoped>

</style>
