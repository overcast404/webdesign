<template>
  <div id="posts">
    <div id="classify">
      <a href>
        <img src="../../assets/img/postpage/new.png" alt />
      </a>
      <a href>
        <img src="../../assets/img/postpage/hot.png" alt />
      </a>
      <a v-if="avatar" href>
        <img src="../../assets/img/postpage/lover.png" alt />
      </a>
    </div>
    <template v-for="(post,index) in posts">
      <div class="onepost">
        <div class="head">
          <router-link to="#">
            <img :src="'/img/useravatar/'+post.img" class="avatar" />
            <span class="username">{{post.username}}</span>
          </router-link>
          <span style="float:right">浏览次数：{{post.scanum}}</span>
        </div>
        <div class="content">
          <router-link to="#">
            <div>
              <h2>{{post.title}}</h2>
            </div>
            <pre>{{post.content}}</pre>
          </router-link>
          <template class="postimgs" v-for="(img,imgdex) in posts[index].avator">
            <img class="postimg" :src="'/img/postimg/'+img" alt="这里是图片" />
          </template>
          <div class="option">
            <a @click="like(index)">
                <img src="../../assets/img/postpage/posts/like.png" :title="post.id" alt />
            </a>

            <a @click="like(post.id)">
              <img src="../../assets/img/postpage/posts/comment.png" :title="post.id" alt />
            </a>

            <a @click="collect(index)">
                <img src="../../assets/img/postpage/posts/collect.png" :title="post.id" alt />
            </a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    let posts = [];
    this.axios
      .get("http://127.0.0.1:8090/getCardList")
      .then(resp => {
        this.posts = resp.data;
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
    return {
      posts,
      avatar: localStorage.getItem("avatar"),
      likes: true,
      collects: true
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
#posts {
  width: 600px;
  margin: 0 0 0 0;
}
.avatar {
  width: 40px;
  border-radius: 50%;
  float: left;
  // padding: 10px;
}
#classify {
  height: 50px;
  background-color: rgb(241, 189, 143);
  border-radius: 5px;
  margin: 5px 0 -10px 0;
}
#classify img {
  width: 40px;
  // float: left;
  margin: 5px;
}
#classify a {
  margin: 0 15px;
}
.onepost {
  margin: 5px 0;
  background-color: wheat;
  border-radius: 5px;
}
.onepost {
  text-decoration: none;
}
.head {
  margin: 15px;
  height: 40px;
  line-height: 40px;
  padding: 10px 0;
}
.username {
  padding: 0 10px;
  color: dimgrey;
}
.content {
  margin: 10px;
}
.content a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.651);
}
.content pre {
  white-space: pre-wrap;
  line-height: 20px;
  overflow: hidden;
  max-height: 60px;
}
.postimg {
  width: 180px;
  margin: 6.6px;
}
.postimg img {
  width: 100%;
  border-radius: 10px;
}
.option img {
  width: 30px;
  margin: 0 80px;
}
</style>