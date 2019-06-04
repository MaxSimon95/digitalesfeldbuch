<template>
  <div id="sectionsWrapper">
    <!-- List of Text Items -->
    <h2>Übersicht der Schnitte</h2>
    <ion-list>
      <ion-item-sliding v-for="item in sections" v-bind:key="item._id" lines="inset">

        <ion-item-options side="start">
          <ion-item-option @click="selectSection(item)">Öffnen</ion-item-option>
        </ion-item-options>

        <ion-item detail="true" @click="selectSection(item)" >
          <ion-label>
            <h2> {{item.title}} </h2>
          </ion-label>
        </ion-item>

        <ion-item-options side="end">
          <ion-item-option @click="modifySection(item)">
            <ion-icon slot="icon-only" name="settings"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" @click="deleteSection(item)">
            <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
    <ion-button color="secondary" expand="block" @click="createSection()">Neuer Schnitt</ion-button>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
export default {
  name: 'SectionsOverview',
  methods: {
    getSections: function () {
      var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
      var db = new PouchDB('sections_database')
      var context = this // to enable accessing the 'campaigns' variable inside submethods
      db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          if (item.doc.excavationId === VueCookies.get('currentExcavation')._id) context.sections.push(item.doc)
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    selectSection: function (item) {
      VueCookies.set('currentSection', item)
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'SectionOverview'})
    }, // TODO

    createSection: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CreateSection'})
    }, // TODO

    modifySection: function (item) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'ModifySection', params: { _id: item._id }})
    }, // TODO

    deleteSection: function (item) { } // TODO: change campaign
  },
  beforeMount () {
    this.getSections()
  },
  data: function () {
    return {
      sections: []
    }
  }
}

</script>

<style scoped>
  #excavationsWrapper{
    border-top: 1px solid var(--ion-color-medium-tint);
  }
</style>

<style scoped>

</style>
