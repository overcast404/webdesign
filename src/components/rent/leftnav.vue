<template>
  <div id="leftnav">
    <div id="searchin">
      <h3>检索书籍</h3>
      <AutoComplete
        v-model="searchin"
        :data="searchout"
        @on-search="handleSearch"
        placeholder="我的小阳台四季有花"
        style="width:100%"
        icon="ios-search"
      >
        <a v-for="searchrs in searchout">{{searchrs.name}}</a>
      </AutoComplete>
    </div>
    <template v-for="book in searchout">
      <div id="searchlibrary">
        <center>
          <img :src="'/img/books/'+book.img" alt />
        </center>
        <p>{{book.name}}</p>
        <p>{{book.author}}</p>
        <p>{{book.publisher}}</p>
        <p>{{book.produce}}</p>
        <p>{{book.datetime}}</p>
        <p>{{book.page}}</p>
        <p>{{book.price}}</p>
        <p>{{book.zhuangz}}</p>
        <p>{{book.ISBN}}</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchin: "",
      searchout: []
    };
  },
  methods: {
    handleSearch(value) {
      console.log(value)
      this.axios
        .post("http://127.0.0.1:8090/searchbook", {keyword:value})
        .then(resp => {
          console.log(resp.data);
          this.searchout;
        })
        .catch(error => {
          console.log("检索书籍请求出错！");
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#leftnav {
  width: 250px;
  background-color: rgb(253, 225, 188);
  border-radius: 5px;
  margin: 5px;
  position: sticky;
  top: 0;
  max-height: 420px;
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
  overflow: hidden;
}
#searchlibrary img {
  width: 100px;
  border: 1px double rgb(255, 133, 51);
}
#searchlibrary p {
  white-space: nowrap;
  overflow: hidden;
}
</style>