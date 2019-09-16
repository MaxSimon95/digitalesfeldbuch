<template>
  <div>
    <h1>Befund bearbeiten</h1>
  <form>
    <ion-item>
      <ion-label position="stacked">Befundnummer (SE)</ion-label>
      <ion-input v-on:ionInput="structurenumber=$event.target.value" :value=structurenumber ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Bestandsnummer</ion-label>
      <ion-input v-on:ionInput="objectnumber=$event.target.value" :value=objectnumber ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Name des Bestands</ion-label>
      <ion-input v-on:ionInput="title=$event.target.value" :value=title></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Länge</ion-label>
      <ion-input v-on:ionInput="length=$event.target.value" :value=length></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked"> Erhalten </ion-label>
      <ion-checkbox slot="start" v-on:input="conserved_length = $event.target.value" v-bind:value="conserved_length"></ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-label position="stacked"> Original </ion-label>
      <ion-checkbox slot="start" v-on:input="original_length = $event.target.value" v-bind:value="original_length"></ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-label position="stacked"> Sichtbar </ion-label>
      <ion-checkbox slot="start" v-on:input="visible_length = $event.target.value" v-bind:value="visible_length"></ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Breite</ion-label>
      <ion-input v-on:ionInput="width=$event.target.value" :value=width></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked"> Erhalten </ion-label>
      <ion-checkbox slot="start" v-on:input="conserved_width = $event.target.value" v-bind:value="conserved_width"></ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-label position="stacked"> Original </ion-label>
      <ion-checkbox slot="start" v-on:input="original_width = $event.target.value" v-bind:value="original_width"></ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-label position="stacked"> Sichtbar </ion-label>
      <ion-checkbox slot="start" v-on:input="visible_width = $event.target.value" v-bind:value="visible_width"></ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Höhe am</ion-label>
      <ion-input v-on:ionInput="height_am=$event.target.value" :value=height_am ></ion-input>
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
      <ion-input v-on:ionInput="height_fm=$event.target.value" :value=height_fm></ion-input>
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
      <ion-input v-on:ionInput="orientation=$event.target.value" :value=orientation ></ion-input>
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
      <ion-textarea  rows="14" v-on:ionInput="description=$event.target.value" :value=description></ion-textarea>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Bauschließen - Form</ion-label>
      <ion-input v-on:ionInput="bauschliessen_Form=$event.target.value"  ></ion-input>
      <ion-checkbox slot="start" v-on:input="bauschliessen_Form_check = $event.target.value" v-bind:value="bauschliessen_Form_check"></ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Gerüstlöcher</ion-label>
      <ion-input v-on:ionInput="geruestloecher=$event.target.value"  ></ion-input>
      <ion-checkbox slot="start" v-on:input="geruestloecher_check = $event.target.value" v-bind:value="geruestloecher_check"></ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Balkenlöcher</ion-label>
      <ion-input v-on:ionInput="balkenloecher=$event.target.value"  ></ion-input>
      <ion-checkbox slot="start" v-on:input="balkenloecher_check = $event.target.value" v-bind:value="balkenloecher_check"></ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Lage</ion-label>
      <ion-input v-on:ionInput="location=$event.target.value" :value=location ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Maße</ion-label>
      <ion-input v-on:ionInput="measurements=$event.target.value" :value=measurements ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Architekturelemente/Stilmerkmale</ion-label>
      <ion-textarea  rows="4" v-on:ionInput="characteristics_style=$event.target.value" :value=characteristics_style></ion-textarea>
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
      <ion-input v-on:ionInput="material_percentage=$event.target.value" :value=material_percentage></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Lehmziegel</ion-label>
      <ion-checkbox slot="start" v-on:input="material_clay_brick = $event.target.value" v-bind:value="material_clay_brick"></ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Steingröße</ion-label>
      <ion-input v-on:ionInput="material_stone_size=$event.target.value" :value=material_stone_size ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Steinmaterial</ion-label>
      <ion-input v-on:ionInput="material_stone_material=$event.target.value" :value=material_stone_material ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Steinbarbeitung</ion-label>
      <ion-input v-on:ionInput="material_stone_editing=$event.target.value" :value=material_stone_editing ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Spolien</ion-label>
      <ion-input v-on:ionInput="material_spolien=$event.target.value" :value=material_spolien ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>Ziegelart und Ziegelgröße (Originalmaße):</ion-label>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Mauerziegel</ion-label>
      <ion-checkbox slot="start" v-on:input="wall_brick_check = $event.target.value" v-bind:value="material_clay_brick"></ion-checkbox>
      <ion-input v-on:ionInput="wall_brick=$event.target.value" :value=wall_brick ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Gewölbeziegel</ion-label>
      <ion-checkbox slot="start" v-on:input="gewoelbebrick_check = $event.target.value" v-bind:value="gewoelbebrick_check"></ion-checkbox>
      <ion-input v-on:ionInput="gewoelbebrick=$event.target.value" :value=gewoelbebrick ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Dachziegel</ion-label>
      <ion-checkbox slot="start" v-on:input="roof_brick_check = $event.target.value" v-bind:value="roof_brick_check"></ion-checkbox>
      <ion-input v-on:ionInput="roof_brick=$event.target.value" :value=roof_brick ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Fortifikationsziegel</ion-label>
      <ion-checkbox slot="start" v-on:input="fortification_brick_check = $event.target.value" v-bind:value="fortification_brick_check"></ion-checkbox>
      <ion-input v-on:ionInput="fortification_brick=$event.target.value" :value=fortification_brick></ion-input>
    </ion-item>

    <div class="munsellWrapperOuter">
      <div class="munsellWrapperInner">

        <ion-label position="stacked">Ziegelfarbe (Munsell-Format, z.B. 10YR 5/4)</ion-label>
        <!--<ion-label position="stacked">Hue: (z.B. 10.0PB)</ion-label>-->
        <div>
          <div class="munselInputDiv" id="hueInputDiv">
            <ion-input v-on:ionInput="brick_hue=$event.target.value" :value=brick_hue></ion-input>
          </div>
          <!--<ion-label position="stacked">Value (z.B. 5.00):</ion-label>-->
          <div class="munselInputDiv" id="valueInputDiv">
            <ion-input v-on:ionInput="brick_value=$event.target.value" :value=brick_value></ion-input>
          </div>
          <!--<ion-label position="stacked">Chroma (z.B. 8.00):</ion-label>-->
          /
          <div class="munselInputDiv" id="chromaInputDiv">
            <ion-input v-on:ionInput="brick_chroma=$event.target.value" :value=brick_chroma></ion-input>
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
        <!--<ion-label position="stacked">Hue: (z.B. 10.0PB)</ion-label>-->
        <div>
          <div class="munselInputDiv" id="hueInputDiv">
            <ion-input v-on:ionInput="bindung_hue=$event.target.value" :value=bindung_hue></ion-input>
          </div>
          <!--<ion-label position="stacked">Value (z.B. 5.00):</ion-label>-->
          <div class="munselInputDiv" id="valueInputDiv">
            <ion-input v-on:ionInput="bindung_value=$event.target.value" :value=bindung_value></ion-input>
          </div>
          <!--<ion-label position="stacked">Chroma (z.B. 8.00):</ion-label>-->
          /
          <div class="munselInputDiv" id="chromaInputDiv">
            <ion-input v-on:ionInput="bindung_chroma=$event.target.value" :value=bindung_chroma></ion-input>
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
      <!--ion-label position="stacked">Sonstige:</ion-label-->
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
      <ion-input v-on:ionInput="kiesel=$event.target.value"  :value=kiesel></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Kalkspatzen</ion-label>
      <ion-input v-on:ionInput="kalkspatzen=$event.target.value" :value=kalkspatzen ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Ziegelsplitt</ion-label>
      <ion-input v-on:ionInput="ziegelsplit=$event.target.value" :value=ziegelsplit ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Holzkohle</ion-label>
      <ion-input v-on:ionInput="holzkohle=$event.target.value" :value=holzkohle ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Stroh</ion-label>
      <ion-input v-on:ionInput="stroh=$event.target.value" :value=stroh ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Sonstiges</ion-label>
      <ion-input v-on:ionInput="zuschlagstoffe_other=$event.target.value" :value=zuschlagstoffe_other ></ion-input>
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
      <ion-input v-on:ionInput="fugendimension=$event.target.value" :value=fugendimension ></ion-input>
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
        <!--<ion-label position="stacked">Hue: (z.B. 10.0PB)</ion-label>-->
        <div>
          <div class="munselInputDiv" id="hueInputDiv">
            <ion-input v-on:ionInput="verputz_hue=$event.target.value" :value=verputz_hue></ion-input>
          </div>
          <!--<ion-label position="stacked">Value (z.B. 5.00):</ion-label>-->
          <div class="munselInputDiv" id="valueInputDiv">
            <ion-input v-on:ionInput="verputz_value=$event.target.value" :value=verputz_value></ion-input>
          </div>
          <!--<ion-label position="stacked">Chroma (z.B. 8.00):</ion-label>-->
          /
          <div class="munselInputDiv" id="chromaInputDiv">
            <ion-input v-on:ionInput="verputz_chroma=$event.target.value" :value=verputz_chroma></ion-input>
          </div>
        </div>
      </div>
    </div>

    <ion-item>
      <ion-label position="stacked">Zusammensetzung</ion-label>
      <ion-input v-on:ionInput="zusammensetzung=$event.target.value" :value=zusammensetzung></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Korngröße</ion-label>
      <ion-input v-on:ionInput="korngroese=$event.target.value" :value=korngroese ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Konsistenz</ion-label>
      <ion-input v-on:ionInput="consistency=$event.target.value" :value=consistency ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Zuschlagstoffe(in cm)</ion-label>
      <ion-input v-on:ionInput="zuschlagstoffe=$event.target.value" :value=zuschlagstoffe ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Mehrlagigkeit</ion-label>
      <ion-input v-on:ionInput="mehrlagigkeit=$event.target.value" :value=mehrlagigkeit ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Verhältnisse zu anderen Bauteilen</ion-label>
      <ion-textarea  rows="4" v-on:ionInput="verhaeltnisse=$event.target.value" :value=verhaeltnisse></ion-textarea>
    </ion-item>



    <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
    <ion-button @click="goBack()"> Abbrechen </ion-button>
  </form>
  </div>
</template>s

<script>
import {path} from '../adress.js'
import VueCookies from 'vue-cookies'
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

let context
export default {
  name: 'ConstructedObjectModification',
  data: function () {
    return {
        objectnumber: '',
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
        struktur_lagenhaft: '',
        struktur_kompartimente: '',
        struktur_ausgezwickelt: '',
        struktur_Zwickel: '',
        struktur_Netz: '',
        struktur_keine: '',
        struktur_nicht_erkennbar: '',
        description: '',
        bauschliessen_Form_check: 'false',
        bauschliessen_Form: '',
        geruestloecher_check: 'false',
        geruestloecher: '',
        balkenloecher_check: 'false',
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
        wall_brick_check: 'false',
        gewoelbebrick: '',
        gewoelbebrick_check: 'false',
        roof_brick: '',
        roof_brick_check: 'false',
        fortification_brick: '',
        fortification_brick_check: 'false',
        brick_stamps: '',
        brick_stamps_check: 'false',
        brick_fingerstrokes: 'false',
        brick_animal_footprints: '',
        brick_animal_footprints_check: 'false',
        moist: 'false',
        dry: 'false',
        moertelbindung: '',
        lehmbindung: '',
        bindung_hue: '',
        bindung_chroma: '',
        bindung_value: '',
        sandy: 'false',
        kalkig: 'false',
        contents_other_check: 'false',
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
        zuschlagstoffe_other: '',
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
      // eslint-disable-next-line vue/no-reserved-keys
      _id: 0,
      // eslint-disable-next-line vue/no-reserved-keys
      _rev: 0
    }
  },
  created () { // This entire code block is a very ugly but working solution to get the database data conceirning titles and descriptions into the ionic-input fields. They are not supporting according vue methods for some reason
    context = this
    context._id = context.$route.params._id
    constructedOjectDB.get(context._id).then(function (result) {
      context.objectnumber = result.objectnumber
      context.title = result.title
      context.length = result.length
      context.conserved_length = result.conserved_length
      context.original_length =  result.original_length
      context.visible_length = result.visible_length
      context.width = result.width
      context.conserved_width = result.conserved_length
      context.original_width = result.original_width
      context.visible_width = result.visible_width
      context.height_am = result.height_am
      context.conserved_height_am = result.conserved_height_am
      context.original_height_am = result.original_height_am
      context.visible_height_am = result.visible_height_am
      context.height_fm = result.height_fm
      context.conserved_height_fm = result.conserved_height_fm
      context.original_height_fm = result.original_height_fm
      context.visible_height_fm = result.visible_height_fm
      context.orientation = result.orientation
      context.bauart_schalenmauer = result.bauart_schalenmauer
      context.bauart_durchgemauert = result.bauart_durchgemauert
      context.bauart_gussmauerwerk = result.bauart_gussmauerwerk
      context.bauart_nicht_erkennbar = result.bauart_nicht_erkennbar
      context.mauerwerk_quader = result.mauerwerk_quader
      context.mauerwerk_bruchstein = result.mauerwerk_bruchstein
      context.mauerwerk_rollstein = result.mauerwerk_rollstein
      context.mauerwerk_brick = result.mauerwerk_brick
      context.mauerwerk_mischmauerwerk = result.mauerwerk_mischmauerwerk
      context.struktur_lagenhaft = result.struktur_lagenhaft
      context.struktur_kompartimente = result.struktur_kompartimente
      context.struktur_ausgezwickelt = result.struktur_ausgezwickelt
      context.struktur_Zwickel = result.struktur_Zwickel
      context.struktur_Netz = result.struktur_Netz
      context.struktur_keine = result.struktur_keine
      context.struktur_nicht_erkennbar = result.struktur_nicht_erkennbar
      context.description = result.description
      context.bauschliessen_Form_check = result.bauschliessen_Form_check
      context.bauschliessen_Form = result.bauschliessen_Form
      context.geruestloecher_check = result.geruestloecher_check
      context.geruestloecher = result.geruestloecher
      context.balkenloecher_check = result.balkenloecher_check
      context.balkenloecher = result.balkenloecher
      context.location = result.location
      context.measurements = result.measurements
      context.characteristics_style = result.characteristics_style
      context.material_stone = result.material_stone
      context.material_brick = result.material_brick
      context.material_mixed = result.material_mixed
      context.material_clay_brick = result.material_clay_brick
      context.material_percentage = result.material_percentage
      context.material_stone_size = result.material_stone_size
      context.material_stone_material = result.material_stone_material
      context.material_stone_editing = result.material_stone_editing
      context.material_spolien = result.material_spolien
      context.wall_brick = result.wall_brick
      context.wall_brick_check = result.wall_brick_check
      context.gewoelbebrick = result.gewoelbebrick
      context.gewoelbebrick_check = result.gewoelbebrick_check
      context.roof_brick = result.roof_brick
      context.roof_brick_check = result.roof_brick_check
      context.fortification_brick = result.fortification_brick
      context.fortification_brick_check = result.fortification_brick_check
      context.brick_stamps = result.brick_stamps
      context.brick_stamps_check = result.brick_stamps_check
      context.brick_fingerstrokes = result.brick_fingerstrokes
      context.brick_animal_footprints = result.brick_animal_footprints
      context.brick_animal_footprints_check = result.brick_animal_footprints_check
      context.moist = result.moist
      context.dry = result.dry
      context.moertelbindung = result.moertelbindung
      context.lehmbindung = result.lehmbindung
      context.bindung_hue = result.bindung_hue
      context.bindung_chroma = result.bindung_chroma
      context.bindung_value = result.bindung_value
      context.sandy = result.sandy
      context.kalkig = result.kalkig
      context.contents_other_check = result.contents_other_check
      context.contents_other = result.contents_other
      context.coarse = result.coarse
      context.fine = result.fine
      context.medium = result.medium
      context.very_compact = result.very_compact
      context.compact = result.compact
      context.loose = result.loose
      context.very_loose = result.very_loose
      context.crumbly = result.crumbly
      context.kiesel = result.kiesel
      context.kalkspatzen = result.kalkspatzen
      context.ziegelsplit = result.ziegelsplit
      context.holzkohle = result.holzkohle
      context.stroh = result.stroh
      context.zuschlagstoffe_other = result.zuschlagstoffe_other
      context.verstrichen = result.verstrichen
      context.herausgequollen = result.herausgequollen
      context.kellenstrich = result.kellenstrich
      context.fugenbild_other = result.fugenbild_other
      context.fugendimension = result.fugendimension
      context.geglaettet = result.geglaettet
      context.ueberrieben = result.ueberrieben
      context.riesel = result.riesel
      context.geschlaemmt = result.geschlaemmt
      context.verputz_hue = result.verputz_hue
      context.verputz_value = result.verputz_value
      context.verputz_chroma = result.verputz_chroma
      context.strength = result.strength
      context.extension = result.extension
      context.brick_hue = result.brick_hue
      context.brick_value = result.brick_value
      context.brick_chroma = result.brick_chroma
      context.zusammensetzung = result.zusammensetzung
      context.korngroese = result.korngroese
      context.consistency = result.consistency
      context.zuschlagstoffe = result.zuschlagstoffe
      context.mehrlagigkeit = result.mehrlagigkeit
      context.verhaeltnisse = result.verhaeltnisse
      context.date = result.date
      context._rev = result._rev
    })
    this.objectnumber = context.objectnumber

  },
  methods: {
    logForm: function () {
      let router = this.$router // the corre'form'is' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let structure = {
        _id: context._id,
        objectnumber : context.objectnumber,
        title : context.title,
        length : context.length,
        conserved_length : context.conserved_length,
        original_length : context.original_length,
        visible_length : context.visible_length,
        width : context.width,
        conserved_width : context.conserved_length,
        original_width : context.original_width,
        visible_width : context.visible_width,
        height_am : context.height_am,
        conserved_height_am : context.conserved_height_am,
        original_height_am : context.original_height_am,
        visible_height_am : context.visible_height_am,
        height_fm : context.height_fm,
        conserved_height_fm : context.conserved_height_fm,
        original_height_fm : context.original_height_fm,
        visible_height_fm : context.visible_height_fm,
        orientation : context.orientation,
        bauart_schalenmauer : context.bauart_schalenmauer,
        bauart_durchgemauert : context.bauart_durchgemauert,
        bauart_gussmauerwerk : context.bauart_gussmauerwerk,
        bauart_nicht_erkennbar : context.bauart_nicht_erkennbar,
        mauerwerk_quader : context.mauerwerk_quader,
        mauerwerk_bruchstein : context.mauerwerk_bruchstein,
        mauerwerk_rollstein : context.mauerwerk_rollstein,
        mauerwerk_brick : context.mauerwerk_brick,
        mauerwerk_mischmauerwerk : context.mauerwerk_mischmauerwerk,
        struktur_lagenhaft : context.struktur_lagenhaft,
        struktur_kompartimente : context.struktur_kompartimente,
        struktur_ausgezwickelt : context.struktur_ausgezwickelt,
        struktur_Zwickel : context.struktur_Zwickel,
        struktur_Netz : context.struktur_Netz,
        struktur_keine : context.struktur_keine,
        struktur_nicht_erkennbar : context.struktur_nicht_erkennbar,
        description : context.description,
        bauschliessen_Form_check : context.bauschliessen_Form_check,
        bauschliessen_Form : context.bauschliessen_Form,
        geruestloecher_check : context.geruestloecher_check,
        geruestloecher : context.geruestloecher,
        balkenloecher_check : context.balkenloecher_check,
        balkenloecher : context.balkenloecher,
        location : context.location,
        measurements : context.measurements,
        characteristics_style : context.characteristics_style,
        material_stone : context.material_stone,
        material_brick : context.material_brick,
        material_mixed : context.material_mixed,
        material_clay_brick : context.material_clay_brick,
        material_percentage : context.material_percentage,
        material_stone_size : context.material_stone_size,
        material_stone_material : context.material_stone_material,
        material_stone_editing : context.material_stone_editing,
        material_spolien : context.material_spolien,
        wall_brick : context.wall_brick,
        wall_brick_check : context.wall_brick_check,
        gewoelbebrick : context.gewoelbebrick,
        gewoelbebrick_check : context.gewoelbebrick_check,
        roof_brick : context.roof_brick,
        roof_brick_check : context.roof_brick_check,
        fortification_brick : context.fortification_brick,
        fortification_brick_check : context.fortification_brick_check,
        brick_stamps : context.brick_stamps,
        brick_stamps_check : context.brick_stamps_check,
        brick_fingerstrokes : context.brick_fingerstrokes,
        brick_animal_footprints : context.brick_animal_footprints,
        brick_animal_footprints_check : context.brick_animal_footprints_check,
        moist : context.moist,
        dry : context.dry,
        moertelbindung : context.moertelbindung,
        lehmbindung : context.lehmbindung,
        bindung_hue : context.bindung_hue,
        bindung_chroma : context.bindung_chroma,
        bindung_value : context.bindung_value,
        sandy : context.sandy,
        kalkig : context.kalkig,
        contents_other_check : context.contents_other_check,
        contents_other : context.contents_other,
        coarse : context.coarse,
        fine : context.fine,
        medium : context.medium,
        very_compact : context.very_compact,
        compact : context.compact,
        loose : context.loose,
        very_loose : context.very_loose,
        crumbly : context.crumbly,
        kiesel : context.kiesel,
        kalkspatzen : context.kalkspatzen,
        ziegelsplit : context.ziegelsplit,
        holzkohle : context.holzkohle,
        stroh : context.stroh,
        zuschlagstoffe_other : context.zuschlagstoffe_other,
        verstrichen : context.verstrichen,
        herausgequollen : context.herausgequollen,
        kellenstrich : context.kellenstrich,
        fugenbild_other : context.fugenbild_other,
        fugendimension : context.fugendimension,
        geglaettet : context.geglaettet,
        ueberrieben : context.ueberrieben,
        riesel : context.riesel,
        geschlaemmt : context.geschlaemmt,
        verputz_hue : context.verputz_hue,
        verputz_value : context.verputz_value,
        verputz_chroma : context.verputz_chroma,
        strength : context.strength,
        extension : context.extension,
        brick_hue : context.brick_hue,
        brick_value : context.brick_value,
        brick_chroma : context.brick_chroma,
        zusammensetzung : context.zusammensetzung,
        korngroese : context.korngroese,
        consistency : context.consistency,
        zuschlagstoffe : context.zuschlagstoffe,
        mehrlagigkeit : context.mehrlagigkeit,
        verhaeltnisse : context.verhaeltnisse,
        date : context.date,
        _rev : context._rev
      }
      constructedOjectDB.put(structure, function callback (err, result) {
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

  .inclusionWrapper{
    text-align: left;
    padding-left: 16px;
  }

  .inclusionWrapper div{
    border-bottom: solid 1px #d0ced0;
  }

  .formOverlayOuter {
    background: rgba(0, 0, 0, 0.50);
    position: fixed;
    left: 0;
    top: 0px;
    padding-top: 64px;
    height: 100%;
    width: 100%;
    z-index: 35;
    display: none;
    overflow: scroll
  }

  .formOverlayOuter.overlayVisible {
    display: block
  }

  .formOverlayInner {
    background: var(--ion-color-light);
    z-index: 500;

    padding: 8px
  }

  @media screen and (min-width: 768px) {
    .formOverlayOuter {
      top: 0
    }

    .formOverlayInner {
      min-height: auto;
      margin-left: 50px;
      margin-right: 50px;
      margin-top: 110px;
      border: 1px solid var(--ion-color-primary);
      -webkit-box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.24);
      -moz-box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.24);
      box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.24);
    }

  }
</style>
