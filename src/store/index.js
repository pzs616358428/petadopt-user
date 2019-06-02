import Vue from 'vue';
import Vuex, {Store} from 'vuex';

Vue.use(Vuex);

const store = new Store({
    state: {
        encyclopediasContent: {},
        knowledgeContent: {},
        assistContent: {},
        animalCategoryList: []
    },
    mutations: {
        updateEncyclopediasContent(state, content) {
            state.encyclopediasContent = content;
        },
        updateKnowledgeContent(state, content) {
            state.knowledgeContent = content;
        },
        updateAssistContent(state, content) {
            state.assistContent = content;
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
        getAssistContent(state) {
            return state.assistContent;
        },
        getAnimalCategoryList(state) {
            return state.animalCategoryList;
        }
    }
});

export default store;
