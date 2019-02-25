import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../modules/home/Home'
import Adopt from '../modules/adopt/Adopt'
import AssistRaise from '../modules/assistraise/AssistRaise'
import ReturnVisit from '../modules/returnvisit/ReturnVisit'
import Knowledge from '../modules/knowledge/Knowledge'
import Encyclopedias from '../modules/encyclopedias/Encyclopedias'

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/adopt',
            component: Adopt
        },
        {
            path: '/assist-raise',
            component: AssistRaise
        },
        {
            path: '/return-visit',
            component: ReturnVisit
        },
        {
            path: '/knowledge',
            component: Knowledge
        },
        {
            path: '/encyclopedias',
            component: Encyclopedias
        },
    ],
    mode: 'history'
})
