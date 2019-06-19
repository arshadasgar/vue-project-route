import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 10,
        examplename: '',
        pendingTasks: [
            {
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
        ],
        completedTasks: []

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
        changeName: (state, newName) => {
            state.examplename = newName
        },
        addTaskToPendingTasks: (state, task) => {
            state.pendingTasks.push(task)
        },
        addTaskToCompletedTasks: (state, task) => {
            state.completedTasks.push(task)
        },
        removeTaskFromPendingTasks: (state, index) => {
            state.pendingTasks.splice(index, 1)
        },
        removeTaskFromCompletedTasks: (state, index) => {
            state.completedTasks.splice(index, 1)
        }
    }
})