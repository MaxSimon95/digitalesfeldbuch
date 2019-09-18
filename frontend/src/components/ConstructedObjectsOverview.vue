<template>

  <div id="excavationsWrapper">

    <!-- List of Text Items -->
    <h2>Bauliche Bestände</h2>
    <p>
      Hier finden Sie die bereits dokumentierten baulichen Befunde und können weitere anlegen.
    </p>
    <div class="buttonContainer"><ion-button color="secondary" expand="block" @click="createConstructedObject()">Neuer Baulicher Bestand</ion-button></div>
    <p v-if="constructedObjects.length === 0">
      <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch kein Bestand dokumentiert.
    </p>
    <ion-list>
      <ion-item-sliding v-for="item in constructedObjects" v-bind:key="item._id" lines="inset">

        <ion-item-options side="start">
          <ion-item-option @click="selectConstructedObject(item)">Öffnen</ion-item-option>
        </ion-item-options>

        <ion-item detail="true" @click="selectConstructedObject(item)" >
          <ion-label>
            <h2> {{item.objectnumber}} </h2>
            <p> Bezeichnung: {{item.title}} </p>
          </ion-label>
        </ion-item>

        <ion-item-options side="end">
          <ion-item-option @click="modifyConstructedObject(item)">
            <ion-icon slot="icon-only" name="settings"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" @click="deleteConstructedObject(item)">
            <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>

  </div>
</template>

<script>
  import VueCookies from 'vue-cookies'
  import {path} from '../adress.js'


  export default {
    name: 'ExcavationsOverview',
    methods: {
      getConstructedObjects: function () {
        var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
        var constructedObjectsDB = new PouchDB('constructedobject_database')
        var constructedObjectsremoteDB = new PouchDB(path + '/constructedobject')

        constructedObjectsDB.sync(constructedObjectsremoteDB, {
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
        constructedObjectsDB.allDocs({
          include_docs: true,
          attachments: true
        }).then(function (result) {
          for (let item of result.rows) {
            /*if (item.doc.campaignId === VueCookies.get('currentCampaign')._id)*/ context.constructedObjects.push(item.doc)
          }
        }).catch(function (err) {
          console.log(err)
        })
        context.constructedObjects.sort()
      },
      selectConstructedObject: function (item) {
        console.log(item)
        VueCookies.set('currentConstructedObject', item)
        // eslint-disable-next-line standard/object-curly-even-spacing
        this.$router.push({ name: 'ConstructedObjectOverview'})
      }, // TODO

      createConstructedObject: function () {
        // eslint-disable-next-line standard/object-curly-even-spacing
        this.$router.push({ name: 'ConstructedObjectCreation'})
      }, // TODO

      modifyConstructedObject: function (item) {
        // eslint-disable-next-line standard/object-curly-even-spacing
        //this.$router.push({ name: 'ModifyExcavation', params: { _id: item._id }})
      }, // TODO

      deleteConstructedObject: function (item) { } // TODO: change campaign
    },
    beforeMount () {
      this.getConstructedObjects()
    },
    even: function(arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function(a, b) {
        return a.item - b.item
      })
    },
    data: function () {
      return {
        constructedObjects: [],
      }
    }

  }

</script>

<style scoped>
  #excavationsWrapper{
    border-top: 1px solid var(--ion-color-medium-tint);
  }

  .buttonContainer{
    padding: 0 150px;
  }
</style>
