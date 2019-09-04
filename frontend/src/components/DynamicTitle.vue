<template>
  <h1>
    {{ determinedTitle }}
    <span>{{$route.name}}</span>
  </h1>
  <!-- the following is a fake, to have vue throw update events for this component on a route change -->

</template>

<script>
  import VueCookies from 'vue-cookies'
  export default {
    name: "DynamicTitle",
    data: function () {
      return {
        determinedTitle: ''
      }
    },
    created() {
        this.determinedTitle = this.determineTitle()
    },
    updated() {
      this.determinedTitle = this.determineTitle()
    }, methods: {
      determineTitle() {
        let returnTitle = ''
        switch (this.$route.name) {
          case 'SectionOverview':
            returnTitle = this.$route.meta.title + ': ' + VueCookies.get('currentSection').title; break;
          case 'ModifySection':
            returnTitle = this.$route.meta.title + ': ' + VueCookies.get('currentSection').title; break;
          case 'StructureOverview':
            returnTitle = this.$route.meta.title + ': ' + VueCookies.get('currentStructure').structurename; break;
          case 'StructureModification':
            returnTitle = this.$route.meta.title + ': ' + VueCookies.get('currentStructure').structurename; break;
          case 'FindOverview':
            returnTitle = this.$route.meta.title + ': ' + VueCookies.get('currentFind').findnumber; break;
          case 'FindModification':
            returnTitle = this.$route.meta.title + ': ' + VueCookies.get('currentFind').findnumber; break;
          case 'ExcavationInfo':
            returnTitle = this.$route.meta.title + ': ' + VueCookies.get('currentExcavation').title; break;
          case 'ExcavationModification':
            returnTitle = this.$route.meta.title + ': ' + VueCookies.get('currentExcavation').title; break;
          case 'CampaignInfo':
            returnTitle = this.$route.meta.title + ': ' + VueCookies.get('currentCampaign').title; break;
          case 'ModifyExcavation':
            returnTitle = this.$route.meta.title + ': ' + VueCookies.get('currentCampaign').title; break;
          default:
            returnTitle = this.$route.meta.title; break;
        }
        //return (this.$route.meta.title + "asda")
        //return (VueCookies.get('currentExcavation').title)
        console.log(this.$route.name)
        return returnTitle
      }
    }
  }
</script>

<style scoped>
span{
 display:none
}
</style>
