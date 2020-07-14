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
        <Option v-for="(searchrs,bookindex) in searchout" :key="bookindex">{{searchrs.name}}</Option>
      </AutoComplete>
    </div>
      <div id="searchlibrary">
        <center>
          <img :src="'/img/books/'+thebook.img" alt />
        </center>
        <p>{{thebook.name}}</p>
        <p>{{thebook.author}}</p>
        <p>{{thebook.publisher}}</p>
        <p>{{thebook.produce}}</p>
        <p>{{thebook.datetime}}</p>
        <p>{{thebook.page}}</p>
        <p>{{thebook.price}}</p>
        <p>{{thebook.zhuangz}}</p>
        <p>{{thebook.ISBN}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchin: "",
      searchout: [],
      thebook:{}
    };
  },
  methods: {
    handleSearch(value) {
      console.log(value)
      this.axios
        .post("http://127.0.0.1:8090/searchbook",{"keyword":value})
        .then(resp => {
          this.searchout=resp.data;
          this.thebook=this.searchout[0];
          console.log(this.searchout);
          console.log(this.thebook)
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