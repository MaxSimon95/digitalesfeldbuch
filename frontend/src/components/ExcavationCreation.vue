<template>
  <div>
    <form>
      <ion-item>
        <ion-label position="stacked">Name der Ausgrabung</ion-label>
        <ion-input v-on:ionInput="title=$event.target.value" placeholder="Geben Sie die Bezeichnung der Ausgrabung ein" ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ansprechpartner</ion-label>


        <ion-list>
          <ion-button v-for="item in affiliatedContactPersons" v-bind:key="item._id">
            <ion-text>
              {{item.name}}
            </ion-text>
            <!-- <ion-icon name="close"></ion-icon> -->
          </ion-button>

        </ion-list>

        <ion-button @click="showOverlay" color="secondary"> Hinzufügen</ion-button>
      </ion-item>

      <div class="formOverlayOuter overlayVisible" v-bind:style="{ display: overlayDisplay }" >
        <div class="formOverlayInner">
          <h2>Ansprechpartner hinzufügen</h2>
          <hr/>

          <ion-item>Einen bereits angelegten Ansprechpartner auswählen</ion-item>
          <p v-if="availableContactPersons.length === 0">
            <ion-icon name="information-circle"></ion-icon> Es wurden bisher noch keine Ansprechpartner angelegt.
          </p>
          <ion-list>
            <ion-item v-for="item in availableContactPersons" v-bind:key="item._id" lines="inset">
              <ion-button color="secondary" @click="addExistingContactPersonToCampaign(item)">
                <ion-text>
                  {{item.name}}
                </ion-text>
              </ion-button>
            </ion-item>
          </ion-list>
          <h4 color="secondary">oder</h4>
          <ion-list>
            <ion-item>Einen neuen Ansprechpartner anlegen</ion-item>
            <ion-item>
              <ion-label position="stacked">Name des Ansprechpartners</ion-label>
              <ion-input placeholder="Hier den Name eintragen"
                         v-on:ionInput="contactPersonName=$event.target.value"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">E-Mail des Ansprechpartners</ion-label>
              <ion-input placeholder="Hier die E-Mail-Adresse angeben"
                         v-on:ionInput="contactPersonEmail=$event.target.value"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Telefonnummer des Ansprechpartners</ion-label>
              <ion-input placeholder="Hier die Telefonnummer eintragen"
                         v-on:ionInput="contactPersonTelephone=$event.target.value"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Funktion des Ansprechpartners</ion-label>
              <ion-input placeholder="Hier Funktion des Ansprechpartners angeben"
                         v-on:ionInput="contactPersonPurpose=$event.target.value"></ion-input>
            </ion-item>
            <ion-item>
              <ion-button color="secondary" @click="addNewContactPersonToCampaign()"> Hinzufügen</ion-button>
            </ion-item>
          </ion-list>
          <ion-button @click="hideOverlay()">
            Abbrechen
          </ion-button>
        </div>
      </div>


      <ion-item>
        <ion-label position="stacked">Organisation</ion-label>
        <ion-input v-on:ionInput="organisation=$event.target.value" placeholder="Tragen Sie hier die zugehörige Organisation ein"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Auftraggeber</ion-label>
        <ion-input v-on:ionInput="customer=$event.target.value" placeholder="Tragen Sie hier den Auftraggeber der Ausgrabung ein"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Grabungsfokus</ion-label>
        <ion-textarea v-on:ionInput="excavationFocus=$event.target.value" rows="5" placeholder="Beschreiben Sie hier den Fokus dieser Ausgrabung"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ort</ion-label>
        <ion-textarea v-on:ionInput="location=$event.target.value" rows="2" placeholder="Geben Sie hier an, wo die Ausgrabung stattfindet"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Beginn der Ausgrabung</ion-label>
        <ion-input v-on:ionInput="excavationStartDate=$event.target.value" placeholder="Geben Sie hier das Startdatum der Ausgrabung an"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ende der Ausgrabung</ion-label>
        <ion-input v-on:ionInput="excavationEndDate=$event.target.value" placeholder="Geben Sie hier das geplante Enddatum der Ausgrabung an"></ion-input>
      </ion-item>

      <!--
      <ion-item>
        <ion-label position="stacked">Ist die Ausgrabung aktiv?</ion-label>
        <div >
          <ion-toggle checked></ion-toggle>
        </div>
      </ion-item>
      -->

      <ion-button color="secondary" @click="logForm()"> Speichern </ion-button>  <!--type="submit"-->
      <ion-button @click="goBack()"> Abbrechen </ion-button>
    </form>

  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import {path} from '../adress.js'

var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
var db = new PouchDB('excavations_database') // creates new database or opens existing one
var remoteDB = new PouchDB(path + '/excavations')

var contactPersonDb = new PouchDB('contactPerson_database')
var remotecontactPersonDb = new PouchDB(path + '/contactPersons')

db.sync(remoteDB, {
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

export default {
  name: 'ExcavationCreation',
  data: function () {
    return {
      title: '',
      organisation: '',
      customer: '',
      excavationFocus: '',
      location: '',
      excavationStartDate: '',
      excavationEndDate: '',
      campaignId: '',
      overlayDisplay: 'none',
      contactPersonName: '',
      contactPersonEmail: '',
      contactPersonPurpose: '',
      contactPersonTelephone: '',
      availableContactPersons: [],
      affiliatedContactPersons: []
    }
  },
  beforeMount () {
    this.getContactPersons()
  },
  methods: {
    getContactPersons: function () {
      var context = this // to enable accessing the 'contactPersons' variable inside submethods
      contactPersonDb.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        for (let item of result.rows) {
          context.availableContactPersons.push(item.doc)
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    addExistingContactPersonToCampaign: function (item) {
      this.hideOverlay()
      this.affiliatedContactPersons.push(item)
    },
    addNewContactPersonToCampaign: function () {
      this.hideOverlay()
      var contactPerson={
        _id: this.contactPersonName + new Date().toISOString(),
        name: this.contactPersonName,
        email: this.contactPersonEmail,
        telephone: this.contactPersonTelephone,
        purpose: this.contactPersonPurpose
      }
      this.affiliatedContactPersons.push(contactPerson)
      console.log(contactPerson)
      contactPersonDb.put(contactPerson, function callback(err, result) {
        if (!err) {
          console.log('A new Stand User approaches')
          // eslint-disable-next-line standard/object-curly-even-spacing
          //
          console.log(this)
        }
        else {
          console.log(err)
        }
      })

    },
    hideOverlay: function () {
      this.overlayDisplay = 'none';
    },
    showOverlay: function () {
      this.overlayDisplay = 'block';
    },
    logForm: function () {
      let router = this.$router // the correct 'this' is not reachable inside the dp.put call back, so it gets put into a variable.
      // eslint-disable-next-line standard/object-curly-even-spacing
      let excavation = {
        _id: this.title + new Date().toISOString(),
        title: this.title,
        organisation: this.organisation,
        customer: this.customer,
        excavationFocus: this.excavationFocus,
        location: this.location,
        excavationEndDate: this.excavationEndDate,
        excavationStartDate: this.excavationStartDate,
        campaignId: VueCookies.get('currentCampaign')._id,
        affiliatedContactPersons: this.affiliatedContactPersons
      }
      db.put(excavation, function callback (err, result) {
        if (!err) {
          console.log('Successfully posted a excarvation')
          // eslint-disable-next-line standard/object-curly-even-spacing
          router.push({ name: 'CampaignOverview'})
        }
      })
    },
    goBack: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'CampaignOverview'})
    }
  }
}
</script>

<style scoped>

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
