<template>
  <div>
    <h1>Übersicht der Funde</h1>
    <p v-if="finds.length === 0">
      <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Funde dokumentiert.
    </p>
    <!-- List of Text Items -->
    <ion-list>
      <ion-item-sliding v-for="item in even(finds)" v-bind:key="item._id" lines="inset">

        <ion-item-options side="start">
          <ion-item-option @click="selectFind(item)">Öffnen</ion-item-option>
        </ion-item-options>

        <ion-item detail="true" @click="selectFind(item)" >
          <ion-label>
            <h2> Fundnr. {{item.findnumber}} </h2>
            <p> {{item.description}} </p>
          </ion-label>
        </ion-item>

        <ion-item-options side="end">
          <ion-item-option @click="modifyFind(item)">Bearbeiten</ion-item-option>
          <ion-item-option color="danger" @click="deleteFind(item)">
            <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
    <ion-button color="secondary" expand="block" @click="createFind()">Neuer Fund</ion-button>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'

export default {
  name: 'FindsOverview',
  methods: {
    getFinds: function () {
      var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
      var findsdb = new PouchDB('finds_database')
      var findsremoteDB = new PouchDB(path + '/finds')

      findsdb.sync(findsremoteDB, {
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
      findsdb.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          if (item.doc.excavationId === VueCookies.get('currentExcavation')._id) context.finds.push(item.doc)
        }
      }).catch(function (err) {
        console.log(err)
      })
      context.finds.sort()
    },
    selectFind: function (item) {
      VueCookies.set('currentFind', item)
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'FindOverview', params: { _id: item._id }})
    },

    createFind: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'FindCreation'})
    },

    modifyFind: function (item) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'FindModification', params: { _id: item._id }})
    },
      even: function(arr) {
          // Set slice() to avoid to generate an infinite loop!
          return arr.slice().sort(function(a, b) {
              return a.findnumber - b.findnumber
          })
      },

    deleteFind: function (item) { } // TODO: change campaign
  },
  beforeMount () {
    this.getFinds()
  },
  data: function () {
    return {
      finds: []
    }
  }
}

</script>

<style scoped>

</style>
