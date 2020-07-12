<template>
  <div id="posts">
    <div id="classify">

    </div>
    <div class="onepost">
      <div class="head">
        <router-link to="#">
          <img src="../../assets/img/useravatar/useravatar.png" class="avatar" />
          <span class="username">用户名</span>
        </router-link>
      </div>
      <div class="content">
        <router-link to="#">
          <div>
            <h2>这里是标题</h2>
          </div>
          <pre>    这里是内容垃圾费打卡机疯狂垃圾分类卡解放路卡机了会计法练级电极法欧司朗九分裤辣椒粉卡拉胶联机
九分裤大了就分开了
          </pre>
        </router-link>
        <div class="postimgs">
          <img class="postimg" src="../../assets/img/postpage/posts/postimg.jpg" alt="这里是图片" />
          <img class="postimg" src="../../assets/img/postpage/posts/postimg.jpg" alt="这里是图片" />
          <img class="postimg" src="../../assets/img/postpage/posts/postimg.jpg" alt="这里是图片" />
          <img class="postimg" src="../../assets/img/postpage/posts/postimg.jpg" alt="这里是图片" />
          <img class="postimg" src="../../assets/img/postpage/posts/postimg.jpg" alt="这里是图片" />
          <img class="postimg" src="../../assets/img/postpage/posts/postimg.jpg" alt="这里是图片" />
        </div>
        <div class="option">
          <a href="">
            <img src="../../assets/img/postpage/posts/like.png" alt="">
          </a>
          <a href="">
            <img src="../../assets/img/postpage/posts/comment.png" alt="">
          </a>
          <a href="">
            <img src="../../assets/img/postpage/posts/collect.png" alt="">
          </a>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  background-color: rgb(228, 177, 133);
  border-radius: 5px;
  margin: 5px 0 -10px 0;
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
.content a{
  text-decoration: none;
  color:rgba(0, 0, 0, 0.651);
}
.content pre {
  white-space: pre-wrap;
  line-height: 20px;
  height: 60px;
  overflow: hidden;
}
.postimg {
  width: 180px;
  margin: 6.6px;
}
.postimg img {
  width: 100%;
  border-radius: 10px;
}
.option img{
  width:30px;
  margin:0 80px;
}
</style>