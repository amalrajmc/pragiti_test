import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    list: []
  },
  getters:{
    countlist:(state)=>{
      return state.list.length
    },
    newlist:(state)=>(products)=>{

      return products.map((product)=>{

          return (state.list.includes(product.id))?({...product,active:true}):({...product,active:false})


      })
    }
  },
  mutations: {
    add_to_cart:(state,product)=>{
      state.list.push(product.id)
    },
    remove_from_cart:(state,product)=>{
      state.list=state.list.filter(item => item !== product.id)
    }
  },
  actions: {
    add_to_cart:(context,payload)=>{
      context.commit("add_to_cart",payload)
    },
    remove_from_cart:(context,payload)=>{
      context.commit("remove_from_cart",payload)
    }

  },
  modules: {
  }
})
