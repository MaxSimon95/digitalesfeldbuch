<template>
  <div>
    <h1>Übersicht der Befunde</h1>
    <!-- List of Text Items -->
    <ion-list>
      <ion-item-sliding v-for="item in structures" v-bind:key="item._id" lines="inset">

        <ion-item-options side="start">
          <ion-item-option @click="selectStructure(item)">Öffnen</ion-item-option>
        </ion-item-options>

        <ion-item detail="true" @click="selectStructure(item)" >
          <ion-label>
            <h2> {{item.structurenumber}} </h2>
            <p> {{item.description}} </p>
          </ion-label>
        </ion-item>

        <ion-item-options side="end">
          <ion-item-option @click="modifyStructure(item)">Bearbeiten</ion-item-option>
          <ion-item-option color="danger" @click="deleteStructure(item)">
            <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
    <ion-button color="secondary" expand="block" @click="createStructure()">Neuer Befund</ion-button>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
export default {
  name: 'StructuresOverview',
  methods: {
    getStructures: function () {
      var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
      var db = new PouchDB('structures_database')
      var remoteDB = new PouchDB('http://192.168.178.22:5984/structures')
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

      var context = this // to enable accessing the 'campaigns' variable inside submethods
      db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          if (item.doc.excavationId === VueCookies.get('currentExcavation')._id) context.structures.push(item.doc)
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    selectStructure: function (item) {
      VueCookies.set('currentStructure', item)
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'StructureOverview', params: { _id: item._id }})
    },

    createStructure: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'StructureCreation'})
    },

    modifyStructure: function (item) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'StructureModification', params: { _id: item._id }})
    },

    deleteStructure: function (item) { } // TODO: change campaign
  },
  beforeMount () {
    this.getStructures()
  },
  data: function () {
    return {
      structures: []
    }
  }
}
</script>

<style scoped>

</style>
