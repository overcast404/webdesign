<template>
  <div id="leftnav">
    <div id="searchin">
      <h3>检索书籍</h3>
      <Input search placeholder="我的小阳台四季有花"></Input>
    </div>
    <div id="searchlibrary">
      <center>
        <img src="../../assets/img/library/book.jpg" alt />
      </center>
      <p>书名：《我的小阳台四季有花》</p>
      <p>作者：王清欢</p>
      <p>出版社：四川美术出版社的/阳光博客</p>
      <p>出品方：阳光博客</p>
      <p>出版年：2020-7</p>
      <p>页数：260</p>
      <p>定价：78.00元</p>
      <p>装帧：平装</p>
      <p>ISBN：9787541092305</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#leftnav {
  width: 250px;
  background-color: rgb(253, 209, 152);
  border-radius: 5px;
  margin: 5px;
  position: sticky;
  top: 0;
  max-height:420px;
  overflow: hidden;
}
#searchin {
  margin: 5px;
}
#searchin h3 {
  margin: 10px 5px;
}
#searchlibrary {
  margin: 5px;
}
#searchlibrary img {
  width: 100px;
border:1px double rgb(255, 133, 51)
}
#searchlibrary p{
  white-space: nowrap;
  overflow: hidden;
}
</style>