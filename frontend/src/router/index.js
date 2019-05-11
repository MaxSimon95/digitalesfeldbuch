import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserProfile from '@/components/UserProfile'
import Home from '@/components/Home'
import CampaignOverview from '@/components/CampaignOverview'
import CampaignCreation from '@/components/CampaignCreation'
import CampaignModification from '@/components/CampaignModification'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
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
      name: 'CampaignOverview', // name is optional
      component: CampaignOverview,
      meta: { // meta is optional
        title: 'Kampagnen'
      }
    },
    {
      path: '/newcampaign',
      name: 'CreateCampaign',
      component: CampaignCreation,
      meta: {
        title: 'Kampagne anlegen'
      }
    },
    {
      path: '/modifycampaign',
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
    }
  ]
})
