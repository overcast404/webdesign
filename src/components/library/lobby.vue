<template>
  <div id="lobby">
    <div id="lobbysearch">
      <AutoComplete
          v-model="searchin"
          @on-search="handleSearch"
          placeholder="我的小阳台四季有花"
          style="width:100%"
          icon="ios-search"
        >
          <Option
            v-for="searchrs in searchout"
            :value="searchrs.name"
            :key="searchrs.id"
          >{{searchrs.name}}</Option>
        </AutoComplete>
      <div id="ladder">
        <p>
          <a class="big">文学:</a>
          <a>/小说</a>
          <a>/随笔</a>
          <a>/散文</a>
          <a>/诗歌</a>
          <a>/童话</a>
          <a>/名著</a>
          <a>/港台</a>
        </p>
        <p>
          <a class="big">流行:</a>
          <a>/漫画</a>
          <a>/推理</a>
          <a>/绘本</a>
          <a>/青春</a>
          <a>/科幻</a>
          <a>/言情</a>
        </p>
        <p>
          <a class="big">文化:</a>
          <a>/历史</a>
          <a>/哲学</a>
          <a>/传记</a>
          <a>/设计</a>
          <a>/建筑</a>
        </p>
        <p>
          <a class="big">生活:</a>
          <a>/旅行</a>
          <a>/励志</a>
          <a>/教育</a>
          <a>/职场</a>
          <a>/美食</a>
          <a>/灵修</a>
        </p>
      </div>
    </div>
    <div id="bookrack">
      <template v-for="(book,index) in books">
        <div class="book">
          <img :src="'/img/books/'+book.img" alt />
          <h5>{{book.name}}</h5>
          <h6>{{book.author}}</h6>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let books = [];
    this.axios
      .post("http://127.0.0.1:8090/getbooklist")
      .then(resp => {
        this.books = resp.data;
        console.log(books)
      })
      .catch(error => {
        console.log("获取图书列表失败！");
        console.log(error);
      });
    return {
      books
    };
  }
};
</script>

<style lang="scss" scoped>
#lobbysearch {
  width: 900px;
  min-height: 150px;
  background-color: rgb(250, 214, 168);
  padding: 5px;
  border-radius: 5px;
  margin: 5px auto;
}
#bookrack {
  width: 900px;
  // min-height: 650px;
  background-color: rgb(253, 204, 158);
  border-radius: 5px;
  margin: 5px auto;
}
#ladder a {
  color: dimgray;
  margin: 0 5px;
}
#ladder p {
  line-height: 30px;
}
.big {
  font-size: 15px;
  margin: 0 10px;
}
.book img {
  width: 100px;
}
.book {
  width: 170px;
  text-align: center;
  border: 1px solid white;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  margin: 5px;
}
</style>