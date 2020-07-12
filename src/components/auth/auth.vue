<template>
  <div id="auth">
    <img id="authbg" src="../../assets/auth/authbg.png" alt />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
 
};
</script>

<style lang="scss" scoped>
#authbg {
  position: absolute;
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>