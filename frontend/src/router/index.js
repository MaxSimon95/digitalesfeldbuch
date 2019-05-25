import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserProfile from '@/components/UserProfile'
import Home from '@/components/Home'
import CampaignsOverview from '@/components/CampaignsOverview'
import CampaignCreation from '@/components/CampaignCreation'
import CampaignModification from '@/components/CampaignModification'
import CampaignOverview from '@/components/CampaignOverview'
import ExcavationCreation from '@/components/ExcavationCreation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworlds',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/campaigns',
      name: 'CampaignsOverview', // name is optional
      component: CampaignsOverview,
      meta: { // meta is optional
        title: 'Alle Kampagnen'
      }
    },
    {
      path: '/campaigns/new',
      name: 'CreateCampaign',
      component: CampaignCreation,
      meta: {
        title: 'Kampagne anlegen'
      }
    },
    {
      path: '/campaigns/modify/:_id',
      name: 'ModifyCampaign',
      component: CampaignModification,
      meta: {
        title: 'Kampagne bearbeiten'
      }
    }, /* {
      path: '/deletecampaign',
      name: 'DeleteCampaign',
      component: CampaignDeletion,
      meta: {
        title: 'Kampagne löschen'
      }
    }, */
    {
      path: '/userprofile',
      name: 'UserProfile',
      component: UserProfile,
      meta: {
        title: 'Profil'
      }
    },
    {
      path: '/campaigns/:_id',
      name: 'CampaignOverview', // name is optional
      component: CampaignOverview,
      meta: { // meta is optional
        title: 'Kampagne'
      }
    },
    {
      path: '/excavations/new',
      name: 'CreateExcavation',
      component: ExcavationCreation,
      meta: {
        title: 'Ausgrabung anlegen'
      }
    }
  ]
})
