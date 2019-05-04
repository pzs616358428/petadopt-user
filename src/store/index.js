import Vue from 'vue';
import Vuex, {Store} from 'vuex';

Vue.use(Vuex);

const store = new Store({
    state: {
        encyclopediasContent: {},
        knowledgeContent: {},
        animalCategoryList: []
    },
    mutations: {
        updateEncyclopediasContent(state, content) {
            state.encyclopediasContent = content;
        },
        updateKnowledgeContent(state, content) {
            state.knowledgeContent = content;
        },
        initAnimalCategoryList(state, list) {
            state.animalCategoryList = list;
        }
    },
    getters: {
        getEncyclopediasContent(state) {
            return state.encyclopediasContent;
        },
        getKnowledgeContent(state) {
            return state.knowledgeContent;
        },
        getAnimalCategoryList(state) {
            return state.animalCategoryList;
        }
    }
});

export default store;
