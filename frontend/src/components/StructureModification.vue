<template>
  <form>
    <ion-item>
      <ion-label position="stacked">Befundnummer</ion-label>
      <ion-input v-on:ionInput="structurenumber=$event.target.value" :value=structurenumber ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Kurzbeschreibung</ion-label>
      <ion-textarea v-on:ionInput="description=$event.target.value" rows="4" :value=description ></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Bodenart</ion-label>
      <ion-textarea v-on:ionInput="soil=$event.target.value" rows="4" :value=soil ></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Vorläufige Datierung</ion-label>
      <ion-input v-on:ionInput="prelimdate=$event.target.value" :value=prelimdate ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Bodenfarbe</ion-label>
      <ion-input v-on:ionInput="colour=$event.target.value" :value=colour ></ion-input>
    </ion-item>

    <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
    <ion-button @click="goBack()"> Abbrechen </ion-button>
  </form>
</template>

<script>
var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('structures_database') // creates new database or opens existing one
let context
export default {
  name: 'StructureModification',
  data: function () {
    return {
      structurenumber: '',
      description: '',
      soil: '',
      date: '',
      prelimdate: '',
      excavationId: '',
      colour: '',
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
      context.structurenumber = result.structurenumber
      context.description = result.description
      context.soil = result.soil
      context.date = result.date
      context.prelimdate = result.prelimdate
      context.colour = result.colour
      context._rev = result._rev
      context.excavationId = result.excavationId
    })
    this.structurenumber = context.structurenumber
    this.description = context.description
    this.soil = context.soil
    this.date = context.date
    this.prelimdate = context.prelimdate
    this.colour = context.colour
    this._rev = context._rev
    this.excavationId = context.excavationId
  },
  methods: {
    logForm: function () {
      let router = this.$router // the corre'form'is' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let structure = {
        _id: context._id,
        structurenumber: context.structurenumber,
        description: context.description,
        soil: context.soil,
        date: context.date,
        prelimdate: context.prelimdate,
        colour: context.colour,
        _rev: context._rev,
        excavationId: context.excavationId
      }
      db.put(structure, function callback (err, result) {
        if (!err) {
          console.log('Successfully changed a structure! ')
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
