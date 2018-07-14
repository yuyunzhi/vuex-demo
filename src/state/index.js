import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{   //this.$store.state.num 拿到数据
      num:88
    },
    mutations:{  //this.$store.commit('addNum') 调用函数
      addNum(state){
        state.num = state.num + 1
      },
      minusNum(state){
        state.num = state.num - 40
      }
    },
    actions:{  //this.$store.dispatch('changeNumber') 调用函数
      changeNumber(context){
        context.commit('addNum')
      }
    },
    getters:{  //this.$store.getters.getCount   
        getCount(state){
          return state.num>10?state.num:0
        }
    },
  })