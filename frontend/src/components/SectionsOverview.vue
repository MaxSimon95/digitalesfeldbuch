<template>
  <div id="sectionsWrapper" >
    <!-- List of Text Items -->
    <h1>Übersicht der Schnitte</h1>
    <p v-if="sections.length === 0">
      <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Schnitte dokumentiert.
    </p>
    <ion-list>
      <ion-item-sliding v-for="item in sections" v-bind:key="item._id" lines="inset">

        <ion-item-options side="start">
          <ion-item-option @click="selectSection(item)">Öffnen</ion-item-option>
        </ion-item-options>

        <ion-item detail="true" @click="selectSection(item)" >
          <ion-label>
            <h2> {{item.title}} </h2>
          </ion-label>
        </ion-item>

        <ion-item-options side="end">
          <ion-item-option @click="modifySection(item)">
            <ion-icon slot="icon-only" name="settings"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" @click="deleteSection(item)">
            <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
    <ion-button color="secondary" expand="block" @click="createSection()">Neuer Schnitt</ion-button>
  </div>

</template>

<script>
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'
export default {
  name: 'SectionsOverview',
  methods: {
    getSections: function () {
      var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
      var sectiondb = new PouchDB('sections_database')
      var sectionremoteDB = new PouchDB(path + '/sections')

      sectiondb.sync(sectionremoteDB, {
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
      sectiondb.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          if (item.doc.excavationId === VueCookies.get('currentExcavation')._id) context.sections.push(item.doc)
        }
      }).catch(function (err) {
        console.log(err)
      })
      context.sections.sort()
    },
    selectSection: function (item) {
      VueCookies.set('currentSection', item)
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'SectionOverview'})
    }, // TODO

    createSection: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CreateSection'})
    }, // TODO

    modifySection: function (item) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifySection', params: { _id: item._id }})
    }, // TODO

    deleteSection: function (item) { } // TODO: change campaign
  },
  created () {
    this.getSections()
  },
  data: function () {
    return {
      sections: []
    }
  }
}

</script>

<style scoped>

</style>

<style scoped>

</style>
