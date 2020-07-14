<template>
  <div id="home">
    <topnav></topnav>
    <router-view />
    <bottom></bottom>
  </div>
</template>

<script>
import topnav from "../components/nav/top";
import bottom from "../components/nav/bottom";
export default {
  data(){
    console.log("===============");
    let id=localStorage.getItem("id")
    if (!localStorage.getItem("username")) {
      this.axios
        .post("http://127.0.0.1:8090/getUserByid", {"id":id})
        .then(resp => {
          console.log(resp.data);
          localStorage.setItem("username", resp.data.name);
          localStorage.setItem("avatar", "/img/useravatar/" + resp.data.avator);
          localStorage.setItem("sign", resp.data.sign);
        });
    }
    return{
      
    }
  },
  components: {
    topnav,
    bottom
  }
};
</script>
<style lang="scss">
#home {
  background-color: cornsilk;
}
</style>
