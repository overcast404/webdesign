<template>
  <div id="publish">
    <div id="inputs">
      <Input placeholder="标题" style="margin-bottom:2px"/>
      <Input type="textarea" :rows="4" placeholder="来和大家聊聊吧..." />

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#publish {
  //610
  width: 600px;
  margin: 5px 0;
  background-color:tan;
  padding: 5px 0;
  border-radius: 5px;
}
#inputs {
  width: 98%;
  margin:auto;
  
}
</style>