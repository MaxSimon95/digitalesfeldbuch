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
import ExcavationModification from '@/components/ExcavationModification'
import Login from '@/components/Login'
import FindsOverview from '@/components/FindsOverview'
import FindCreation from '@/components/FindCreation'
import FindModification from '@/components/FindModification'
import StructuresOverview from '@/components/StructuresOverview'
import StructureModification from '@/components/StructureModification'
import StructureCreation from '@/components/StructureCreation'
import ExcavationOverview from '@/components/ExcavationOverview'
import FallbackComponent from '@/components/FallbackComponent'
import SectionsOverview from '@/components/SectionsOverview'
import ExcavationInfo from '@/components/ExcavationInfo'
import SectionModification from '@/components/SectionModification'
import SectionCreation from '@/components/SectionCreation'
import SectionOverview from '@/components/SectionOverview'
import FindOverview from '@/components/FindOverview'
import StructureOverview from '@/components/StructureOverview'
import ConstructedObjectCreation from '@/components/ConstructedObjectCreation'
import Viewer3D from '@/components/Viewer3D'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworlds',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/viewer3d',
      name: 'Viewer3D',
      component: Viewer3D,
      meta: {
        title: '3D Viewer'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/constructedobjects',
      name: 'ConstructedObjectCreation',
      component: ConstructedObjectCreation,
      meta: {
        title: 'Ausgrabung'
      }
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
        title: 'Kampagne anlegen',
        showBackButton: true
      }
    },
    {
      path: '/campaigns/modify/:_id',
      name: 'ModifyCampaign',
      component: CampaignModification,
      meta: {
        title: 'Kampagne bearbeiten',
        showBackButton: true
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
      path: '/campaign',
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
        title: 'Ausgrabung anlegen',
        showBackButton: true
      }
    },
    {
      path: '/excavations/modify/:_id',
      name: 'ModifyExcavation',
      component: ExcavationModification,
      meta: {
        title: 'Ausgrabung bearbeiten',
        showBackButton: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login',
        showBackButton: true
      }
    },
    {
      path: '/excavation',
      component: ExcavationOverview,
      meta: {
        title: 'Ausgrabung'
      },
      children: [
        {
          path: '/',
          component: ExcavationInfo,
          name: 'ExcavationInfo',
          meta: {
            title: 'Ausgrabung'
          }
        },
        {
          path: 'sections',
          name: 'SectionsOverview',
          component: SectionsOverview,
          meta: {
            title: 'Schnitte'
          }
        },
        {
          path: 'sections/overview',
          name: 'SectionOverview',
          component: SectionOverview,
          meta: {
            title: 'Schnitt',
            showBackButton: true
          }
        },
        {
          path: 'sections/create',
          name: 'CreateSection',
          component: SectionCreation,
          meta: {
            title: 'Schnitt anlegen',
            showBackButton: true
          }
        },
        {
          path: 'sections/modify',
          name: 'ModifySection',
          component: SectionModification,
          meta: {
            title: 'Schnitt bearbeiten',
            showBackButton: true
          }
        },
        {
          path: 'finds',
          name: 'FindsOverview',
          component: FindsOverview,
          meta: {
            title: 'Funde'
          }
        },
        {
          path: 'finds/overview',
          name: 'FindOverview',
          component: FindOverview,
          meta: {
            title: 'Fund',
            showBackButton: true
          }
        },
        {
          path: 'finds/modify/:_id',
          name: 'FindModification',
          component: FindModification,
          meta: {
            title: 'Fund bearbeiten',
            showBackButton: true
          }
        },
        {
          path: 'finds/new',
          name: 'FindCreation',
          component: FindCreation,
          meta: {
            title: 'Fund anlegen',
            showBackButton: true
          }
        },
        {
          path: 'structures',
          name: 'StructuresOverview',
          component: StructuresOverview,
          meta: {
            title: 'Befunde (SE)'
          }
        },
        {
          path: 'structures/overview',
          name: 'StructureOverview',
          component: StructureOverview,
          meta: {
            title: 'Befund (SE)',
            showBackButton: true
          }
        },
        {
          path: 'structures/modify/:_id',
          name: 'StructureModification',
          component: StructureModification,
          meta: {
            title: 'Befund bearbeiten',
            showBackButton: true
          }
        },
        {
          path: 'structures/new',
          name: 'StructureCreation',
          component: StructureCreation,
          meta: {
            title: 'Befund anlegen',
            showBackButton: true
          }
        }
      ]
    },
    {
      path: '*',
      name: '404Page',
      component: FallbackComponent,
      meta: {
        title: 'Noch im Bau',
        showBackButton: true
      }
    }
  ]
})
