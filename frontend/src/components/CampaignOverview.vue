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
                <h2> {{item.name}} </h2>
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
var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('campaigns_database') // creates new database or opens existing one
this.campaigns = db.allDocs()
export default {
  name: 'CampaignOverview',
  methods: {
    selectCampaign: function (item) {
      alert('TODO: Kampagne auswählen: ' + item.id + ' ' + item.name)
    }, // TODO: Select Campaign

    createCampaign: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CreateCampaign'})
    }, // TODO: create Campaign

    changeCampaign: function (item) {
      alert('TODO: Kampagne bearbeiten')
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifyCampaign', params: { id: item.id }})
    }, // TODO: change campaign

    deleteCampaign: function (item) { alert('TODO: Kampagne löschen') } // TODO: change campaign
  },
  data: function () {
    return {
      campaigns: [ // TODO: replace Dummy JSON with proper campaign data once possible
        {
          'id': 0,
          'name': 'Phantom Blood',
          'description': 'Kono dio da!'
        },
        {
          'id': 1,
          'name': 'Battle Tendency',
          'description': 'Caesar!'
        },
        {
          'id': 2,
          'name': 'Stardust Crusaders',
          'description': 'No one can deflect the emeraldo splash!'
        },
        {
          'id': 3,
          'name': 'Diamond is Unbreakable',
          'description': 'No Dignity'
        },
        {
          'id': 4,
          'name': 'Vento Aureo',
          'description': 'Buccellati: The enemy stand users will try to blend in'
        }
      ]
      // campaigns: this.campaigns
    }
  }
}

</script>

<style scoped>
</style>
