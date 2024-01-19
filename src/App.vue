<template>  
  <div id="app">  
    <!-- <router-link to="/DianZhanWeiHu.vue">去登录页</router-link> -->
      <myAbcComponent></myAbcComponent>  
      
    </div>

       
</template>  
<script>  
  
import myAbcComponent from './components/myAbcComponent.vue';  

export default {  
  name:'app', 
  components:{  
    'myAbcComponent':myAbcComponent,  //引入组件  
  }  
}  
  
</script>  
<style>  
  
  
</style>