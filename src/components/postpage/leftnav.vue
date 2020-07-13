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
            <td>1</td>
            <td>
              <Divider type="vertical" />
            </td>
            <td>2</td>
            <td>
              <Divider type="vertical" />
            </td>
            <td>3</td>
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
    return {
      avatar:localStorage.getItem("avatar"),
      username:localStorage.getItem("username")
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