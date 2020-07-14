<template>
  <div id="rightnav">
    <div id="hotposts">
      <h3>热门话题：</h3>
      <template v-for="post in tenposts">
        <div class="hotpost">
          <router-link to="#" class="a" :style="{fontSize:fontsize[index]+'px'}">{{post}}</router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let tenposts = [];
    this.axios
      .post("http://127.0.0.1:8090/getCardHot")
      .then(resp => {
        tenposts = resp.data;
        console.log(tenposts);
      })
      .catch(error => {
        console.log(error);
      });
    return {
      tenposts,
      fontsize: [20, 19, 18, 16, 16, 16, 14, 14, 14, 12]
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
.hotpost {
  overflow: hidden;
}
.a {
  color: darkslategrey;
  white-space: nowrap;
}
</style>