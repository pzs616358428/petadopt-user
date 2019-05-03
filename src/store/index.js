import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Store({
    state: {
        encyclopediasContent: {},
        knowledgeContent: {}
    },
    mutations: {
        updateEncyclopediasContent(state, pageNum, animalCategoryName) {
            axios.get('/petadopt/member/article/articleList').then((res) => {
            });
        },
        updateKnowledgeContent(state, pageNum, animalCategoryName) {
            axios.get('/petadopt/member/article/articleList').then((res) => {
            });
        }
    }
});

export default store;
