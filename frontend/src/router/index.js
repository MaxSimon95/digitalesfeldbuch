import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserProfile from '@/components/UserProfile'
import Home from '@/components/Home'
import CampaignOverview from '@/components/CampaignOverview'

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
      name: 'Campaigns',
      component: CampaignOverview,
      meta: {
        title: 'Kampagnen'
      }
    },
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
