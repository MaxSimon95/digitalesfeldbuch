<template>
  <div class="contentWrap">

    <div class="titleWrap"><ion-text >Willkommen im Digitalen Feldbuch.</ion-text></div>

    <router-link to="/campaigns">
      <div class="tileWrapper">
      <div class="tileDiv" id="campaignTile"><img src="../assets/logo_campaign.png"></div>
        Übergeordnetes Projekt
  </div>
    </router-link>

    <router-link to="/excavation">
      <div class="tileWrapper">
      <div class="tileDiv" id="excavationTile" v-if="campaignIsSet"><img src="../assets/logo_excavation.png"></div>
      <div class="tileDiv inactiveTile" id="excavationTile" v-else><div class="tileDiv" id="campaignTile"><img src="../assets/logo_excavation.png"></div></div>
      Ausgrabung
      </div>
    </router-link>
    <router-link to="/excavation/sections">
      <div class="tileWrapper">
      <div class="tileDiv" id="sectionsTile" v-if="excavationIsSet"><img src="../assets/logo_section.png"></div>
      <div class="tileDiv inactiveTile" id="sectionsTile" v-else><img src="../assets/logo_section.png"></div>
      Schnitt
    </div>
    </router-link>
    <router-link to="/constructedObjects">
      <div class="tileWrapper">
        <div class="tileDiv" id="constructedObjectsTile"><img src="../assets/logo_constructedObject.png"></div>
        Baulicher Bestand
      </div>
    </router-link>
    <router-link to="/excavation/structures">
      <div class="tileWrapper">
      <div class="tileDiv" id="structuresTile" v-if="excavationIsSet"><img src="../assets/logo_structure.png"></div>
      <div class="tileDiv inactiveTile" id="structuresTile" v-else><img src="../assets/logo_structure.png"></div>
      Befund (SE)
      </div>
    </router-link>
    <router-link to="/excavation/finds">
      <div class="tileWrapper">
      <div class="tileDiv" id="findsTile" v-if="excavationIsSet"><img src="../assets/logo_find.png"></div>
      <div class="tileDiv inactiveTile" id="findsTile" v-else><img src="../assets/logo_find.png"></div>
      Fund
    </div>
    </router-link>
    <router-link to="/excavation/probes">
      <div class="tileWrapper">
      <div class="tileDiv" id="probesTile" v-if="excavationIsSet"><img src="../assets/logo_probe.png"></div>
      <div class="tileDiv inactiveTile" id="probesTile" v-else><img src="../assets/logo_probe.png"></div>
      Probe
      </div>
    </router-link>
    <router-link to="/viewer3d">
      <div class="tileWrapper">
        <div class="tileDiv" id="viewer3dTile"><img src="../assets/logo_3d.png"></div>
        3D Viewer
      </div>
    </router-link>


  </div>
</template>

<script>
 // import Modal from './HelloWorld.vue'
 import VueCookies from 'vue-cookies'
  export default {
    data: function (){
      return {
        excavationIsSet: false,
        campaignIsSet: false
      }
    },
    created () {
      if (VueCookies.get('currentExcavation') !== null) {
        this.excavationIsSet = true
      }
      if (VueCookies.get('currentCampaign') !== null) {
        this.campaignIsSet = true
      }
    },
    methods: {
      /*openModal() {
        return this.$ionic.modalController
          .create({
            component: Modal,
            componentProps: {
              data: {
                content: 'New Content',
              },
              propsData: {
                title: 'New title',
              },
            },
          })
          .then(m => m.present())
      },
      dismissModal(){
  console.log("dismissModal called")
  }*/
  }
  }
</script>
<style scoped>

  .titleWrap{
    margin-top: 20px;
    margin-bottom: 30px
  }

  div.contentWrap{
    padding: 10px
  }

  .tileDiv{

    width: 140px;
    height: 140px;
    display: inline-block;
    background-color: #898078;
    color: white;
  }

  .tileWrapper
  {
    margin: 8px;
    width: 140px;
    height: 140px;
    display: inline-block;
  }

  .tileDiv#structuresTile,.tileDiv#sectionsTile
  {
    background-color: #AB9E92;
  }

  .tileDiv#excavationTile
  {
    background-color: #898078;
  }

  .tileDiv#probesTile, .tileDiv#constructedObjectsTile
  {
    background-color: #C3A894;
  }

  .tileDiv#findsTile,.tileDiv#campaignTile
  {
    background-color: #BC987D;
  }

  .tileDiv.inactiveTile
  {
    background-color: lightgrey !important;
  }



  @media screen and (min-width: 768px) {
    .tileDiv {
      width: 210px;
      height: 210px;
    }

    .tileWrapper
    {
      margin: 10px;
      width: 210px;
      height: 210px;
      display: inline-block;
    }

    .titleWrap {
      margin-top: 50px;
      margin-bottom: 70px
    }

    div.contentWrap {
      padding: 20px
    }

  }
  </style>
