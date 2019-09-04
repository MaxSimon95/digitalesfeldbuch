<template>
    <div id="headerDiv">
      <BackButton v-if="this.backButtonShow"/>
      <div v-else class="bm-burger-button help-burger">
        <span class="bm-burger-bars line-style help-burger" style="top: 0%"></span>
        <span class="bm-burger-bars line-style help-burger" style="top: 40%"></span>
        <span class="bm-burger-bars line-style help-burger" style="top: 80%"></span>
      </div>
      <DynamicTitle/>
      <!-- the following is a fake, to have vue throw update events for this component on a route change -->
      <span>{{$route.meta.title}}</span>
    </div>
</template>

<script>
  import BackButton from './BackButton.vue'
  import VueCookies from 'vue-cookies'
  import DynamicTitle from "./DynamicTitle";
export default {
  name: 'AppHeader',
  components: {
    DynamicTitle,
    BackButton
  },
  created () {
    this.backButtonToggle()
  },
  updated () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      this.backButtonToggle()
    })
  },
  data: function () {
    return {
      backButtonShow: false
    }
  },
  methods: {
    backButtonToggle () {
      //console.log(this.$route)
     /* switch(this.$route.name)
      {
        case "ModifyCampaign": this.backButtonShow = true; break;
        case "CreateCampaign": this.backButtonShow = true; break;
        //case "CampaignOverview": this.backButtonShow = true; break;
        case "ModifyExcavation": this.backButtonShow = true; break;
        case "CreateExcavation": this.backButtonShow = true; break;
        case "ExcavationOverview": this.backButtonShow = true; break;
        case "ModifySection": this.backButtonShow = true; break;
        case "CreateSection": this.backButtonShow = true; break;
        case "SectionOverview": this.backButtonShow = true; break;
        case "StructureModification": this.backButtonShow = true; break;
        case "StructureCreation": this.backButtonShow = true; break;
        case "StructureOverview": this.backButtonShow = true; break;
        case "FindModification": this.backButtonShow = true; break;
        case "FindCreation": this.backButtonShow = true; break;
        case "FindOverview": this.backButtonShow = true; break;
        case "ProbeModification": this.backButtonShow = true; break;
        case "ProbeCreation": this.backButtonShow = true; break;
        case "ProbeOverview": this.backButtonShow = true; break;
        case "404Page": this.backButtonShow = true; break;
        default: this.backButtonShow = false; break;

      }*/
      if(this.$route.meta.showBackButton != undefined) this.backButtonShow = this.$route.meta.showBackButton
      else this.backButtonShow = false
      //console.log(this.backButtonShow)
    }
  }
}
</script>

<style scoped>

  span{
    display:none;
  }

  h1{
    position: fixed;
    top: 0;
    width: 100%;
    font-size: 18px;
    margin-top: 25px;
  }

  div#headerDiv{
    height: 64px;
    background-color: var(--ion-color-primary);
    color: var(--ion-color-primary-contrast);
    position: sticky;
    z-index: 40;
    left: 0;
    top: 0;
  }

  .back-button{

    width: 36px;
    height: 30px;
    left: 18px;
    top: 18px;
    cursor: pointer;
    z-index: 500;
    position: sticky;
    background-color: var(--ion-color-primary);
  }

  .bm-burger-button.help-burger {

    width: 36px;
    height: 30px;
    left: 18px;
    top: 18px;
    cursor: pointer;
    z-index: 50;
    position: sticky;
  }

  .line-style.help-burger {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
  }

</style>
