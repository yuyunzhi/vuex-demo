<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>我是父组件</div>
    <br>
    <div>从子组件拿到的数据===={{yyy}}</div>
    <div>从vuex仓库拿到数据==={{getNum}}</div>
    <button @click="changeNum">从mutations改数据</button>
    <hr>
    <son :msg="xxx" @data="fromSon($event)"></son>
    <hr>
    <friend></friend>
  </div>
</template>

<script>

import son from './son'
import friend from './friend'

export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        xxx:"我是父亲，给你100元",
        yyy:''
      }
    },
    computed:{
      getNum(){
        return this.$store.state.num
      }
    },
    methods:{
      fromSon(data){
        this.yyy=data
        alert(data)
      },
      changeNum(){
        this.$store.commit('addNum')
      }
    },
    components:{
      son,
      friend,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
