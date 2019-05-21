import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '../modules/home/Home';
import Adopt from '../modules/adopt/Adopt';
import AdoptList from '../modules/adopt/AdoptList';
import AdoptDetail from '../modules/adopt/AdoptDetail';
import AssistRaise from '../modules/assistraise/AssistRaise';
import ReturnVisit from '../modules/returnvisit/ReturnVisit';
import Knowledge from '../modules/knowledge/Knowledge';
import Encyclopedias from '../modules/encyclopedias/Encyclopedias';
import Article from '../modules/article/Article';
import UserCenter from '../modules/user/userIndex';
import AssistDetail from '../modules/assistraise/AssistDetail';
import CreateAdopt from '../modules/adopt/CreateAdppt'
import CreateAssistraise from '../modules/assistraise/CreateAssistraise'

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
            path: '/create-assistraise',
            component: CreateAssistraise
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
        {
            path: '/article/:articleId',
            component: Article
        },
        {
            path: '/adopt-list/:regionId',
            component: AdoptList
        },
        {
            path: '/adopt-detail',
            component: AdoptDetail
        },
        {
            path: '/create-adopt',
            component: CreateAdopt
        },
        {
            path:'/user-center',
            component: UserCenter

        },
        {
            path:'/assist-detail',
            component: AssistDetail
        }
    ],
    mode: 'history'
});
