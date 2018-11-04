import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);



const state = {
    isShow:false,
  count:0
}


const getters = {
    isShowMethod(state){
    return state.isShow;
    }
}


const actions = {
    showSlideBar({commit}){
    commit('showBar')
    },
    hideSlideBar({commit}){
    commit('hideBar')
    }
}


const mutations = {
showBar(state){
state.isShow=true;
},
hideBar(state){
state.isShow=false;
}
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
}); 
