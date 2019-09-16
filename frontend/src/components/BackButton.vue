<template>
    <div class="back-button" @click="goBack">
     <!-- <ion-icon name="arrow-back"></ion-icon> -->
      <!--<img src="../assets/_ionicons_svg_md-arrow-back.svg"></img> -->
      <svg @click="goBack" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"/></svg>
    </div>
</template>

<script>


  /* IMPORTANT IMPORTANTE WICHTIG:
  Man DARF auf KEINEN FALL den Backbutton auf einer Seite einfügen, welche DIREKT über das Menü links anzusteuern ist. Das führt dazu, dass das Layout komplett zerstört wird.
  Dieses Problem ist in der Bauweise des Hamburger-Menu Plugins begründet.
   */
    import * as router from "vue-router";

    export default {
        name: "BackButton",
      methods: {
        goBack: function () {
          // eslint-disable-next-line standard/object-curly-even-spacing
          // this.$router.push({ name: 'CampaignsOverview'}) // commented out because its static
          // this.$router.go(-1) // dynamic and fun
          switch (this.$route.name) {
            case "ModifyCampaign":
              this.$router.push({name: 'CampaignOverview'});
              break;
            case "CreateCampaign":
              this.$router.push({name: 'CampaignOverview'});
              break;
            //case "CampaignOverview":  break;
            case "ModifyExcavation":
              this.$router.push({name: 'ExcavationInfo'});
              break;
            case "CreateExcavation":
              this.$router.push({name: 'CampaignOverview'});
              break;
            case "ModifySection":
              this.$router.push({name: 'SectionOverview'});
              break;
            case "CreateSection":
              this.$router.push({name: 'SectionsOverview'});
              break;
            case "SectionOverview":
              this.$router.push({name: 'SectionsOverview'});
              break;
            case "StructureModification":
              this.$router.push({name: 'StructureOverview'});
              break;
            case "StructureCreation":
              this.$router.push({name: 'StructuresOverview'});
              break;
            case "StructureOverview":
              this.$router.push({name: 'StructuresOverview'});
              break;
            case "FindModification":
              this.$router.push({name: 'FindOverview'});
              break;
            case "FindCreation":
              this.$router.push({name: 'FindsOverview'});
              break;
            case "FindOverview":
              this.$router.push({name: 'FindsOverview'});
              break;
            case "ProbeModification":
              this.$router.push({name: 'ProbeOverview'});
              break;
            case "ProbeCreation":
              this.$router.push({name: 'ProbesOverview'});
              break;
            case "ProbeOverview":
              this.$router.push({name: 'ProbesOverview'});
              break;
            case "404Page":
              this.$router.push({name: 'Home'});
              break;
            default:
              this.$router.push({name: 'Home'});
              break;
          }
        }
      }
    }
</script>

<style scoped>
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

  svg{
    cursor: pointer;
    left: 6px;
    top: 6px;
    position: fixed;
    width: 50px;
    fill:white
  }
</style>
