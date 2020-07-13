<template>
  <div id="page">
    <leftnav></leftnav>
    <div>
        <publish v-if="username"></publish>
         <posts></posts>
    </div>
    <rightnav></rightnav>
  </div>
</template>

<script>
import posts from "./posts";
import leftnav from "./leftnav";
import rightnav from "./rightnav";
import publish from "./publish";
export default {
  data(){
    return{
      username:localStorage.getItem("username")
    }
  },
  components: {
    posts,
    leftnav,
    rightnav,
    publish
  }
};
</script>

<style lang="scss">
#page {
  width:1140px;
  margin:auto;
  display:flex;
  flex-direction: row;
}
</style>