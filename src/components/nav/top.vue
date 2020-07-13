<template>
  <div id="nav">
    <img src="../../assets/img/logo.png" alt="介是logo" id="logo" />
    <span>
      <router-link class="a" to="/">首页</router-link>
      <router-link class="a" to="/rent">校园借阅</router-link>
      <router-link class="a" to="/library">图书馆</router-link>
    </span>

    <template v-if="avatar">
      <a @click="logout" id="right">
        <img class="avatar" :src="avatar" alt="介是用户头像" title="点击注销" />
      </a>
    </template>
    <template v-else>
      <div id="right">
        <Button type="warning" ghost shape="circle" to="/auth">登录</Button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: localStorage.getItem("avatar")
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.go(0);
    }
  }
};
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