<template>
  <div id="excavationsWrapper">
    <!-- List of Text Items -->
    <h2>Zugehörige Ausgrabungen</h2>
    <ion-list>
      <ion-item-sliding v-for="item in excavations" v-bind:key="item._id" lines="inset">

        <ion-item-options side="start">
          <ion-item-option @click="selectExcavation(item)">Öffnen</ion-item-option>
        </ion-item-options>

        <ion-item detail="true" @click="selectExcavation(item)" >
          <ion-label>
            <h2> {{item.title}} </h2>
            <p> Von: {{item.excavationStartDate}} </p>
            <p> Bis: {{item.excavationEndDate}} </p>
          </ion-label>
        </ion-item>

        <ion-item-options side="end">
          <ion-item-option @click="modifyExcavation(item)">
            <ion-icon slot="icon-only" name="settings"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" @click="deleteExcavation(item)">
            <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
    <ion-button color="secondary" expand="block" @click="createExcavation()">Neue Ausgrabung</ion-button>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
export default {
  name: 'ExcavationsOverview',
  methods: {
    getExcavations: function () {
      var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
      var db = new PouchDB('excavations_database')
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
      var context = this // to enable accessing the 'campaigns' variable inside submethods
      db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          if (item.doc.campaignId === VueCookies.get('currentCampaign')._id) context.excavations.push(item.doc)
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    selectExcavation: function (item) {
      VueCookies.set('currentExcavation', item)
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ExcavationInfo'})
    }, // TODO

    createExcavation: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CreateExcavation'})
    }, // TODO

    modifyExcavation: function (item) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifyExcavation', params: { _id: item._id }})
    }, // TODO

    deleteExcavation: function (item) { } // TODO: change campaign
  },
  beforeMount () {
    this.getExcavations()
  },
  data: function () {
    return {
      excavations: []
    }
  }
}

</script>

<style scoped>
  #excavationsWrapper{
    border-top: 1px solid var(--ion-color-medium-tint);
  }
</style>
