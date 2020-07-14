<template>
  <div id="leftnav">
    <template v-if="username">
      <div id="in">
        <img id="avatar" :src="avatar" alt />
        <h2>{{username}}</h2>
      </div>
      <div id="usertable">
        <table>
          <tr>
            <td>收藏</td>
            <td>
              <Divider type="vertical" />
            </td>
            <td>借阅</td>
            <td>
              <Divider type="vertical" />
            </td>
            <td>帖子</td>
          </tr>
          <tr>
            <td>{{nums.collectnum}}</td>
            <td>
              <Divider type="vertical" />
            </td>
            <td>{{nums.rentnum}}</td>
            <td>
              <Divider type="vertical" />
            </td>
            <td>{{nums.postnum}}</td>
          </tr>
        </table>
      </div>
    </template>
    <template v-else>
      <Button type="warning" ghost id="login" to="/auth">登录</Button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    let userdata={
      collectnum:"",
      rentnum:"",
      postnum:"",
      sign:"",
      
    }
    // this.axios.post("#").then(resp=>{

    // }).catch(error=>{
    //   console.log(error)
    // })
    return {
      avatar:localStorage.getItem("avatar"),
      username:localStorage.getItem("username"),
      nums
    };
  }
};
</script>

<style lang="scss" scoped>
#leftnav {
  //270
  width: 260px;
  height: 220px;
  background-color: rgb(250, 226, 195);
  border-radius: 5px;
  margin: 5px;
  position: sticky;
  top: 0;
}
#login{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#in {
  width: 240px;
  text-align: center;
  margin: 10px auto;
}
#avatar {
  width: 100px;
  border-radius: 5px;
}
#usertable {
  text-align: center;
}
#usertable table {
  margin: auto;
}
</style>