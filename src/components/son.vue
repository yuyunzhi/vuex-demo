<template>
 <div>
    <div>我是儿子组件</div>
    <div>从父组件拿到的数据==={{msg}}</div>
    <div>从vuex仓库拿到数据==={{getNum}}</div>
    <button @click="changeNum">从mutations改数据</button>
    <button @click="changeNumAct">从actions改数据</button>
    <br>
    <button @click="tofather">给父组件发送数据</button>
 </div>
</template>


<script>
export default {
     props:['msg'],
     name:'son',
     data(){
         return{
             sonMessage:'还给父亲10元'
         }
     },
    computed:{
      getNum(){
        return this.$store.getters.getCount 
      }
    },
     methods:{
        tofather(){
            this.$emit('data',this.sonMessage)
         },
        changeNum(){
            this.$store.commit('minusNum')
        },
        changeNumAct(){
            this.$store.dispatch('changeNumber')
        }
     }

}

</script>

<style scoped>

</style>