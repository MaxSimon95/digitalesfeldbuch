<template>
    <div>
      <!-- List of Text Items -->
      <ion-list>
        <ion-item-sliding v-for="item in campaigns" v-bind:key="item.id" lines="inset">

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
            <ion-item-option @click="changeCampaign(item)">Bearbeiten</ion-item-option>
            <ion-item-option color="danger" @click="deleteCampaign(item)">
              <ion-icon slot="icon-only" name="trash"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
          <ion-button color="secondary" expand="block" @click="createCampaign()">Neue Kampagne</ion-button>
    </div>
</template>

<script>

export default {
  name: 'CampaignOverview',
  methods: {
    getCampaigns: function () {
      var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
      var db = new PouchDB('campaigns_database')
      var context = this; // to enable accessing the campaigns variable inside submethods
      db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for  (let item of result.rows){
          context.campaigns.push(item.doc)
        }
      }).catch(function (err) {
        console.log(err);
      })
    },
    selectCampaign: function (item) {
      alert('TODO: Kampagne auswählen: ' + item.id + ' ' + item.name)
    }, // TODO: Select Campaign

    createCampaign: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CreateCampaign'})
    },

    changeCampaign: function (item) {
      alert('TODO: Kampagne bearbeiten')
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifyCampaign', params: { id: item.id }})
    }, // TODO: change campaign

    deleteCampaign: function (item) { alert('TODO: Kampagne löschen') } // TODO: change campaign
  },
  beforeMount(){
    this.getCampaigns()
  },
  data: function () {
    return {
      campaigns: [],
    }
  }
}

</script>

<style scoped>
</style>
