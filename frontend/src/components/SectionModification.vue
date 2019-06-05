<template>
  <div>
    <h1>Schnitt bearbeiten</h1>
    <div>
      <form>
        <ion-item>
          <ion-label position="stacked">Name des Schnitts</ion-label>
          <ion-input id="title-input" v-on:ionInput="title=$event.target.value" :value=title></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Datum</ion-label>
          <ion-input v-on:ionInput="date=$event.target.value" :value=date></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Schnittleiter</ion-label>
          <ion-input v-on:ionInput="leader=$event.target.value" :value=leader></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">StartNiveau</ion-label>
          <ion-textarea v-on:ionInput="startNiveau=$event.target.value" :value=startNiveau></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">EndNiveau</ion-label>
          <ion-textarea v-on:ionInput="endNiveau=$event.target.value" :value=endNiveau></ion-textarea>
        </ion-item>

        <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
        <ion-button @click="goBack()"> Abbrechen </ion-button>
      </form>
    </div>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('sections_database') // creates new database or opens existing var db = new PouchDB('sections_database') // creates new database or opens existing one
var remoteDB = new PouchDB('http://192.168.159.1:5984/sections')

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

let context
export default {
  name: 'SectionModification',
  data: function () {
    return {
      title: '',
      leader: '',
      date: '',
      startNiveau: '',
      endNiveau: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0,
      // eslint-disable-next-line vue/no-reserved-keys
      _rev: 0
    }
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    context = this
    context._id = VueCookies.get('currentSection')._id
    db.get(context._id).then(function (result) {
      context.title = result.title
      context.leader = result.leader
      context.date = result.date
      context.startNiveau = result.startNiveau
      context.endNiveau = result.endNiveau
      context._rev = result._rev
    })
    this.title = context.title
    this.leader = context.leader
    this.date = context.date
    this.startNiveau = context.startNiveau
    this.endNiveau = context.endNiveau
    this._rev = context._rev
  },
  methods: {
    logForm: function () {
      let router = this.$router // the corre'form'is' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let section = {
        _id: context._id,
        title: context.title,
        leader: context.leader,
        date: context.date,
        startNiveau: context.startNiveau,
        endNiveau: context.endNiveau,
        _rev: context._rev,
        excavationId: VueCookies.get('currentExcavation')._id
      }
      db.put(section, function callback (err, result) {
        if (!err) {
          console.log('Successfully changed a section! ')
          // eslint-disable-next-line standard/object-curly-even-spacing
          // router.push({ name: 'CampaignsOverview'})
          router.go(-1) // dynamic and fun
        } else {
          console.log(err)
        }
      })
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      // this.$router.push({ name: 'CampaignsOverview'}) // commented out because its static
      this.$router.go(-1) // dynamic and fun
    }
  }
}
</script>

<style scoped>

</style>
