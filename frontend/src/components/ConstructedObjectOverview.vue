<template>
  <div class="contentContainer">
    <h1> {{objectnumber}}</h1>
    <h2> {{title}}</h2>
    <p> <span class="bolder">Länge: </span> {{length}}
      <span v-if="conserved_length || original_length || visible_length">(</span>
      <span v-if="conserved_length"> erhalten </span><span v-if="original_length"> original </span><span v-if="visible_length"> sichtbar </span>
    <span v-if="conserved_length || original_length || visible_length">)</span>
    </p>
    <p> <span class="bolder">Breite: </span> {{width}}
      <span v-if="conserved_width || original_width || visible_width">(</span>
      <span v-if="conserved_width"> erhalten </span><span v-if="original_width"> original </span><span v-if="visible_width"> sichtbar </span>
      <span v-if="conserved_width || original_width || visible_width">)</span>
    </p>

    <p> <span class="bolder">Höhe a.m.: </span> {{height_am}}
      <span v-if="conserved_height_am || original_height_am || visible_height_am">(</span>
      <span v-if="conserved_height_am"> erhalten </span><span v-if="original_height_am"> original </span><span v-if="visible_height_am"> sichtbar </span>
      <span v-if="conserved_height_am || original_height_am || visible_height_am">)</span>
    </p>

    <p> <span class="bolder">Höhe f.m.: </span> {{height_fm}}
      <span v-if="conserved_height_fm || original_height_fm || visible_height_fm">(</span>
      <span v-if="conserved_height_fm"> erhalten </span><span v-if="original_height_fm"> original </span><span v-if="visible_height_fm"> sichtbar </span>
      <span v-if="conserved_height_fm || original_height_fm || visible_height_fm">)</span>
    </p>

    <p> <span class="bolder">Orientierung: </span> {{orientation}} </p>

    <p v-if="bauart_schalenmauer || bauart_gussmauerwerk || bauart_nicht_erkennbar || bauart_durchgemauert || bauart_durchgemauert"> <span class="bolder" >Bauart: </span>
    <span v-if="bauart_schalenmauer"> Schalenmauer </span><span v-if="bauart_gussmauerwerk"> Gussmauerwerk </span><span v-if="bauart_durchgemauert"> Durchgemauert </span><span v-if="bauart_nicht_erkennbar"> Nicht erkennbar </span>
    </p>

    <p v-if="mauerwerk_quader || mauerwerk_bruchstein || mauerwerk_rollstein || mauerwerk_brick || mauerwerk_mischmauerwerk"> <span class="bolder" >Mauerwerk: </span>
      <span v-if="mauerwerk_quader"> Quader </span>
    <span v-if="mauerwerk_bruchstein"> Bruchstein </span>
    <span v-if="mauerwerk_rollstein"> Rollstein </span>
    <span v-if="mauerwerk_brick"> Ziegel </span>
    <span v-if="mauerwerk_mischmauerwerk"> Mischmauerwerk </span>
    </p>

    <p v-if="mauerwerk_quader || mauerwerk_bruchstein || mauerwerk_rollstein || mauerwerk_brick || mauerwerk_mischmauerwerk || mauerwerk_mischmauerwerk || mauerwerk_mischmauerwerk"> <span class="bolder" >Struktur: </span>
      <span v-if="struktur_lagenhaft"> Lagenhaft </span>
      <span v-if="struktur_kompartimente"> Kompartimente </span>
      <span v-if="struktur_ausgezwickelt"> Ausgezwickelt </span>
      <span v-if="struktur_Zwickel"> Zwickel </span>
      <span v-if="struktur_Netz"> Netz </span>
      <span v-if="struktur_keine"> Keine Struktur </span>
      <span v-if="struktur_nicht_erkennbar"> Struktur nicht erkennbar </span>
    </p>

    <p v-if="description!==''"><span class="bolder" >Beschreibung: </span>{{description}}</p>

    <p v-if="bauschliessen_Form_check"><span class="bolder" >Bauschließen-Form</span><span v-if="bauschliessen_Form!==''">: </span>{{bauschliessen_Form}}</p>

    <p v-if="geruestloecher_check"><span class="bolder" >Gerüstlöcher</span><span v-if="geruestloecher!==''">: </span>{{geruestloecher}}</p>

    <p v-if="balkenloecher_check"><span class="bolder" >Balkenlöcher</span><span v-if="balkenloecher!==''">: </span>{{balkenloecher}}</p>

    <p v-if="location!==''"><span class="bolder" >Lage: </span>{{location}}</p>

    <p v-if="measurements!==''"><span class="bolder" >Maße: </span>{{measurements}}</p>

    <p v-if="characteristics_style!==''"><span class="bolder" >Architekturelemente/Stilmerkmale: </span>{{characteristics_style}}</p>

    <p v-if="material_stone || material_brick || material_mixed || material_clay_brick"> <span class="bolder" >Material: </span>
      <span v-if="material_stone"> Stein </span>
      <span v-if="material_brick"> Ziegel </span>
      <span v-if="material_mixed"> Mischmauerwerk </span><span v-if="material_percentage!==''">mit Ziegelanteil: {{material_percentage}}</span>
      <span v-if="material_clay_brick"> Lehmziegel </span>
    </p>

    <p v-if="material_brick || material_clay_brick || material_mixed">
      <span class="bolder"> Ziegelfarbe: </span> {{brick_hue}} {{brick_value}}/{{brick_chroma}}
    </p>

    <p v-if="material_stone">
      <span class="bolder">Steingröße: </span>{{material_stone_size}}
    </p>

    <p v-if="material_stone">
      <span class="bolder">Steinmaterial: </span>{{material_stone_material}}
    </p>

    <p v-if="material_stone">
      <span class="bolder">Steinbearbeitung: </span>{{material_stone_editing}}
    </p>

    <p v-if="brick_stamps_check">
      <span class="bolder">Herstellungsmerkmale: </span>Zeichen <span v-if="brick_stamps!==''">({{brick_stamps}})</span>
    </p>

    <p v-if="brick_animal_footprints_check">
      <span class="bolder">Herstellungsmerkmale: </span>Tierspuren <span v-if="brick_animal_footprints!==''">({{brick_animal_footprints}})</span>
    </p>

    <p v-if="brick_fingerstrokes">
      <span class="bolder">Herstellungsmerkmale: </span>Fingerstriche
    </p>

    <p v-if="moist || dry || moertelbindung || lehmbindung"> <span class="bolder" >Bindung: </span>
      <span v-if="moist"> Feuchtbindung </span>
      <span v-if="dry"> Trockenbindung </span>
      <span v-if="moertelbindung"> Mörtelbindung </span>
      <span v-if="lehmbindung"> Lehmbindung </span>
    </p>

    <p>
      <span class="bolder">Zusammensetzung: </span>
      <span v-if="sandy"> Sandig </span>
      <span v-if="kalkig"> Kalkig </span>
      <span v-if="contents_other_check"> Sonstige</span> <span v-if="contents_other!==''">: {{contents_other}}</span>
    </p>

    <p v-if="coarse || medium || fine "> <span class="bolder" >Korngröße: </span>
      <span v-if="coarse"> Grob (über 0,5 cm) </span>
      <span v-if="medium"> Mittel (bis 0,5 cm) </span>
      <span v-if="fine"> Fein (unter 0,3 cm) </span>
    </p>

    <p v-if="very_compact || compact || loose || very_loose || crumbly"> <span class="bolder" >Konsistenz: </span>
      <span v-if="very_compact"> Sehr fest </span>
      <span v-if="compact"> Fest </span>
      <span v-if="loose"> Locker </span>
      <span v-if="very_loose"> Sehr Locker </span>
      <span v-if="crumbly"> Bröselig </span>
    </p>

    <p v-if="kiesel!==''"><span class="bolder" >Zuschlagstoff: </span> Kiesel: {{kiesel}}</p>
    <p v-if="kalkspatzen!==''"><span class="bolder" >Zuschlagstoff: </span> Kalkspatzen: {{kalkspatzen}}</p>
    <p v-if="ziegelsplit!==''"><span class="bolder" >Zuschlagstoff: </span> Ziegelsplit: {{ziegelsplit}}</p>
    <p v-if="holzkohle!==''"><span class="bolder" >Zuschlagstoff: </span> Holzkohle: {{holzkohle}}</p>
    <p v-if="stroh!==''"><span class="bolder" >Zuschlagstoff: </span> Kiesel: {{stroh}}</p>
    <p v-if="zuschlagstoffe_other!==''"><span class="bolder" >Zuschlagstoff: </span> Sonstige: {{zuschlagstoffe_other}}</p>

    <p v-if="verstrichen || herausgequollen || kellenstrich || fugenbild_other"> <span class="bolder" >Fugenbild: </span>
      <span v-if="verstrichen"> Verstrichen </span>
      <span v-if="herausgequollen"> Herausgequollen </span>
      <span v-if="kellenstrich"> Kellenstrich </span>
      <span v-if="fugenbild_other"> Sonstiges </span>
    </p>

    <p v-if="fugendimension!==''"><span class="bolder" >Fugendimension: </span>{{fugendimension}}</p>

    <p v-if="geglaettet || ueberrieben || riesel || geschlaemmt"> <span class="bolder" >Verputz (sofern nicht separate SE): </span>
      <span v-if="geglaettet"> Geglättet </span>
      <span v-if="ueberrieben"> Überrieben </span>
      <span v-if="riesel"> Riesel </span>
      <span v-if="geschlaemmt"> Geschlämmt </span>
    </p>

    <span class="bolder"> Verputzfarbe: </span> {{verputz_hue}} {{verputz_value}}/{{verputz_chroma}}

    <p v-if="zusammensetzung!==''"><span class="bolder" >Zusammensetzung: </span>{{zusammensetzung}}</p>

    <p v-if="korngroese!==''"><span class="bolder" >Korngröße: </span>{{korngroese}}</p>

    <p v-if="consistency!==''"><span class="bolder" >Konsistenz: </span>{{consistency}}</p>

    <p v-if="zuschlagstoffe!==''"><span class="bolder" >Zuschlagstoffe (in cm): </span>{{zuschlagstoffe}}</p>

    <p v-if="mehrlagigkeit!==''"><span class="bolder" >Mehrlagigkeit: </span>{{mehrlagigkeit}}</p>

    <p v-if="verhaeltnisse!==''"><span class="bolder" >Verhältnisse zu anderen Bauteilen: </span>{{verhaeltnisse}}</p>


      <!--
      <div class="center">
        <ion-button @click="modifyExcavation()">Ausgrabung bearbeiten</ion-button>
      </div> -->
    <hr>
  </div>
</template>

<script>
  import VueCookies from 'vue-cookies'
  import {path} from '../adress.js'
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
  let context
  export default {
    name: 'ExcavationInfo',
    data: function () {
      return {
        objectnumber: '',
        title: '',
        length: '',
        conserved_length: false,
        original_length: false,
        visible_length: false,
        width: '',
        conserved_width: false,
        original_width: false,
        visible_width: false,
        height_am: '',
        conserved_height_am: false,
        original_height_am: false,
        visible_height_am: false,
        height_fm: '',
        conserved_height_fm: false,
        original_height_fm: false,
        visible_height_fm: false,
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
        struktur_lagenhaft: '',
        struktur_kompartimente: '',
        struktur_ausgezwickelt: '',
        struktur_Zwickel: '',
        struktur_Netz: '',
        struktur_keine: '',
        struktur_nicht_erkennbar: '',
        description: '',
        bauschliessen_Form_check: false,
        bauschliessen_Form: '',
        geruestloecher_check: false,
        geruestloecher: '',
        balkenloecher_check: false,
        balkenloecher: '',
        location: '',
        measurements: '',
        characteristics_style: '',
        material_stone: false,
        material_brick: false,
        material_mixed: false,
        material_clay_brick: false,
        material_percentage: '',
        material_stone_size: '',
        material_stone_material: '',
        material_stone_editing: '',
        material_spolien: '',
        wall_brick: '',
        wall_brick_check: false,
        gewoelbebrick: '',
        gewoelbebrick_check: false,
        roof_brick: '',
        roof_brick_check: false,
        fortification_brick: '',
        fortification_brick_check: false,
        brick_stamps: '',
        brick_stamps_check: false,
        brick_fingerstrokes: false,
        brick_animal_footprints: '',
        brick_animal_footprints_check: false,
        moist: false,
        dry: false,
        moertelbindung: '',
        lehmbindung: '',
        bindung_hue: '',
        bindung_chroma: '',
        bindung_value: '',
        sandy: false,
        kalkig: false,
        contents_other_check: false,
        contents_other: '',
        coarse: false,
        fine: false,
        medium: false,
        very_compact: false,
        compact: false,
        loose: false,
        very_loose: false,
        crumbly: false,
        kiesel: '',
        kalkspatzen: '',
        ziegelsplit: '',
        holzkohle: '',
        stroh: '',
        zuschlagstoffe_other: '',
        verstrichen: false,
        herausgequollen: false,
        kellenstrich: false,
        fugenbild_other: false,
        fugendimension: '',
        geglaettet: false,
        ueberrieben: false,
        riesel: false,
        geschlaemmt: false,
        verputz_hue: '',
        verputz_value: '',
        verputz_chroma: '',
        strength: '',
        extension: '',
        brick_hue: '',
        brick_value: '',
        brick_chroma: '',
        zusammensetzung: '',
        korngroese: '',
        consistency: '',
        zuschlagstoffe: '',
        mehrlagigkeit: '',
        verhaeltnisse: '',
        date: '',
        _id: 0,
        _rev: 0
      }
    },
    created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
      console.log(VueCookies.get('currentConstructedObject'))
      context = this
      // context._id = context.$route.params._id
      context._id = VueCookies.get('currentConstructedObject')._id
      constructedObjectsDB.get(context._id).then(function (result) {
        context.objectnumber= result.objectnumber
          context.title = result.title
        context.length= result.length
        //context.length_checks = result.length_checks
        context.conserved_length= result.conserved_length
          context.original_length= result.original_length
          context.visible_length= result.visible_length
        context.  width = result.width
        context.  conserved_width = result.conserved_width
        context. original_width = result.original_width
        context. visible_width = result.visible_width
        context. height_am = result.height_am
        context. conserved_height_am = result.conserved_height_am
        context. original_height_am = result.original_height_am
        context.visible_height_am = result.visible_height_am
        context.height_fm = result.height_fm
        context.conserved_height_fm = result.conserved_height_fm
        context.original_height_fm = result.original_height_fm
        context. visible_height_fm = result.conserved_height_fm
        context.  orientation = result.orientation
        context.  bauart_schalenmauer = result.bauart_schalenmauer
        context. bauart_durchgemauert = result.bauart_durchgemauert
        context.  bauart_gussmauerwerk = result.bauart_gussmauerwerk
        context.  bauart_nicht_erkennbar = result.bauart_nicht_erkennbar
        context.  mauerwerk_quader = result.mauerwerk_quader
        context.  mauerwerk_bruchstein = result.mauerwerk_bruchstein
        context.  mauerwerk_rollstein = result.mauerwerk_rollstein
        context.  mauerwerk_brick = result.mauerwerk_brick
        context.  mauerwerk_mischmauerwerk = result.mauerwerk_mischmauerwerk
        context.  struktur_lagenhaft = result.struktur_lagenhaft
        context.  struktur_kompartimente = result.struktur_kompartimente
        context.  struktur_ausgezwickelt = result.struktur_ausgezwickelt
        context.  struktur_Zwickel = result.struktur_Zwickel
        context.  struktur_Netz = result.struktur_Netz
        context. struktur_keine = result.struktur_keine
        context. struktur_nicht_erkennbar = result.struktur_nicht_erkennbar
        context. description = result.description
        context.  bauschliessen_Form = result.bauschliessen_Form
        context.  bauschliessen_Form_check = result.bauschliessen_Form_check
        context.  geruestloecher = result.geruestloecher
        context.  geruestloecher_check = result.geruestloecher_check
        context.  balkenloecher = result.balkenloecher
        context.  balkenloecher_check = result.balkenloecher_check
        context.  location = result.location
        context.  measurements = result.measurements
        context.  characteristics_style = result.characteristics_style
        context.  material_stone = result.material_stone
        context.  material_brick = result.material_brick
        context.  material_mixed = result.material_mixed
        context.  material_clay_brick = result.material_clay_brick
        context.  material_percentage = result.material_percentage
        context. material_stone_size = result.material_stone_size
        context.  material_stone_material = result.material_stone_material
        context.  material_stone_editing = result.material_stone_editing
        context.  material_spolien = result.material_spolien
        context.  wall_brick = result.wall_brick
        context.  wall_brick_check = result.wall_brick_check
        context.  gewoelbebrick = result.gewoelbebrick
        context.  gewoelbebrick_check = result.gewoelbebrick_check
        context.  roof_brick = result.roof_brick
        context.  roof_brick_check = result.roof_brick_check
        context.  fortification_brick = result.fortification_brick
        context.  fortification_brick_check = result.fortification_brick_check
        context. brick_stamps = result.brick_stamps
        context.  brick_stamps_check = result.brick_stamps_check
        context.  brick_fingerstrokes = result.brick_fingerstrokes
        context.  brick_animal_footprints = result.brick_animal_footprints
        context.  brick_animal_footprints_check = result.brick_animal_footprints_check
        context.  moist = result.moist
        context.  dry = result.dry
        context.  moertelbindung  = result.moertelbindung
        context.  lehmbindung = result.lehmbindung
        context. bindung_hue = result.bindung_hue
        context.  bindung_value = result.bindung_value
        context.  bindung_chroma = result.bindung_chroma
        context.  sandy = result.sandy
        context.  kalkig = result.kalkig
        context.  contents_other = result.contents_other
        context.  contents_other_check = result.contents_other_check
        context.  coarse = result.coarse
        context. fine = result.fine
        context.  medium = result.medium
        context.  very_compact = result.very_compact
        context.  compact = result.compact
        context.  loose = result.loose
        context.  very_loose = result.very_loose
        context.  crumbly = result.crumbly
        context.  kiesel = result.kiesel
        context.  kalkspatzen = result.kalkspatzen
        context.  ziegelsplit = result.ziegelsplit
        context.  holzkohle = result.holzkohle
        context.  stroh = result.stroh
        context.  sonstiges = result.sonstiges
        context.  verstrichen = result.verstrichen
        context.  herausgequollen = result.herausgequollen
        context.  kellenstrich = result.kellenstrich
        context.  fugenbild_other = result.fugenbild_other
        context.  fugendimension = result.fugendimension
        context.  geglaettet = result.geglaettet
        context.  ueberrieben = result.ueberrieben
        context.  riesel = result.riesel
        context.  geschlaemmt = result.geschlaemmt
        context.  verputz_hue = result.verputz_hue
        context.  verputz_value = result.verputz_value
        context.  verputz_chroma = result.verputz_chroma
        context.  strength = result.strength
        context.   extension = result.extension
        context.brick_hue = result.brick_hue
        context.brick_chroma = result.brick_chroma
        context.brick_value = result.brick_value
          //value: this.value,
          //chroma: this.chroma,
        context.  zusammensetzung = result.zusammensetzung
        context.  korngroese = result.korngroese
        context.  consistency = result.consistency
        context.  zuschlagstoffe = result.zuschlagstoffe
        context.  mehrlagigkeit = result.mehrlagigkeit
        context.  verhaeltnisse = result.verhaeltnisse
        context.  date = result.date
      })
      console.log(context)
    },
    methods: {
      modifyExcavation: function () {
        // eslint-disable-next-line standard/object-curly-even-spacing
        this.$router.push({ name: 'ModifyExcavation'})
      }
    }
  }
</script>

<style scoped>
  div.contentContainer{
    text-align: left;
    padding: 10px
  }
  .bolder{
    font-weight: bolder;
  }

  div.center{
    text-align: center
  }

  div.contentContainer h1 {
    text-align: center;
  }
</style>
