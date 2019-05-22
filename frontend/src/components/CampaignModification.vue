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
let context
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
    context = this
    context._id = context.$route.params._id
    db.get(context._id).then(function (result) {
      context.title = result.title
      context.description = result.description
      context._rev = result._rev
      console.log(context.title + ' ' + context.description + ' ' + context._rev)
    })
    this.title = context.title
    this.description = context.description
    this._rev = context._rev
    console.log(context.title + ' ' + context.description + ' ' + context._rev)
  },
  methods: {
    logForm: function () {
      console.log('form')
      let router = this.$router // the corre'form'is' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let campaign = {
        _id: context._id,
        title: context.title,
        description: context.description,
        _rev: context._rev
      }
      db.put(campaign, function callback (err, result) {
        if (!err) {
          console.log('Successfully posted a campaign! STANDO POWER!')
          // eslint-disable-next-line standard/object-curly-even-spacing
          router.push({ name: 'CampaignOverview'})
        } else {
          console.log(err)
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
