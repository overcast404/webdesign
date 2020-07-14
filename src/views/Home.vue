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
