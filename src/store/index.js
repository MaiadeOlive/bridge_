import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    status: null,
    result: null
  },
  getters: {
    resposta: state => {
      return state.result 
    } 
  },
  mutations: {
    response (state, result) {
      state.result = result
    }
  },
  actions: {
    calculate ({ commit }, urlRoute) {
      return new Promise((resolve) => {
        axios.get(urlRoute, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }) 
          .then(({data})=> {
            const result = data

            commit('response', result)
            resolve(result)
          })
          .catch((err) => {
          console.log('Requisição falhou', err.response)
        })
      })
    }
  }
})

