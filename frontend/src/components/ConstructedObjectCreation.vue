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

      <ion-list>
        <ion-item v-for="entry in length_checks" v-bind:key="entry.val">
          <ion-label>{{entry.val}}</ion-label>
          <ion-checkbox slot="start" v-on:input="entry.isChecked = $event.target.value" v-bind:value="entry.isChecked"></ion-checkbox>
        </ion-item>
      </ion-list>

      <!--ion-item>
        <ion-label position="stacked">Breite</ion-label>
        <ion-input v-on:ionInput="width=$event.target.value" placeholder="Geben Sie die Breite des Bestands ein" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Erhalten </ion-label>
        <ion-checkbox slot="start" v-on:input="conserved_width = $event.target.value" v-bind:value=conserved_width></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Original </ion-label>
        <ion-checkbox slot="start" v-on:input="original_width = $event.target.value" v-bind:value=original_width></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Sichtbar </ion-label>
        <ion-checkbox slot="start" v-on:input="visible_width = $event.target.value" v-bind:value=visible_width></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Höhe am</ion-label>
        <ion-input v-on:ionInput="height_am=$event.target.value" placeholder="Geben Sie die Höhe am des Bestands ein" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Erhalten </ion-label>
        <ion-checkbox slot="start" v-on:input="conserved_height_am = $event.target.value" v-bind:value="conserved_height_am"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Original </ion-label>
        <ion-checkbox slot="start" v-on:input="original_height_am = $event.target.value" v-bind:value="original_height_am"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Sichtbar </ion-label>
        <ion-checkbox slot="start" v-on:input="visible_height_am = $event.target.value" v-bind:value="visible_height_am"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Höhe fm</ion-label>
        <ion-input v-on:ionInput="height_fm=$event.target.value" placeholder="Geben Sie die Höhe fm des Bestands ein" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Erhalten </ion-label>
        <ion-checkbox slot="start" v-on:input="conserved_height_fm = $event.target.value" v-bind:value="conserved_height_fm"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Original </ion-label>
        <ion-checkbox slot="start" v-on:input="original_height_fm = $event.target.value" v-bind:value="original_height_fm"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Sichtbar </ion-label>
        <ion-checkbox slot="start" v-on:input="visible_height_fm = $event.target.value" v-bind:value="visible_height_fm"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Orientierung</ion-label>
        <ion-input v-on:ionInput="orientation=$event.target.value" placeholder="Geben Sie die Orientierung des Bestands ein" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Bauart:</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Schalenmauer </ion-label>
        <ion-checkbox slot="start" v-on:input="bauart_schalenmauer = $event.target.value" v-bind:value="bauart_schalenmauer"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> durchgemauert </ion-label>
        <ion-checkbox slot="start" v-on:input="bauart_durchgemauert = $event.target.value" v-bind:value="bauart_durchgemauert"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"> Gussmauerwerk </ion-label>
        <ion-checkbox slot="start" v-on:input="bauart_gussmauerwerk = $event.target.value" v-bind:value="bauart_gussmauerwerk"></ion-checkbox>
      </ion-item>


      <ion-item>
        <ion-label position="stacked"> nicht erkennbar </ion-label>
        <ion-checkbox slot="start" v-on:input="bauart_nicht_erkennbar = $event.target.value" v-bind:value="bauart_nicht_erkennbar"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label>Mauwerwerk:</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Quader</ion-label>
        <ion-checkbox slot="start" v-on:input="mauerwerk_quader = $event.target.value" v-bind:value="mauerwerk_quader"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Bruchstein</ion-label>
        <ion-checkbox slot="start" v-on:input="mauerwerk_bruchstein = $event.target.value" v-bind:value="mauerwerk_bruchstein"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Rollstein</ion-label>
        <ion-checkbox slot="start" v-on:input="mauerwerk_rollstein = $event.target.value" v-bind:value="mauerwerk_rollstein"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ziegel</ion-label>
        <ion-checkbox slot="start" v-on:input="mauerwerk_brick = $event.target.value" v-bind:value="mauerwerk_brick"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Mischmauerwerk</ion-label>
        <ion-checkbox slot="start" v-on:input="mauerwerk_mischmauerwerk = $event.target.value" v-bind:value="mauerwerk_mischmauerwerk"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label>Struktur:</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">lagenhaft</ion-label>
        <ion-checkbox slot="start" v-on:input="struktur_lagenhaft = $event.target.value" v-bind:value="struktur_lagenhaft"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Kompartimente/Ausgleichslagen</ion-label>
        <ion-checkbox slot="start" v-on:input="struktur_kompartimente = $event.target.value" v-bind:value="struktur_kompartimente"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">ausgezwickelt</ion-label>
        <ion-checkbox slot="start" v-on:input="struktur_ausgezwickelt = $event.target.value" v-bind:value="struktur_ausgezwickelt"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Zwickel</ion-label>
        <ion-checkbox slot="start" v-on:input="struktur_Zwickel = $event.target.value" v-bind:value="struktur_Zwickel"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Netz</ion-label>
        <ion-checkbox slot="start" v-on:input="struktur_Netz = $event.target.value" v-bind:value="struktur_Netz"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">keine</ion-label>
        <ion-checkbox slot="start" v-on:input="struktur_keine = $event.target.value" v-bind:value="struktur_keine"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">nicht erkennbar</ion-label>
        <ion-checkbox slot="start" v-on:input="struktur_nicht_erkennbar = $event.target.value" v-bind:value="struktur_nicht_erkennbar"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Beschreibung</ion-label>
        <ion-textarea placeholder="Geben Sie hier die Lagen, Lagenhöhe, Mauerschale, Mauerkern und weitere Details an" rows="14" v-on:ionInput="description=$event.target.value"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Bauschließen - Form</ion-label>
        <ion-input v-on:ionInput="bauschliessen_Form=$event.target.value" placeholder="" ></ion-input>
        <ion-checkbox slot="start" v-on:input="bauschliessen_Form_check = $event.target.value" v-bind:value="bauschliessen_Form_check"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Gerüstlöcher</ion-label>
        <ion-input v-on:ionInput="geruestloecher=$event.target.value" placeholder="" ></ion-input>
        <ion-checkbox slot="start" v-on:input="geruestloecher_check = $event.target.value" v-bind:value="geruestloecher_check"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Balkenlöcher</ion-label>
        <ion-input v-on:ionInput="balkenloecher=$event.target.value" placeholder="" ></ion-input>
        <ion-checkbox slot="start" v-on:input="balkenloecher_check = $event.target.value" v-bind:value="balkenloecher_check"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Lage</ion-label>
        <ion-input v-on:ionInput="location=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Maße</ion-label>
        <ion-input v-on:ionInput="measurements=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Architekturelemente/Stilmerkmale</ion-label>
        <ion-textarea placeholder="Geben sie hier auffällige Architekturelemente oder Stilmekrmale an" rows="4" v-on:ionInput="characteristics_style=$event.target.value"></ion-textarea>
      </ion-item>


      <ion-item>
        <ion-label>Material:</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Stein</ion-label>
        <ion-checkbox slot="start" v-on:input="material_stone = $event.target.value" v-bind:value="material_stone"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ziegel</ion-label>
        <ion-checkbox slot="start" v-on:input="material_brick = $event.target.value" v-bind:value="material_brick"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Mischmauerwerk</ion-label>
        <ion-checkbox slot="start" v-on:input="material_mixed = $event.target.value" v-bind:value="material_mixed"></ion-checkbox>
        <ion-input v-on:ionInput="material_percentage=$event.target.value" placeholder="Ziegelanteil in %" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Lehmziegel</ion-label>
        <ion-checkbox slot="start" v-on:input="material_clay_brick = $event.target.value" v-bind:value="material_clay_brick"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Steingröße</ion-label>
        <ion-input v-on:ionInput="material_stone_size=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Steinmaterial</ion-label>
        <ion-input v-on:ionInput="material_stone_material=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Steinbearbeitung</ion-label>
        <ion-input v-on:ionInput="material_stone_editing=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Spolien</ion-label>
        <ion-input v-on:ionInput="material_spolien=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Ziegelart und Ziegelgröße (Originalmaße):</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Mauerziegel</ion-label>
        <ion-checkbox slot="start" v-on:input="wall_brick_check = $event.target.value" v-bind:value="material_clay_brick"></ion-checkbox>
        <ion-input v-on:ionInput="wall_brick=$event.target.value" placeholder="in cm" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Gewölbeziegel</ion-label>
        <ion-checkbox slot="start" v-on:input="gewoelbebrick_check = $event.target.value" v-bind:value="gewoelbebrick_check"></ion-checkbox>
        <ion-input v-on:ionInput="gewoelbebrick=$event.target.value" placeholder="in cm" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Dachziegel</ion-label>
        <ion-checkbox slot="start" v-on:input="roof_brick_check = $event.target.value" v-bind:value="roof_brick_check"></ion-checkbox>
        <ion-input v-on:ionInput="roof_brick=$event.target.value" placeholder="in cm" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Fortifikationsziegel</ion-label>
        <ion-checkbox slot="start" v-on:input="fortification_brick_check = $event.target.value" v-bind:value="fortification_brick_check"></ion-checkbox>
        <ion-input v-on:ionInput="fortification_brick=$event.target.value" placeholder="in cm" ></ion-input>
      </ion-item>

      <div class="munsellWrapperOuter">
        <div class="munsellWrapperInner">

          <ion-label position="stacked">Ziegelfarbe (Munsell-Format, z.B. 10YR 5/4)</ion-label>
          <div>
            <div class="munselInputDiv" id="hueInputDiv">
              <ion-input v-on:ionInput="brick_hue=$event.target.value" placeholder="10YR"></ion-input>
            </div>
            <div class="munselInputDiv" id="valueInputDiv">
              <ion-input v-on:ionInput="brick_value=$event.target.value" placeholder="5"></ion-input>
            </div>
            /
            <div class="munselInputDiv" id="chromaInputDiv">
              <ion-input v-on:ionInput="brick_chroma=$event.target.value" placeholder="4"></ion-input>
            </div>
          </div>
        </div>
      </div>

      <ion-item>
        <ion-label>Herstellungsmerkmale:</ion-label>
      </ion-item>

      <ion-item>
         <ion-input v-on:ionInput="brick_stamps=$event.target.value" placeholder="Zeichen (erhaben, vertieft, Stempel)" ></ion-input>
        <ion-checkbox slot="start" v-on:input="brick_stamps_check = $event.target.value" v-bind:value="brick_stamps_check"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-input v-on:ionInput="brick_animal_footprints=$event.target.value" placeholder="Wischzeichen, Tierspuren, usw." ></ion-input>
        <ion-checkbox slot="start" v-on:input="brick_animal_footprints_check = $event.target.value" v-bind:value="brick_animal_footprints_check"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Fingerstriche</ion-label>
        <ion-checkbox slot="start" v-on:input="brick_fingerstrokes = $event.target.value" v-bind:value="brick_fingerstrokes"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label>Bindung:</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Feucht</ion-label>
        <ion-checkbox slot="start" v-on:input="moist = $event.target.value" v-bind:value="moist"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Trocken</ion-label>
        <ion-checkbox slot="start" v-on:input="dry = $event.target.value" v-bind:value="dry"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Mörtelbindung</ion-label>
        <ion-checkbox slot="start" v-on:input="moertelbindung = $event.target.value" v-bind:value="moertelbindung"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Lehmbindung</ion-label>
        <ion-checkbox slot="start" v-on:input="lehmbindung = $event.target.value" v-bind:value="lehmbindung"></ion-checkbox>
      </ion-item>

      <div class="munsellWrapperOuter">
        <div class="munsellWrapperInner">

          <ion-label position="stacked">Farbe (Munsell-Format, z.B. 10YR 5/4)</ion-label>
          <div>
            <div class="munselInputDiv" id="hueInputDiv">
              <ion-input v-on:ionInput="bindung_hue=$event.target.value" placeholder="10YR"></ion-input>
            </div>
            <div class="munselInputDiv" id="valueInputDiv">
              <ion-input v-on:ionInput="bindung_value=$event.target.value" placeholder="5"></ion-input>
            </div>
            /
            <div class="munselInputDiv" id="chromaInputDiv">
              <ion-input v-on:ionInput="bindung_chroma=$event.target.value" placeholder="4"></ion-input>
            </div>
          </div>
        </div>
      </div>

      <ion-item>
        <ion-label>Zusammensetzung:</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Sandig</ion-label>
        <ion-checkbox slot="start" v-on:input="sandy = $event.target.value" v-bind:value="sandy"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Kalkig</ion-label>
        <ion-checkbox slot="start" v-on:input="kalkig = $event.target.value" v-bind:value="kalkig"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-input v-on:ionInput="contents_other_check=$event.target.value" placeholder="Sonstige Zusammensetzung" ></ion-input>
        <ion-checkbox slot="start" v-on:input="contents_other_check = $event.target.value" v-bind:value="contents_other_check"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label>Korngröße:</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Grob (über 0,5 cm)</ion-label>
        <ion-checkbox slot="start" v-on:input="coarse = $event.target.value" v-bind:value="coarse"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Mittel (bis 0,5 cm)</ion-label>
        <ion-checkbox slot="start" v-on:input="medium = $event.target.value" v-bind:value="medium"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Fein (unter 0,3 cm)</ion-label>
        <ion-checkbox slot="start" v-on:input="fine = $event.target.value" v-bind:value="fine"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label>Konsistenz:</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Sehr fest</ion-label>
        <ion-checkbox slot="start" v-on:input="very_compact = $event.target.value" v-bind:value="very_compact"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Fest</ion-label>
        <ion-checkbox slot="start" v-on:input="compact = $event.target.value" v-bind:value="compact"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Locker</ion-label>
        <ion-checkbox slot="start" v-on:input="loose = $event.target.value" v-bind:value="loose"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Sehr locker</ion-label>
        <ion-checkbox slot="start" v-on:input="very_loosey = $event.target.value" v-bind:value="very_loose"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Bröselig</ion-label>
        <ion-checkbox slot="start" v-on:input="crumbly = $event.target.value" v-bind:value="crumbly"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label>Zuschlagstoffe (in cm):</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Kiesel</ion-label>
        <ion-input v-on:ionInput="kiesel=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Kalkspatzen</ion-label>
        <ion-input v-on:ionInput="kalkspatzen=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ziegelsplitt</ion-label>
        <ion-input v-on:ionInput="ziegelsplit=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Holzkohle</ion-label>
        <ion-input v-on:ionInput="holzkohle=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Stroh</ion-label>
        <ion-input v-on:ionInput="stroh=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Sonstiges</ion-label>
        <ion-input v-on:ionInput="zuschlagstoffe_other=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Fugenbild:</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Verstichen</ion-label>
        <ion-checkbox slot="start" v-on:input="verstrichen = $event.target.value" v-bind:value="verstrichen"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Herausgequollen</ion-label>
        <ion-checkbox slot="start" v-on:input="herausgequollen = $event.target.value" v-bind:value="herausgequollen"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Kellenstrich</ion-label>
        <ion-checkbox slot="start" v-on:input="kellenstrich = $event.target.value" v-bind:value="kellenstrich"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Sonstiges</ion-label>
        <ion-checkbox slot="start" v-on:input="fugenbild_other = $event.target.value" v-bind:value="fugenbild_other"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Fugendimension</ion-label>
        <ion-input v-on:ionInput="fugendimension=$event.target.value" placeholder="" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Verputz (Sofern nicht separate SE):</ion-label>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Geglättet (Kelle)</ion-label>
        <ion-checkbox slot="start" v-on:input="geglaettet = $event.target.value" v-bind:value="geglaettet"></ion-checkbox>
      </ion-item>

      <ion-item>
      <ion-label position="stacked">Überrieben</ion-label>
      <ion-checkbox slot="start" v-on:input="ueberrieben = $event.target.value" v-bind:value="ueberrieben"></ion-checkbox>
    </ion-item>

      <ion-item>
      <ion-label position="stacked">Riesel</ion-label>
      <ion-checkbox slot="start" v-on:input="riesel = $event.target.value" v-bind:value="riesel"></ion-checkbox>
    </ion-item>

      <ion-item>
        <ion-label position="stacked">Geschlämmt</ion-label>
        <ion-checkbox slot="start" v-on:input="geschlaemmt = $event.target.value" v-bind:value="geschlaemmt"></ion-checkbox>
      </ion-item>

      <div class="munsellWrapperOuter">
        <div class="munsellWrapperInner">

          <ion-label position="stacked">Farbe (Munsell-Format, z.B. 10YR 5/4)</ion-label>
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
      </ion-item-->

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
      length_checks: [
        { val: 'Erhalten', isChecked: false },
        { val: 'Original', isChecked: false },
        { val: 'Sichtbar', isChecked: false }
      ],
      //conserved_length: true,
      //original_length: true,
      //visible_length: true,
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
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let constructedobject = {
        _id: this.title + new Date().toISOString(),
        objectnumber: this.objectnumber,
        title: this.title,
        length: this.length,
        length_checks: this.length_checks,
        //conserved_length: this.conserved_length,
        //original_length: this.original_length,
        //visible_length: this.visible_length,
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
      constructedOjectDB.put(constructedobject, function callback (err, result) {
        if (!err) {
          // eslint-disable-next-line standard/object-curly-even-spacing
          router.push({ name: 'ConstructedObjectsOverview'})
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

</style>
