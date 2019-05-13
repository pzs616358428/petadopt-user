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
import Message from '../modules/user/Information';

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
        {
            path: '/article/:articleId',
            component: Article
        },
        {
            path: '/adopt-list',
            component: AdoptList
        },
        {
            path: '/adopt-detail',
            component: AdoptDetail
        },
        {
            path:'/user-center',
            component: UserCenter,

        }
    ],
    mode: 'history'
});
