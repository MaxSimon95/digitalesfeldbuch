<template>
  <div>
    <div>
      <form>
        <ion-item>
          <ion-label position="stacked">Name der Ausgrabung</ion-label>
          <ion-input id="title-input" v-on:ionInput="title=$event.target.value" :value=title></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Organisation</ion-label>
          <ion-input v-on:ionInput="organisation=$event.target.value" :value=organisation></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Auftraggeber</ion-label>
          <ion-input v-on:ionInput="customer=$event.target.value" :value=customer></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Grabungsfokus</ion-label>
          <ion-textarea v-on:ionInput="excavationFocus=$event.target.value" rows="5" :value=excavationFocus></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Ort</ion-label>
          <ion-textarea v-on:ionInput="location=$event.target.value" rows="2" :value=location></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Beginn der Ausgrabung</ion-label>
          <ion-input v-on:ionInput="excavationStartDate=$event.target.value" :value=excavationStartDate></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Ende der Ausgrabung</ion-label>
          <ion-input v-on:ionInput="excavationEndDate=$event.target.value" :value=excavationEndDate></ion-input>
        </ion-item>

        <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
        <ion-button @click="goBack()"> Abbrechen </ion-button>
      </form>
    </div>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('excavations_database') // creates new database or opens existing one
let context
export default {
  name: 'ExcavationModification',
  data: function () {
    return {
      title: '',
      organisation: '',
      customer: '',
      excavationFocus: '',
      location: '',
      excavationStartDate: '',
      excavationEndDate: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0,
      // eslint-disable-next-line vue/no-reserved-keys
      _rev: 0
    }
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    context = this
    context._id = VueCookies.get('currentExcavation')._id
    db.get(context._id).then(function (result) {
      context.title = result.title
      context.organisation = result.organisation
      context.customer = result.customer
      context.excavationFocus = result.excavationFocus
      context.location = result.location
      context.excavationStartDate = result.excavationStartDate
      context.excavationEndDate = result.excavationEndDate
      context._rev = result._rev
    })
    this.title = context.title
    this.organisation = context.organisation
    this.customer = context.customer
    this.excavationFocus = context.excavationFocus
    this.location = context.location
    this.excavationStartDate = context.excavationStartDate
    this.excavationEndDate = context.excavationEndDate
    this._rev = context._rev
  },
  methods: {
    logForm: function () {
      console.log('form')
      let router = this.$router // the corre'form'is' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let excavation = {
        _id: context._id,
        title: context.title,
        organisation: context.organisation,
        customer: context.customer,
        excavationFocus: context.excavationFocus,
        location: context.location,
        excavationStartDate: context.excavationStartDate,
        excavationEndDate: context.excavationEndDate,
        _rev: context._rev,
        campaignId: VueCookies.get('currentCampaign')._id
      }
      db.put(excavation, function callback (err, result) {
        if (!err) {
          console.log(excavation)
          console.log(excavation._id)
          console.log('Successfully changed an excavation! ')
          // eslint-disable-next-line standard/object-curly-even-spacing
          // router.push({ name: 'CampaignsOverview'})
          router.go(-1) // dynamic and fun
        } else {
          console.log(err)
        }
      })
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      // this.$router.push({ name: 'CampaignsOverview'}) // commented out because its static
      this.$router.go(-1) // dynamic and fun
    }
  }
}
</script>

<style scoped>

</style>
