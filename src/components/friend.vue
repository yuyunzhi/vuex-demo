<template>
 <div>
    <div>我是朋友组件</div>
    <div>从vuex仓库拿到数据==={{getNum}}</div>
    <button @click="changeNum">从mutations改数据</button>
 </div>
</template>

<script>
export default {
    computed:{
      getNum(){
        return this.$store.state.num
      }
    },
    methods:{
        changeNum(){
            this.$store.commit('addNum')
        }
    }
}

</script>

<style scoped>

</style>