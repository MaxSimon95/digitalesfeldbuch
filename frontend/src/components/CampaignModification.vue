<template>
<div>
  <div>
    <form>
      <ion-item>
        <ion-label position="stacked">Name der Kampagne</ion-label>
        <ion-input id="title-input" v-on:ionInput="title=$event.target.value" :value=title></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Kurzbeschreibung</ion-label>
        <ion-textarea id="description-textarea" v-on:ionInput="description=$event.target.value" rows="14" :value=description></ion-textarea>
      </ion-item>

      <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
      <ion-button @click="goBack()"> Abbrechen </ion-button>
    </form>
  </div>
</div>
</template>

<script>

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('campaigns_database') // creates new database or opens existing one

export default {
  name: 'CampaignModification',
  data: function () {
    return {
      title: 'platz',
      description: 'halter',
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0,
      // eslint-disable-next-line vue/no-reserved-keys
      _rev: 0
    }
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    let campaign = this
    this._id = this.$route.params._id
    db.get(this._id).then(function (result) {
      campaign.title = result.title
      campaign.description = result.description
      campaign.rev = result._rev
    })
    this.title = campaign.title
    this.description = campaign.description
    this._rev = campaign._rev
  },
  methods: {
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let campaign = {
        _id: this._id,
        title: this.title,
        description: this.description,
        _rev: this._rev
      }
      db.put(campaign, function callback (err, result) {
        if (!err) {
          console.log('Successfully posted a campaign! STANDO POWER!')
          // eslint-disable-next-line standard/object-curly-even-spacing
          router.push({ name: 'CampaignOverview'})
        }
      })
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CampaignOverview'})
    }
  }
}
</script>

<style scoped>

</style>
