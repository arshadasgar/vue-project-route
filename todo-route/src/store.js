import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 10,
        examplename: '',
        pendingTasks: {
            "pending": [{
                    "id": 1,
                    "title": "First task"
                },
                {
                    "id": 2,
                    "title": "Second task"
                },
                {
                    "id": 3,
                    "title": "Third task"
                }
            ]
        }
        
    },
    getters: {
        doubleTheClicks: state => {
            return state.counter * 2
        }
    },
    mutations: {
        incrementCounter: state => {
            state.counter++
        },
        changeName : (state, newName) => {
            state.examplename = newName
        }
    }
})