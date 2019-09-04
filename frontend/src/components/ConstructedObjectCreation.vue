<template>
  <div>
    <form>
      <ion-item>
        <ion-label position="stacked">Name des Schnitts</ion-label>
        <ion-input v-on:ionInput="title=$event.target.value" placeholder="Geben Sie die Bezeichnung des Schnitts ein" ></ion-input>
      </ion-item>

      <!--ion-item>
        <ion-label position="stacked"> Erhalten </ion-label>
        <ion-checkbox slot="end" v-on:input="conserved_length = $event.trigger.value" v-bind:value="">         </ion-checkbox>
      </ion-item-->

      <!--
      <ion-item>
        <ion-label position="stacked">Ist die Ausgrabung aktiv?</ion-label>
        <div >
          <ion-toggle checked></ion-toggle>
        </div>
      </ion-item>
      -->

      <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
      <ion-button @click="goBack()"> Abbrechen </ion-button>
    </form>

  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var constructedOjectDB = new PouchDB('constructedobject_database') // creates new database or opens existing one
var constructedObjectRemoteDB = new PouchDB(path + '/constructedobjects')

constructedOjectDB.sync(constructedObjectRemoteDB, {
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

export default {
  name: 'ConstructedObjectCreation',
  data: function () {
    return {
      title: '',
      length: '',
      conserved_length: 'false',
      original_length: 'false',
      visible_length: 'false',
      width: '',
      conserved_width: 'false',
      original_width: 'false',
      visible_width: 'false',
      height_am: '',
      conserved_height_am: 'false',
      original_height_am: 'false',
      visible_height_am: 'false',
      height_fm: '',
      conserved_height_fm: 'false',
      original_height_fm: 'false',
      visible_height_fm: 'false',
      orientation: '',
      bauart_schalenmauer: '',
      bauart_durchgemauert: '',
      bauart_gussmauerwerk: '',
      bauart_nicht_erkennbar: '',
      mauerwerk_quader: '',
      mauerwerk_bruchstein: '',
      mauerwerk_rollstein: '',
      mauerwerk_brick: '',
      mauerwerk_mischmauerwerk: '',
      struktur_lagerhaft: '',
      struktur_kompartimente: '',
      struktur_ausgezwickelt: '',
      struktur_Zwickel: '',
      struktur_Netz: '',
      struktur_keine: '',
      struktur_nicht_erkennbar: '',
      description: '',
      bauschliessen_Form: '',
      geruestloecher: '',
      balkenloecher: '',
      location: '',
      measurements: '',
      characteristics_style: '',
      material_stone: 'false',
      material_brick: 'false',
      material_mixed: 'false',
      material_clay_brick: 'false',
      material_percentage: '',
      material_stone_size: '',
      material_stone_material: '',
      material_stone_editing: '',
      material_spolien: '',
      wall_brick: '',
      gewoelbebrick: '',
      roof_brick: '',
      fortification_brick: '',
      brick_stamps: '',
      brick_fingerstrokes: '',
      brick_animal_footprints: '',
      moist: 'false',
      dry: 'false',
      moertelbindung: '',
      lehmbindung: '',
      bindung_hue: '',
      bindung_chroma: '',
      bindung_value: '',
      sandy: 'false',
      kalkig: 'false',
      contents_other: '',
      coarse: 'false',
      fine: 'false',
      medium: 'false',
      very_compact: 'false',
      compact: 'false',
      loose: 'false',
      very_loose: 'false',
      crumbly: 'false',
      kiesel: '',
      kalkspatzen: '',
      ziegelsplit: '',
      holzkohle: '',
      stroh: '',
      sonstiges: '',
      verstrichen: 'false',
      herausgequollen: 'false',
      kellenstrich: 'false',
      fugenbild_other: 'false',
      fugendimension: '',
      geglaettet: 'false',
      ueberrieben: 'false',
      riesel: 'false',
      geschlaemmt: 'false',
      verputz_hue: '',
      verputz_value: '',
      verputz_chroma: '',
      strength: '',
      extension: '',
      //hue: '',
      //value: '',
      //chroma: '',
      zusammensetzung: '',
      korngroese: '',
      consistency: '',
      zuschlagstoffe: '',
      mehrlagigkeit: '',
      verhaeltnisse: '',
      date: ''


    }
  },
  methods: {
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let section = {
        _id: this.title + new Date().toISOString(),
        title: this.title,
        length: this.length,
        conserved_length: this.conserved_length,
        original_length: this.original_length,
        visible_length: this.visible_length,
        width: this.width,
        conserved_width: this.conserved_width,
        original_width: this.original_width,
        visible_width: this.visible_width,
        height_am: this.height_am,
        conserved_height_am: this.conserved_height_am,
        original_height_am: this.original_height_am,
        visible_height_am: this.visible_height_am,
        height_fm: this.height_fm,
        conserved_height_fm: this.conserved_height_fm,
        original_height_fm: this.original_height_fm,
        visible_height_fm: this.conserved_height_fm,
        orientation: this.orientation,
        bauart_schalenmauer: this.bauart_schalenmauer,
        bauart_durchgemauert: this.bauart_durchgemauert,
        bauart_gussmauerwerk: this.bauart_gussmauerwerk,
        bauart_nicht_erkennbar: this.bauart_nicht_erkennbar,
        mauerwerk_quader: this.mauerwerk_quader,
        mauerwerk_bruchstein: this.mauerwerk_bruchstein,
        mauerwerk_rollstein: this.mauerwerk_rollstein,
        mauerwerk_brick: this.mauerwerk_brick,
        mauerwerk_mischmauerwerk: this.mauerwerk_mischmauerwerk,
        struktur_lagerhaft: this.struktur_lagerhaft,
        struktur_kompartimente: this.struktur_kompartimente,
        struktur_ausgezwickelt: this.struktur_ausgezwickelt,
        struktur_Zwickel: this.struktur_Zwickel,
        struktur_Netz: this.struktur_Netz,
        struktur_keine: this.struktur_keine,
        struktur_nicht_erkennbar: this.struktur_nicht_erkennbar,
        description: this.description,
        bauschliessen_Form: this.bauschliessen_Form,
        geruestloecher: this.geruestloecher,
        balkenloecher: this.balkenloecherk,
        location: this.location,
        measurements: this.measurements,
        characteristics_style: this.characteristics_style,
        material_stone: this.material_stone,
        material_brick: this.material_brick,
        material_mixed: this.material_mixed,
        material_clay_brick: this.material_clay_brick,
        material_percentage: this.material_percentage,
        material_stone_size: this.material_stone_size,
        material_stone_material: this.material_stone_material,
        material_stone_editing: this.material_stone_editing,
        material_spolien: this.material_spolien,
        wall_brick: this.wall_brick,
        gewoelbebrick: this.gewoelbebrick,
        roof_brick: this.roof_brick,
        fortification_brick: this.fortification_brick,
        brick_stamps: this.brick_stamps,
        brick_fingerstrokes: this.brick_fingerstrokes,
        brick_animal_footprints: this.brick_animal_footprints,
        moist: this.moist,
        dry: this.dry,
        moertelbindung: this.moertelbindung,
        lehmbindung: this.lehmbindung,
        bindung_hue: this.bindung_hue,
        bindung_value: this.bindung_value,
        bindung_chroma: this.bindung_chroma,
        sandy: this.sandy,
        kalkig: this.kalkig,
        contents_other: this.contents_other,
        coarse: this.coarse,
        fine: this.fine,
        medium: this.medium,
        very_compact: this.very_compact,
        compact: this.compact,
        loose: this.loose,
        very_loose: this.very_loose,
        crumbly: this.crumbly,
        kiesel: this.kiesel,
        kalkspatzen: this.kalkspatzen,
        ziegelsplit: this.ziegelsplit,
        holzkohle: this.holzkohle,
        stroh: this.stroh,
        sonstiges: this.sonstiges,
        verstrichen: this.verstrichen,
        herausgequollen: this.herausgequollen,
        kellenstrich: this.kellenstrich,
        fugenbild_other: this.fugenbild_other,
        fugendimension: this.fugendimension,
        geglaettet: this.geglaettet,
        ueberrieben: this.ueberrieben,
        riesel: this.riesel,
        geschlaemmt: this.geschlaemmt,
        verputz_hue: this.verputz_hue,
        verputz_value: this.verputz_value,
        verputz_chroma: this.verputz_chroma,
        strength: this.strength,
        extension: this.extension,
        //hue: this.hue,
        //value: this.value,
        //chroma: this.chroma,
        zusammensetzung: this.zusammensetzung,
        korngroese: this.korngroese,
        consistency: this.consistency,
        zuschlagstoffe: this.zuschlagstoffe,
        mehrlagigkeit: this.mehrlagigkeit,
        verhaeltnisse: this.verhaeltnisse,
        date: this.date
      }
    }
  }
}
</script>

<style scoped>

</style>
