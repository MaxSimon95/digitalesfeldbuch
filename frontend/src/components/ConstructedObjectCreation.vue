<template>
  <div>
    <form>
      <ion-item>
        <ion-label position="stacked">Bestandsnummer</ion-label>
        <ion-input v-on:ionInput="objectnumber=$event.target.value" placeholder="Geben Sie die Kennnummer des Bestands ein"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Name des Bestands</ion-label>
        <ion-input v-on:ionInput="title=$event.target.value" placeholder="Geben Sie die Bezeichnung des Bestands ein" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Länge</ion-label>
        <ion-input v-on:ionInput="length=$event.target.value" placeholder="Geben Sie die Länge des Bestands ein" ></ion-input>
      </ion-item>
      <div class="hasBottomBorder">
        <ion-list>
            <ion-label>Erhalten</ion-label>
            <input type="checkbox" v-model="conserved_length">

            <ion-label>Original</ion-label>
            <input type="checkbox" v-model="original_length">


            <ion-label>Sichtbar</ion-label>
            <input type="checkbox" v-model="visible_length">

      </ion-list>
      </div>

      <ion-item>
        <ion-label position="stacked">Breite</ion-label>
        <ion-input v-on:ionInput="width=$event.target.value" placeholder="Geben Sie die Breite des Bestands ein" ></ion-input>
      </ion-item>
      <div class="hasBottomBorder">
      <ion-list>

          <ion-label>Erhalten</ion-label>
          <input type="checkbox" v-model="conserved_width">



          <ion-label>Original</ion-label>
          <input type="checkbox" v-model="original_width">



          <ion-label>Sichtbar</ion-label>
          <input type="checkbox" v-model="visible_width">

      </ion-list>
      </div>

      <ion-item>
        <ion-label position="stacked">Höhe am</ion-label>
        <ion-input v-on:ionInput="height_am=$event.target.value" placeholder="Geben Sie die Höhe am des Bestands ein" ></ion-input>
      </ion-item>
      <div class="hasBottomBorder">
      <ion-list>

          <ion-label>Erhalten</ion-label>
          <input type="checkbox" v-model="conserved_height_am">



          <ion-label>Original</ion-label>
          <input type="checkbox" v-model="original_height_am">



          <ion-label>Sichtbar</ion-label>
          <input type="checkbox" v-model="visible_height_am">

      </ion-list>
      </div>

      <ion-item>
        <ion-label position="stacked">Höhe fm</ion-label>
        <ion-input v-on:ionInput="height_fm=$event.target.value" placeholder="Geben Sie die Höhe fm des Bestands ein" ></ion-input>
      </ion-item>
<div class="hasBottomBorder">
      <ion-list>

          <ion-label>Erhalten</ion-label>
          <input type="checkbox" v-model="conserved_height_fm">



          <ion-label>Original</ion-label>
          <input type="checkbox" v-model="original_height_fm">



          <ion-label>Sichtbar</ion-label>
          <input type="checkbox" v-model="visible_height_fm">


      </ion-list>
</div>


      <ion-item>
        <ion-label position="stacked">Orientierung</ion-label>
        <ion-input v-on:ionInput="orientation=$event.target.value" placeholder="Geben Sie die Orientierung des Bestands ein" ></ion-input>
      </ion-item>
      <div class="hasBottomBorder"> </div>




      <div class="hasBottomBorder">
        <ion-label position="stacked">Bauart:</ion-label>
        <ion-list>

          <span class="noLineBreak">
        <ion-label>Schalenmauer</ion-label>
        <input type="checkbox" v-model="bauart_schalenmauer">

          </span><span class="noLineBreak">
        <ion-label>Durchgemäuert</ion-label>
        <input type="checkbox" v-model="bauart_durchgemauert">
</span><span class="noLineBreak">
        <ion-label>Gussmauerwerk</ion-label>
        <input type="checkbox" v-model="bauart_gussmauerwerk">
</span><span class="noLineBreak">

        <ion-label>Nicht erkennbar</ion-label>
        <input type="checkbox" v-model="bauart_nicht_erkennbar">
          </span>
        </ion-list>
      </div>
      <div class="hasBottomBorder">

        <ion-label position="stacked">Mauerwerk:</ion-label>
        <ion-list>
          <span class="noLineBreak">
        <ion-label>Quader</ion-label>
        <input type="checkbox" v-model="mauerwerk_quader">
          </span><span class="noLineBreak">

        <ion-label>Bruchstein</ion-label>
        <input type="checkbox" v-model="mauerwerk_bruchstein">
</span><span class="noLineBreak">
        <ion-label>Rollstein</ion-label>
        <input type="checkbox" v-model="mauerwerk_rollstein">
</span><span class="noLineBreak">
        <ion-label>Ziegel</ion-label>
        <input type="checkbox" v-model="mauerwerk_brick">
</span><span class="noLineBreak">
        <ion-label>Mischmauerwerk</ion-label>
        <input type="checkbox" v-model="mauerwerk_mischmauerwerk">
          </span>
        </ion-list>
      </div>

      <div class="hasBottomBorder">
        <ion-label position="stacked">Struktur:</ion-label>
      <ion-list>

        <span class="noLineBreak">
        <ion-label>Lagenhaft</ion-label>
        <input type="checkbox" v-model="struktur_lagenhaft">
          </span>

        <span class="noLineBreak">
        <ion-label>Kompartimente</ion-label>
        <input type="checkbox" v-model="struktur_kompartimente">
          </span>

          <span class="noLineBreak">
        <ion-label>Ausgezwickelt</ion-label>
        <input type="checkbox" v-model="struktur_ausgezwickelt">
            </span>

            <span class="noLineBreak">
        <ion-label>Zwickel</ion-label>
        <input type="checkbox" v-model="struktur_Zwickel">
              </span>

              <span class="noLineBreak">
        <ion-label>Netz</ion-label>
        <input type="checkbox" v-model="struktur_Netz">
                </span>

                <span class="noLineBreak">
        <ion-label>Keine Struktur</ion-label>
        <input type="checkbox" v-model="struktur_keine">
                  </span>

                  <span class="noLineBreak">
        <ion-label>Nicht erkennbar</ion-label>
        <input type="checkbox" v-model="struktur_nicht_erkennbar">
                    </span>
      </ion-list>
      </div>

      <ion-item>
        <ion-label position="stacked">Beschreibung</ion-label>
        <ion-textarea placeholder="Geben Sie hier die Lagen, Lagenhöhe, Mauerschale, Mauerkern und weitere Details an" rows="14" v-on:ionInput="description=$event.target.value"></ion-textarea>
      </ion-item>

      <div class="hasNoBottomBorder">
        <ion-label position="stacked">Bauschließen - Form:</ion-label>
        <input type="checkbox" v-model="bauschliessen_Form_check">
      <div v-if="bauschliessen_Form_check">
        <ion-label position="stacked">Beschreibung</ion-label>
        <ion-input v-on:ionInput="bauschliessen_Form=$event.target.value" placeholder="Hier können Sie die Bauschließen-Form näher beschreiben" ></ion-input>

      </div>

      </div>

      <div class="hasNoBottomBorder">
        <ion-label position="stacked">Gerüstlöcher</ion-label>
        <input type="checkbox" v-model="geruestloecher_check">
        <div v-if="geruestloecher_check">
        <ion-label position="stacked">Beschreibung</ion-label>
        <ion-input v-on:ionInput="geruestloecher=$event.target.value" placeholder="Hier können Sie die Gerüstlöcher näher beschreiben" ></ion-input>
        </div>
      </div>

      <div class="hasBottomBorder">
        <ion-label position="stacked">Balkenlöcher</ion-label>
        <input type="checkbox" v-model="balkenloecher_check">
        <div v-if="balkenloecher_check">
          <ion-label position="stacked">Beschreibung</ion-label>
        <ion-input v-on:ionInput="balkenloecher=$event.target.value" placeholder="Hier können Sie die Balkenlöcher näher beschreiben" ></ion-input>
        </div>
      </div>

      <ion-item>
        <ion-label position="stacked">Lage</ion-label>
        <ion-input v-on:ionInput="location=$event.target.value" placeholder="Geben Sie hier die Lage an" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Maße</ion-label>
        <ion-input v-on:ionInput="measurements=$event.target.value" placeholder="Geben Sie hier die Maße an" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Architekturelemente/Stilmerkmale</ion-label>
        <ion-textarea placeholder="Geben sie hier auffällige Architekturelemente oder Stilmerkmale an" rows="4" v-on:ionInput="characteristics_style=$event.target.value"></ion-textarea>
      </ion-item>


      <div class="hasNoBottomBorder">
        <ion-label position="stacked">Material:</ion-label>
      </div>

      <!-- <div class="hasNoBottomBorder">
        <ion-label position="stacked">Gerüstlöcher</ion-label>
        <input type="checkbox" v-model="geruestloecher_check">
        <div v-if="geruestloecher_check">
        <ion-label position="stacked">Beschreibung</ion-label>
        <ion-input v-on:ionInput="geruestloecher=$event.target.value" placeholder="Hier können Sie die Gerüstlöcher näher beschreiben" ></ion-input>
        </div>
      </div>-->

      <div class="hasNoBottomBorder">
        <ion-label>Stein</ion-label>
        <input type="checkbox" v-model="material_stone">
      </div>

      <div class="hasNoBottomBorder">
        <ion-label >Ziegel</ion-label>
        <input type="checkbox" v-model="material_brick">
      </div>

      <div class="hasNoBottomBorder">
        <ion-label >Mischmauerwerk</ion-label>
        <input type="checkbox" v-model="material_mixed">
        <div v-if="material_mixed">
        <ion-input v-on:ionInput="material_percentage=$event.target.value" placeholder="Geben Sie Hier den Ziegelanteil in % an" ></ion-input>
        </div>
      </div>

      <div class="hasBottomBorder">
        <ion-label >Lehmziegel</ion-label>
        <input type="checkbox" v-model="material_clay_brick">
      </div>

      <ion-item v-if="material_stone">
        <ion-label position="stacked">Steingröße</ion-label>
        <ion-input v-on:ionInput="material_stone_size=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item v-if="material_stone">
        <ion-label position="stacked">Steinmaterial</ion-label>
        <ion-input v-on:ionInput="material_stone_material=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item v-if="material_stone">
        <ion-label position="stacked">Steinbearbeitung</ion-label>
        <ion-input v-on:ionInput="material_stone_editing=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <div class="hasBottomBorder" v-if="material_stone">
        <ion-label position="stacked">Spolien</ion-label>
        <ion-input v-on:ionInput="material_spolien=$event.target.value" placeholder="" ></ion-input>
      </div>

      <ion-item v-if="material_brick || material_clay_brick || material_mixed">
        <ion-label>Ziegelart und Ziegelgröße (Originalmaße):</ion-label>
      </ion-item>

      <div v-if="material_brick || material_clay_brick || material_mixed" class="hasNoBottomBorder">
        <ion-label position="stacked">Mauerziegel</ion-label>
        <input type="checkbox" v-model="wall_brick_check">
        <ion-input v-if="wall_brick_check" v-on:ionInput="wall_brick=$event.target.value" placeholder="Hier Ziegelgröße in cm angeben" ></ion-input>
      </div>

      <div v-if="material_brick || material_clay_brick || material_mixed" class="hasNoBottomBorder">
        <ion-label position="stacked">Gewölbeziegel</ion-label>
        <input type="checkbox" v-model="gewoelbebrick_check">
        <ion-input v-if="gewoelbebrick_check" v-on:ionInput="gewoelbebrick=$event.target.value" placeholder="Hier Ziegelgröße in cm angeben" ></ion-input>
      </div>

      <div v-if="material_brick || material_clay_brick || material_mixed" class="hasNoBottomBorder">
        <ion-label position="stacked">Dachziegel</ion-label>
        <input type="checkbox" v-model="roof_brick_check">
        <ion-input v-if="roof_brick_check" v-on:ionInput="roof_brick=$event.target.value" placeholder="Hier Ziegelgröße in cm angeben" ></ion-input>
      </div>

      <div v-if="material_brick || material_clay_brick || material_mixed" class="hasNoBottomBorder">
        <ion-label position="stacked">Fortifikationsziegel</ion-label>
        <input type="checkbox" v-model="fortification_brick_check">
        <ion-input v-if="fortification_brick_check" v-on:ionInput="fortification_brick=$event.target.value" placeholder="Hier Ziegelgröße in cm angeben" ></ion-input>
      </div>

      <div v-if="material_brick || material_clay_brick || material_mixed" class="munsellWrapperOuter">
        <div class="munsellWrapperInner">

          <ion-label position="stacked">Ziegelfarbe (Munsell-Format, z.B. 10YR 5/4)</ion-label>
          <div>
            <div class="munselInputDiv" id="hueInputDiv1">
              <ion-input v-on:ionInput="brick_hue=$event.target.value" placeholder="10YR"></ion-input>
            </div>
            <div class="munselInputDiv" id="valueInputDiv1">
              <ion-input v-on:ionInput="brick_value=$event.target.value" placeholder="5"></ion-input>
            </div>
            /
            <div class="munselInputDiv" id="chromaInputDiv1">
              <ion-input v-on:ionInput="brick_chroma=$event.target.value" placeholder="4"></ion-input>
            </div>
          </div>
        </div>
      </div>

      <ion-item>
        <ion-label>Herstellungsmerkmale:</ion-label>
      </ion-item>

      <div class="hasNoBottomBorder">
        <ion-label position="stacked">Zeichen (erhaben, vertieft, Stempel)</ion-label>
        <input type="checkbox" v-model="brick_stamps_check">
         <ion-input v-if="brick_stamps_check" v-on:ionInput="brick_stamps=$event.target.value" placeholder="Hier Zeichen beschreiben" ></ion-input>

      </div>

      <div class="hasNoBottomBorder">
        <ion-label position="stacked">Tierspuren (Wischzeichen, Pfotenabdrücke, usw.)</ion-label>
        <input type="checkbox" v-model="brick_animal_footprints_check">
        <ion-input v-if="brick_animal_footprints_check" v-on:ionInput="brick_animal_footprints=$event.target.value" placeholder="Hier Tierspuren beschreiben" ></ion-input>
      </div>

      <div class="hasBottomBorder">
        <ion-label position="stacked">Fingerstriche</ion-label>
        <input type="checkbox" v-model="brick_fingerstrokes">
      </div>

      <ion-item>
        <ion-label>Bindung:</ion-label>
      </ion-item>

<div class="hasNoBottomBorder">
<span class="noLineBreak">
        <ion-label position="stacked">Feucht</ion-label>
        <input type="checkbox" v-model="moist">
</span><span class="noLineBreak">

        <ion-label position="stacked">Trocken</ion-label>
        <input type="checkbox" v-model="dry">
</span><span class="noLineBreak">
        <ion-label position="stacked">Mörtelbindung</ion-label>
        <input type="checkbox" v-model="moertelbindung">
</span><span class="noLineBreak">
        <ion-label position="stacked">Lehmbindung</ion-label>
        <input type="checkbox" v-model="lehmbindung">
  </span>
</div>
      <div v-if="moist || dry || moertelbindung || lehmbindung" class="munsellWrapperOuter hasBottomBorder">
        <div class="munsellWrapperInner">

          <ion-label position="stacked">Farbe der Bindung (Munsell-Format, z.B. 10YR 5/4)</ion-label>
          <div>
            <div class="munselInputDiv" id="hueInputDiv2">
              <ion-input v-on:ionInput="bindung_hue=$event.target.value" placeholder="10YR"></ion-input>
            </div>
            <div class="munselInputDiv" id="valueInputDiv2">
              <ion-input v-on:ionInput="bindung_value=$event.target.value" placeholder="5"></ion-input>
            </div>
            /
            <div class="munselInputDiv" id="chromaInputDiv2">
              <ion-input v-on:ionInput="bindung_chroma=$event.target.value" placeholder="4"></ion-input>
            </div>
          </div>
        </div>
      </div>

      <ion-item>
        <ion-label>Zusammensetzung:</ion-label>
      </ion-item>

      <div class="hasNoBottomBorder">
        <ion-label position="stacked">Sandig</ion-label>
        <input type="checkbox" v-model="sandy">
      </div>

      <div class="hasNoBottomBorder">
        <ion-label position="stacked">Kalkig</ion-label>
        <input type="checkbox" v-model="kalkig">
      </div>

      <div class="hasBottomBorder">
        <ion-label position="stacked">Sonstige Zusammensetzung</ion-label>
        <input type="checkbox" v-model="contents_other_check">
        <ion-input v-if="contents_other_check" v-on:ionInput="contents_other_check=$event.target.value" placeholder="Sonstige Zusammensetzung hier beschreiben" ></ion-input>
      </div>

      <ion-item>
        <ion-label>Korngröße:</ion-label>
      </ion-item>
      <div class="hasBottomBorder">
        <span class="noLineBreak">
        <ion-label position="stacked">Grob (über 0,5 cm)</ion-label>
        <input type="checkbox" v-model="coarse">
</span><span class="noLineBreak">

        <ion-label position="stacked">Mittel (bis 0,5 cm)</ion-label>
        <input type="checkbox" v-model="medium">
</span><span class="noLineBreak">
        <ion-label position="stacked">Fein (unter 0,3 cm)</ion-label>
        <input type="checkbox" v-model="fine">
        </span>

      </div>
      <ion-item>
        <ion-label>Konsistenz:</ion-label>
      </ion-item>

      <div class="hasBottomBorder">
        <span class="noLineBreak">
        <ion-label position="stacked">Sehr fest</ion-label>
        <input type="checkbox" v-model="very_compact">
</span><span class="noLineBreak">
        <ion-label position="stacked">Fest</ion-label>
        <input type="checkbox" v-model="compact">

</span><span class="noLineBreak">
        <ion-label position="stacked">Locker</ion-label>
        <input type="checkbox" v-model="loose">
</span><span class="noLineBreak">
        <ion-label position="stacked">Sehr locker</ion-label>
        <input type="checkbox" v-model="very_loose">
</span><span class="noLineBreak">
        <ion-label position="stacked">Bröselig</ion-label>
        <input type="checkbox" v-model="crumbly">
        </span>
      </div>

      <ion-item>
        <ion-label>Zuschlagstoffe (in cm):</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Kiesel</ion-label>
        <ion-input v-on:ionInput="kiesel=$event.target.value" placeholder="Hier Angaben in cm tätigen." ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Kalkspatzen</ion-label>
        <ion-input v-on:ionInput="kalkspatzen=$event.target.value" placeholder="Hier Angaben in cm tätigen." ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ziegelsplitt</ion-label>
        <ion-input v-on:ionInput="ziegelsplit=$event.target.value" placeholder="Hier Angaben in cm tätigen." ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Holzkohle</ion-label>
        <ion-input v-on:ionInput="holzkohle=$event.target.value" placeholder="Hier Angaben in cm tätigen." ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Stroh</ion-label>
        <ion-input v-on:ionInput="stroh=$event.target.value" placeholder="Hier Angaben in cm tätigen." ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Sonstiges</ion-label>
        <ion-input v-on:ionInput="zuschlagstoffe_other=$event.target.value" placeholder="Hier Angaben in cm tätigen." ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Fugenbild:</ion-label>
      </ion-item>

      <div class="hasNoBottomBorder">
        <span class="noLineBreak">
        <ion-label position="stacked">Verstichen</ion-label>
        <input type="checkbox" v-model="verstrichen">
</span><span class="noLineBreak">

        <ion-label position="stacked">Herausgequollen</ion-label>
        <input type="checkbox" v-model="herausgequollen">
</span><span class="noLineBreak">
        <ion-label position="stacked">Kellenstrich</ion-label>
        <input type="checkbox" v-model="kellenstrich">
</span><span class="noLineBreak">
        <ion-label position="stacked">Sonstiges</ion-label>
        <input type="checkbox" v-model="fugenbild_other">
        </span>
      </div>

      <ion-item>
        <ion-label position="stacked">Fugendimension</ion-label>
        <ion-input v-on:ionInput="fugendimension=$event.target.value" placeholder="Hier die Fugendimension angeben." ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Verputz (Sofern nicht separate SE):</ion-label>
      </ion-item>

      <div class="hasNoBottomBorder">
        <span class="noLineBreak">
        <ion-label position="stacked">Geglättet (Kelle)</ion-label>
        <input type="checkbox" v-model="geglaettet">
</span><span class="noLineBreak">
      <ion-label position="stacked">Überrieben</ion-label>
        <input type="checkbox" v-model="ueberrieben">
</span><span class="noLineBreak">
      <ion-label position="stacked">Riesel</ion-label>
        <input type="checkbox" v-model="riesel">
</span><span class="noLineBreak">
        <ion-label position="stacked">Geschlämmt</ion-label>
        <input type="checkbox" v-model="geschlaemmt">
        </span>
      </div>

      <div class="munsellWrapperOuter">
        <div class="munsellWrapperInner">

          <ion-label position="stacked">Farbe Verputz (Munsell-Format, z.B. 10YR 5/4)</ion-label>
          <div>
            <div class="munselInputDiv" id="hueInputDiv">
              <ion-input v-on:ionInput="verputz_hue=$event.target.value" placeholder="10YR"></ion-input>
            </div>
            <div class="munselInputDiv" id="valueInputDiv">
              <ion-input v-on:ionInput="verputz_value=$event.target.value" placeholder="5"></ion-input>
            </div>
            /
            <div class="munselInputDiv" id="chromaInputDiv">
              <ion-input v-on:ionInput="verputz_chroma=$event.target.value" placeholder="4"></ion-input>
            </div>
          </div>
        </div>
      </div>

      <ion-item>
        <ion-label position="stacked">Zusammensetzung</ion-label>
        <ion-input v-on:ionInput="zusammensetzung=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Korngröße</ion-label>
        <ion-input v-on:ionInput="korngroese=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Konsistenz</ion-label>
        <ion-input v-on:ionInput="consistency=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Zuschlagstoffe(in cm)</ion-label>
        <ion-input v-on:ionInput="zuschlagstoffe=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Mehrlagigkeit</ion-label>
        <ion-input v-on:ionInput="mehrlagigkeit=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Verhältnisse zu anderen Bauteilen</ion-label>
        <ion-textarea placeholder="" rows="4" v-on:ionInput="verhaeltnisse=$event.target.value"></ion-textarea>
      </ion-item>

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
      objectnumber: '',
      title: '',
      length: '',
      conserved_length: true,
      original_length: true,
      visible_length: true,
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
      date: ''

    }

  },
  methods: {
    length_check: function (isEntryChecked,targetValue)
{
  console.log("Bingo bongo bango: " + isEntryChecked )
  console.log(targetValue )
  console.log(targetValue.value.aria_checked )
  console.log(targetValue.class )
},

  goBack: function () {
    // eslint-disable-next-line standard/object-curly-even-spacing
    this.$router.push({name: 'ConstructedObjectsOverview'})
  },
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let constructedobject = {
        _id: this.title + new Date().toISOString(),
        objectnumber: this.objectnumber,
        title: this.title,
        length: this.length,
        //length_checks: this.length_checks,
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
        struktur_lagenhaft: this.struktur_lagenhaft,
        struktur_kompartimente: this.struktur_kompartimente,
        struktur_ausgezwickelt: this.struktur_ausgezwickelt,
        struktur_Zwickel: this.struktur_Zwickel,
        struktur_Netz: this.struktur_Netz,
        struktur_keine: this.struktur_keine,
        struktur_nicht_erkennbar: this.struktur_nicht_erkennbar,
        description: this.description,
        bauschliessen_Form: this.bauschliessen_Form,
        bauschliessen_Form_check: this.bauschliessen_Form_check,
        geruestloecher: this.geruestloecher,
        geruestloecher_check: this.geruestloecher_check,
        balkenloecher: this.balkenloecher,
        balkenloecher_check: this.balkenloecher_check,
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
        wall_brick_check: this.wall_brick_check,
        gewoelbebrick: this.gewoelbebrick,
        gewoelbebrick_check: this.gewoelbebrick_check,
        roof_brick: this.roof_brick,
        roof_brick_check: this.roof_brick_check,
        fortification_brick: this.fortification_brick,
        fortification_brick_check: this.fortification_brick_check,
        brick_stamps: this.brick_stamps,
        brick_stamps_check: this.brick_stamps_check,
        brick_fingerstrokes: this.brick_fingerstrokes,
        brick_animal_footprints: this.brick_animal_footprints,
        brick_animal_footprints_check: this.brick_animal_footprints_check,
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
        contents_other_check: this.contents_other_check,
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
        brick_hue: this.brick_hue,
        brick_value: this.brick_value,
        brick_chroma: this.brick_chroma,
        zusammensetzung: this.zusammensetzung,
        korngroese: this.korngroese,
        consistency: this.consistency,
        zuschlagstoffe: this.zuschlagstoffe,
        mehrlagigkeit: this.mehrlagigkeit,
        verhaeltnisse: this.verhaeltnisse,
        date: this.date
      }
      constructedOjectDB.put(constructedobject, function callback (err, result) {
        if (!err) {
          // eslint-disable-next-line standard/object-curly-even-spacing
          //router.push({ name: 'ConstructedObjectsOverview'})
          router.push({ name: 'Home'})
        }
      })
    }
  }
}
</script>

<style scoped>

  .munsellWrapperOuter{
    text-align: left;
    padding-left: 16px;
    margin-top:15px;
  }

  .munsellWrapperInner{
    border-bottom: solid 1px #d0ced0;
  }

  .munselInputDiv{
    display: inline-block;
    width: 75px;
  }

  #valueInputDiv, #chromaInputDiv{
    text-align: center;
  }

  .hasBottomBorder{
    border-bottom: solid 1px grey;
    text-align: left;
    padding-left: 16px;
    padding-bottom: 12px
  }

  .hasNoBottomBorder{
    text-align: left;
    padding-left: 16px;
  }

  input[type=checkbox]{
    margin-right: 25px;
    margin-top: 10px;
    margin-left: 8px;
    -ms-transform: scale(2); /* IE */
    -moz-transform: scale(2); /* FF */
    -webkit-transform: scale(2); /* Safari and Chrome */
    -o-transform: scale(2); /* Opera */
    transform: scale(2);
    padding: 10px;
  }

  span.noLineBreak{
    white-space:nowrap;
  }
</style>
