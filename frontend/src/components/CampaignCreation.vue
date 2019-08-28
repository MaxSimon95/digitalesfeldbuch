<template>
  <div>
    <form>
      <ion-item>
        <ion-label position="stacked">Name der Kampagne</ion-label>
        <ion-input placeholder="Geben Sie den Namen der Kampagne ein"
                   v-on:ionInput="title=$event.target.value"></ion-input>
      </ion-item>
      <div class="contactPersonWrapper">
        <div>
        <ion-label position="stacked">Ansprechpartner</ion-label>


        <ion-list>
                  <ion-button v-for="item in affiliatedContactPersons" v-bind:key="item._id" @click="removeElement(item)">
                    <ion-text>
                      {{item.name}}
                    </ion-text>
                   <ion-icon name="close"></ion-icon>
                  </ion-button>

                </ion-list>

        <ion-button class="addButton" @click="showOverlay" color="secondary"> Hinzufügen</ion-button>
        </div>
</div>

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
                <ion-label position="stacked">Name des Ansprechpartners (Nachname, Vorname)</ion-label>
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
        <ion-label position="stacked">Kurzbeschreibung</ion-label>
        <ion-textarea placeholder="Geben Sie hier eine kurze Beschreibung der Kampagne ein" rows="14"
                      v-on:ionInput="description=$event.target.value"></ion-textarea>
      </ion-item>


      <ion-button @click="logForm()" color="secondary"> Speichern</ion-button>  <!--type="submit"-->
      <ion-button @click="goBack()"> Abbrechen</ion-button>
    </form>

  </div>
</template>

<script>
  import {path} from '../adress.js'

  var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
  var campaignsdb = new PouchDB('campaigns_database') // creates new database or opens existing one
  var remotecampaginsDB = new PouchDB(path + '/campaigns')

  var contactPersonDb = new PouchDB('contactPerson_database')
  var remotecontactPersonDb = new PouchDB(path + '/contactPersons')


  campaignsdb.sync(remotecampaginsDB, {
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

  contactPersonDb.sync(remotecontactPersonDb, {
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
    name: 'CampaignCreation',
    data: function () {
      return {
        title: '',
        description: '',
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
      removeElement(item)
      {
        console.log("remove da " + item)
        var tempArray = this.affiliatedContactPersons.filter(function(arrayitem) {
          console.log(arrayitem.name + " " + item.name)
          return arrayitem._id !== item._id
        })
        this.affiliatedContactPersons = tempArray
      },
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
        let campaign = {
          _id: this.title + new Date().toISOString(),
          title: this.title,
          description: this.description,
          affiliatedContactPersons: this.affiliatedContactPersons
        }
        campaignsdb.put(campaign, function callback(err, result) {
          if (!err) {
            console.log('Successfully posted a campaign! STANDO POWER!')
            // eslint-disable-next-line standard/object-curly-even-spacing
            router.push({name: 'CampaignsOverview'})
          }
        })
      },
      goBack: function () {
        // eslint-disable-next-line standard/object-curly-even-spacing
        this.$router.push({name: 'CampaignsOverview'})
      }
    }
  }
</script>

<style scoped>

  .contactPersonWrapper{
    text-align: left;
    padding-left: 16px;
  }

  .contactPersonWrapper div{
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
