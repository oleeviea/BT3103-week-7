import PageContent from './components/PageContent.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'

export default[
    { path: '/', component: PageContent},
    { path: '/Orders', component: Orders},
    { name:'Modify', path: '/Modify', component: Modify},
    { path: '/Dashboard', component: Dashboard}
]