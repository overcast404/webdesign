<template>
  <div id="rents">
    <div id="torent">
      <Button ghost>出借</Button>
    </div>
    <div id="rentlist">
      <div class="book">
        <center>
          <img class="bookimg" src="../../assets/img/library/book.jpg" alt />
          <h3>《我的小阳台四季有花》</h3>
        </center>
        <div class="user">
          <img class="avatar" src="../../assets/img/useravatar/useravatar.png" alt />
          <span>用户名</span>
        </div>
      </div>
      <div class="book">
        <center>
          <img class="bookimg" src="../../assets/img/library/book.jpg" alt />
          <h3>《我的小阳台四季有花》</h3>
        </center>
        <div class="user">
          <img class="avatar" src="../../assets/img/useravatar/useravatar.png" alt />
          <span>用户名</span>
        </div>
      </div>
      <div class="book">
        <center>
          <img class="bookimg" src="../../assets/img/library/book.jpg" alt />
          <h3>《我的小阳台四季有花》</h3>
        </center>
        <div class="user">
          <img class="avatar" src="../../assets/img/useravatar/useravatar.png" alt />
          <span>用户名</span>
        </div>
      </div>
      <div class="book">
        <center>
          <img class="bookimg" src="../../assets/img/library/book.jpg" alt />
          <h3>《我的小阳台四季有花》</h3>
        </center>
        <div class="user">
          <img class="avatar" src="../../assets/img/useravatar/useravatar.png" alt />
          <span>用户名</span>
        </div>
      </div>
      <div class="book">
        <center>
          <img class="bookimg" src="../../assets/img/library/book.jpg" alt />
          <h3>《我的小阳台四季有花》</h3>
        </center>
        <div class="user">
          <img class="avatar" src="../../assets/img/useravatar/useravatar.png" alt />
          <span>用户名</span>
        </div>
      </div>
      <div class="book">
        <center>
          <img class="bookimg" src="../../assets/img/library/book.jpg" alt />
          <h3>《我的小阳台四季有花》</h3>
        </center>
        <div class="user">
          <img class="avatar" src="../../assets/img/useravatar/useravatar.png" alt />
          <span>用户名</span>
        </div>
      </div>
      <div class="book">
        <center>
          <img class="bookimg" src="../../assets/img/library/book.jpg" alt />
          <h3>《我的小阳台四季有花》</h3>
        </center>
        <div class="user">
          <img class="avatar" src="../../assets/img/useravatar/useravatar.png" alt />
          <span>用户名</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#rents {
  width: 900px;
  background-color: rgb(250, 201, 169);
  border-radius: 5px;
  margin: 5px;
  min-height: 800px;
}

#torent {
  margin: 10px;
}
.book {
  margin: 10px;
  width: 200px;
  border:1px solid white;
  border-radius: 5px;
  display:inline-block
}
.bookimg {
  width: 130px;
  margin:10px;
}
.avatar {
  width: 40px;
  border-radius: 50%;
  float: left;
  margin: 5px 10px ; 
}
.user span {
  line-height: 50px;
  margin: 10px;
}
</style>