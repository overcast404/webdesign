<template>
  <div id="rentpage">
      <div id="leftnav">
    <div id="searchin">
      <h3>检索书籍</h3>
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
    </div>
    <div id="searchlibrary">
      <template v-if="thebook.name">
        <center>
          <img :src="'/img/books/'+thebook.img" alt />
        </center>
        <p>书名：{{thebook.name}}</p>
        <p>作者：{{thebook.author}}</p>
        <p>出版社：{{thebook.publisher}}</p>
        <p>出品方：{{thebook.produce}}</p>
        <p>出版年：{{thebook.datetime}}</p>
        <p>页数：{{thebook.page}}</p>
        <p>定价：{{thebook.price}}</p>
        <p>装帧：{{thebook.zhuangz}}</p>
        <p>ISBN：{{thebook.ISBN}}</p>
      </template>
      <template v-else>
        <p id="res">无结果</p>
      </template>
    </div>
  </div>
      <div id="rents">
    <div id="torent">
      <Button ghost>出借</Button>
      <div id="torentbox"></div>
    </div>
    <div id="rentlist">
      <template v-for="thisbook in bookshelf">
        <div class="book">
        <center>
          <img class="bookimg" :src="'/img/books/'+thisbook.img" alt />
          <h3>{{thisbook.name}}</h3>
        </center>
        <div class="user">
          <img class="avatar" src="../../assets/img/useravatar/useravatar.png" alt />
          <span>用户名</span>
        </div>
      </div>
      </template>
      
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchin: "",
      searchout: [],
      thebook: {}
    };
  },
  methods: {
    handleSearch(value) {
      console.log(value);
      this.axios
        .post("http://127.0.0.1:8090/searchbook", { keyword: value })
        .then(resp => {
          this.searchout = resp.data;
          this.thebook = this.searchout[0];
        })
        .catch(error => {
          console.log("检索书籍请求出错！");
          console.log(error);
        });
    },
    computed:{
      bookshelf(){
        this.axios.post("http://127.0.0.1:8090/searchborrow",this.searchin).then(resp=>{
          console.log(resp.data)
          return resp.data
        }).catch(error=>{
          return error
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#rentpage{
  width:1150px;
  margin:auto;
  display:flex;
  flex-direction: row;
}
#res{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
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
  border: 1px solid white;
  border-radius: 5px;
  display: inline-block;
}
.bookimg {
  width: 130px;
  margin: 10px;
}
.avatar {
  width: 40px;
  border-radius: 50%;
  float: left;
  margin: 5px 10px;
}
.user span {
  line-height: 50px;
  margin: 10px;
}
</style>