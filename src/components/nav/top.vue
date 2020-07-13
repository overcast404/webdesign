<template>
  <div id="nav">
    <img src="../../assets/img/logo.png" alt="介是logo" id="logo" />
    <span>
      <router-link class="a" to="/">首页</router-link>
      <router-link class="a" to="/rent">校园借阅</router-link>
      <router-link class="a" to="/library">图书馆</router-link>
    </span>

    <router-link to="/auth" id="right">
      <img class="avatar" src="../../assets/img/useravatar/useravatar.png" alt="介是用户头像" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav {
  background-color: rgb(255, 255, 255);
  height: 60px;
  line-height: 60px;
}
.avatar {
  width: 50px;
  margin: 5px 0 0 0;
  border-radius: 50%;
}
#right {
  float: right;
  margin: 0 20px;
  height: 60px;
}
#logo {
  width: 60px;
  float: left;
}
.a {
  padding: 20px;
  color: rgba(0, 0, 0, 0.658);
}
.a:hover {
  background-color: rgb(179, 184, 185);
  color: white;
}
</style>