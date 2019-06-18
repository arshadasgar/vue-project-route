import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 10
    },
    getters: {
        doubleTheClicks: state => {
            return state.counter * 2
        }
    },
    mutations: {
        incrementCounter: state => {
            state.counter++
        }
    }
})