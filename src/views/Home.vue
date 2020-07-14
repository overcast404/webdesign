<template>
  <div id="home">
    <topnav></topnav>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import topnav from "../components/nav/top";
import bottom from "../components/nav/bottom";
export default {
  beforeCreate(){
    console.log("===============")
    if(!localStorage.getItem("username"))
    this.axios.get("http://127.0.0.1:8090/getUserByid").then(resp=>{
      console.log(resp.data)
      localStorage.setItem("username",resp.data.name)
      localStorage.setItem("avatar","/img/"+resp.data.avator)
      localStorage.setItem("sign","/img/"+resp.data.sign)
    })
  },
  components: {
    topnav,
    bottom
  }
};
</script>
<style lang="scss">
#home {
  background-color:cornsilk;
}
</style>
