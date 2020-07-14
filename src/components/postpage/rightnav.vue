<template>
  <div id="rightnav">
    <div id="hotposts">
      <h3>热门话题：</h3>
      <div v-for="(post,index) in tenposts" class="hotpost">
        <router-link to="#" class="a" :style="{fontSize:fontsize[index]+'px'}">{{post.posttitle}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let tenposts
    this.axios.get("").then(resp=>{
      tenposts=resp.data
    }).catch(error=>{
      console.log(error)
    })
    return {
      tenposts: [
        { posttitle: "《游戏的终结》" },
        { posttitle: "《我将成为明月》" },
        { posttitle: "《将军族》" },
        { posttitle: "《两京十五日》" },
        { posttitle: "《地下春天》" },
        { posttitle: "《地下春天》" },
        { posttitle: "《地下春天》" },
        { posttitle: "《地下春天》" },
        { posttitle: "《地下春天》" },
        { posttitle: "《地下春天》" },
      ],
      fontsize: [20,19,18,16,16,16,14,14,14,12],
    };
  }
};
</script>

<style lang="scss" scoped>
#rightnav {
  //270
  width: 260px;
  height: 280px;
  background-color: rgb(253, 224, 185);
  margin: 5px;
  border-radius: 5px;
  position: sticky;
  top: 0;
}
#hotposts {
  margin: 10px;
}
.hotpost{
    overflow: hidden;
}
.a{
    color: darkslategrey;
    white-space: nowrap;
}
</style>