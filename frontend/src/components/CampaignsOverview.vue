<template>
    <div>
      <h1>Auswahl einer übergeordneten Kampagne</h1>
      <p v-if="campaigns.length === 0">
        <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Kampagnen angelegt.
      </p>
      <!-- List of Text Items -->
      <div class="buttonContainer"><ion-button color="secondary" expand="block" @click="createCampaign()">Neue Kampagne</ion-button></div>
      <!--<ion-button color="secondary" expand="block" @click="synccampaigns()">Synchronisieren</ion-button>-->
      <ion-list>
        <ion-item-sliding v-for="item in even(campaigns)" v-bind:key="item._id" lines="inset">

          <ion-item-options side="start">
            <ion-item-option @click="selectCampaign(item)">Öffnen</ion-item-option>
          </ion-item-options>

            <ion-item detail="true" @click="selectCampaign(item)" >
              <ion-label>
                <h2> {{item.title}} </h2>
                <p> {{item.description}} </p>
              </ion-label>
            </ion-item>

          <ion-item-options side="end">
            <ion-item-option @click="modifyCampaign(item)">Bearbeiten</ion-item-option>
            <ion-item-option color="danger" @click="deleteCampaign(item)">
              <ion-icon slot="icon-only" name="trash"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

    </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import RestartButton from './RestartButton'
import {path} from '../adress.js'
import PouchDB from 'pouchdb'

//var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var campaignsdb = new PouchDB('campaigns_database')

export default {

  name: 'CampaignsOverview',
  components: {RestartButton},
  methods: {
    getCampaigns: function () {
      var campaignsremoteDB = new PouchDB(path + '/campaigns')
      campaignsdb.sync(campaignsremoteDB, {
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
      campaignsdb.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          context.campaigns.push(item.doc)
        }
      }).catch(function (err) {
        console.log(err)
      })
      context.campaigns.sort()
    },
    selectCampaign: function (item) {
      VueCookies.set('currentCampaign', item)
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CampaignOverview', params: { _id: item._id }})
    },

    createCampaign: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CreateCampaign'})
    },

    modifyCampaign: function (item) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifyCampaign', params: { _id: item._id }})
    },

    synccampaigns: function(){
      var campaignsremoteDB = new PouchDB(path + '/campaigns')
      campaignsdb.sync(campaignsremoteDB)
    },
    even: function(arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function (a, b) {
        return a.title - b.title
      })
    },

    deleteCampaign: function (item) { } // TODO: change campaign
  },
  beforeMount () {
    this.getCampaigns()
  },
  data: function () {
    return {
      campaigns: []
    }
  }
}

</script>

<style scoped>
  .buttonContainer{
    padding: 0 150px;
  }
</style>
