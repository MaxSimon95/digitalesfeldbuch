<template>
  <form>
    <ion-item>
      <ion-label position="stacked">Fundnummer</ion-label>
      <ion-input v-on:ionInput="findnumber=$event.target.value" type="number" :value=findnumber ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Tachymeter ID</ion-label>
      <ion-input v-on:ionInput="tachymeterid=$event.target.value" :value=tachymeterid ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Fundtyp</ion-label>
      <ion-input v-on:ionInput="type=$event.target.value" :value=type ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Kurzbeschreibung</ion-label>
      <ion-textarea v-on:ionInput="description=$event.target.value" rows="4" :value=description></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Material</ion-label>
      <ion-textarea v-on:ionInput="materials=$event.target.value" rows="4" :value=materials></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Vorläufige Datierung</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" :value=prelimdate></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Vorläufige Verortung</ion-label>
      <ion-input v-on:ionInput="coordinates=$event.target.value" :value=coordinates></ion-input>
    </ion-item>

    <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
    <ion-button @click="goBack()"> Abbrechen </ion-button>
  </form>
</template>

<script>
var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('finds_database') // creates new database or opens existing one
let context
export default {
  name: 'FindModification',
  data: function () {
    return {
      findnumber: '',
      description: '',
      type: '',
      materials: '',
      tachymeterid: '',
      prelimdate: '',
      coordinates: '',
      date: '',
      excavation: '',
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
      context.findnumber = result.findnumber
      context.description = result.description
      context.type = result.type
      context.materials = result.materials
      context.tachymeterid = result.tachymeterid
      context.prelimdate = result.prelimdate
      context.coordinates = result.coordinates
      context.date = result.date
      context.excavation = result.excavation
      context._rev = result._rev
    })
    this.findnumber = context.findnumber
    this.description = context.description
    this.type = context.type
    this.materials = context.materials
    this.tachymeterid = context.tachymeterid
    this.prelimdate = context.prelimdate
    this.coordinates = context.coordinates
    this.date = context.date
    this.excavation = context.excavation
    this._rev = context._rev
  },
  methods: {
    logForm: function () {
      let router = this.$router // the corre'form'is' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let find = {
        _id: context._id,
        findnumber: context.findnumber,
        description: context.description,
        type: context.type,
        materials: context.materials,
        tachymeterid: context.tachymeterid,
        prelimdate: context.prelimdate,
        coordinates: context.coordinates,
        date: context.date,
        excavation: context.excavation,
        _rev: context._rev
      }
      db.put(find, function callback(err, result) {
        if (!err) {
          console.log('Successfully changed a find! ')
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
