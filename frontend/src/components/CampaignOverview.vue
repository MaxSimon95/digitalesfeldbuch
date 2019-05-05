<template>
    <div>
      <!-- List of Text Items -->
      <ion-list>

        <ion-item v-for="item in campaigns" v-bind:key="item.id" @click="selectCampaign()" lines="inset" detail="true">
          <ion-label> {{item.name}}</ion-label>
        </ion-item>
      </ion-list>

      <ion-button expand="block" color="favorite" @click="createCampaign()">Neue Kampagne</ion-button>

    </div>
</template>

<script>
export default {
  name: 'CampaignOverview',
  methods: {
    selectCampaign: function () { alert('TODO: Kampagne auswählen') }, // TODO: Select Campaign
    createCampaign: function () { alert('TODO: Kampagne anlegen') } // TODO: Select Campaign
  },
  data: function () {
    return {
      campaigns: [ // TODO: replace Dummy JSON with proper campaign data once possible
        {
          'id': 0,
          'name': 'Phantom Blood',
          'description': 'Kono dio da!'
        },
        {
          'id': 1,
          'name': 'Battle Tendency',
          'description': 'Caesar!'
        },
        {
          'id': 2,
          'name': 'Stardust Crusaders',
          'description': 'No one can deflect the emeraldo splash!'
        },
        {
          'id': 3,
          'name': 'Diamond is Unbreakable',
          'description': 'Oyoyoyoyoyoyoy'
        },
        {
          'id': 4,
          'name': 'Vento Aureo',
          'description': 'Buccellati: The enemy stand users will try to blend in'
        }
      ]
    }
  }
}

</script>

<style scoped>

  .ion-color-favorite {
    --ion-color-base: #8b4b63;
    --ion-color-base-rgb: 105,187,123;
    --ion-color-contrast: #ffffff;
    --ion-color-contrast-rgb: 255,255,255;
    --ion-color-shade: #784156;
    --ion-color-tint: #9b546f;
  }
</style>
