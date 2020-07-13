<template>
  <div id="rentpage">
      <leftnav></leftnav>
      <rents></rents>
  </div>
</template>

<script>
import leftnav from './leftnav'
import rents from './rents'
export default {
  components:{
    leftnav,
    rents
  }
};
</script>

<style lang="scss" scoped>
#rentpage{
  width:1150px;
  margin:auto;
  display:flex;
  flex-direction: row;
}
</style>