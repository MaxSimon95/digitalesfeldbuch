<template>
  <div>
    <h1>Übersicht der Befunde</h1>
    <h2 v-if="currentSectionName === ''"@click="changeSection"> <ion-button>Zugehörigen Schnitt wählen</ion-button></h2>
    <h2 v-else @click="changeSection">Ausgewählter Schnitt: {{this.currentSectionName}} <ion-button>Ändern</ion-button></h2>
    <p v-if="structures.length === 0">
      <ion-icon name="information-circle"></ion-icon> Es wurde kein Schnitt gewählt oder es wurden bisher noch keine Befunde dokumentiert.
    </p>
    <div class="buttonContainer"><ion-button color="secondary"  expand="block" @click="createStructure()">Neuer Befund</ion-button></div>
    <!-- List of Text Items -->
    <div v-if="sectionlessStructures.length !== 0">
      <h3>Befunde mit fehlender Schnittzuordnung: </h3>
      <ion-list>
        <ion-item-sliding v-for="item in even(sectionlessStructures)" v-bind:key="item._id" lines="inset">

          <ion-item-options side="start">
            <ion-item-option @click="selectStructure(item)">Öffnen</ion-item-option>
          </ion-item-options>

          <ion-item detail="true" @click="selectStructure(item)" >
            <ion-label>
              <h2> {{item.structurenumber}} </h2>
              <p> {{item.structurename}} </p>
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
    </div>
    <div v-if="structures.length !== 0">
      <h3>Befundliste des Schnitts:</h3>
    <ion-list>
      <ion-item-sliding v-for="item in even(structures)" v-bind:key="item._id" lines="inset">

        <ion-item-options side="start">
          <ion-item-option @click="selectStructure(item)">Öffnen</ion-item-option>
        </ion-item-options>

        <ion-item detail="true" @click="selectStructure(item)" >
          <ion-label>
            <h2> {{item.structurenumber}} </h2>
            <p> {{item.structurename}} </p>
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
    </div>
    <!--<ion-button color="secondary" expand="block" @click="createStructure()">Neuen Befund</ion-button>-->
  </div>

</template>

<script>
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'

export default {
  name: 'StructuresOverview',
  methods: {
    changeSection: function(){
      VueCookies.set('actionForSectionSelection','goToStructures')
      this.$router.push({ name: 'SectionsOverview'});
    },
    getStructures: function () {
      var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
      var structuresdb = new PouchDB('structures_database')
      var structuresremoteDB = new PouchDB(path + '/structures')
      structuresdb.sync(structuresremoteDB, {
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
      structuresdb.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          //if (item.doc.excavationId === VueCookies.get('currentExcavation')._id) context.structures.push(item.doc)
          if ((VueCookies.get('currentSection')!= null)&&(item.doc.sectionnumber.trim() === VueCookies.get('currentSection').title.trim())) context.structures.push(item.doc)
          if (item.doc.sectionnumber.trim() === '') context.sectionlessStructures.push(item.doc)
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
      even: function(arr) {
          // Set slice() to avoid to generate an infinite loop!
          return arr.slice().sort(function(a, b) {
              return a.structurenumber - b.structurenumber;
          });
      },

    deleteStructure: function (item) { } // TODO: change campaign
  },
  beforeMount () {
    if(VueCookies.get('currentSection')==null) this.currentSectionName=''
    else this.currentSectionName = VueCookies.get('currentSection').title
    this.getStructures()
    //this.currentSectionName = VueCookies.get('currentSection').title
  },
  data: function () {
    return {
      structures: [],
      sectionlessStructures: [],
      currentSectionName: ''
    }
  }
}
</script>

<style scoped>
  h2 a{
    text-decoration: none;
  }

  h2 ion-button{
    position: relative;
    top: -8px
  }

  h3{
    text-align: left;
    padding-left: 16px;
    font-weight: bolder;
  }

  .buttonContainer{
    padding: 0 150px;
  }
</style>
