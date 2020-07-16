<template>
  <div id="rentpage">
    <div id="rentconfirm" v-if="rentstatus" :style="{backgroundImg:'/img/books/'+thebook.img}">
      <h2 style="margin:10px">摆上书架</h2>
      <center>
        <img :src="'/img/books/'+thebook.img" alt />
        <p>书名：{{thebook.name}}</p>
        <p>作者：{{thebook.author}}</p>
        <p>出版社：{{thebook.publisher}}</p>
        <p>出品方：{{thebook.produce}}</p>
        <p>出版年：{{thebook.datetime}}</p>
        <p>页数：{{thebook.page}}</p>
        <p>定价：{{thebook.price}}</p>
        <p>装帧：{{thebook.zhuangz}}</p>
        <p>ISBN：{{thebook.isbn}}</p>
        <h4 style="margin:10px 0 0;color:red">确定要将这本书摆上书架吗？</h4>
        <Button type="warning" style="margin:30px 40px 0" @click="sharebook">确认</Button>
        <Button type="warning" @click="cancel" style="margin:30px 40px 0">取消</Button>
      </center>
    </div>
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
          <p>ISBN：{{thebook.isbn}}</p>
        </template>
        <template v-else>
          <p id="res">无结果</p>
        </template>
      </div>
    </div>
    <div id="rents">
      <div id="torent">
        <Button ghost @click="toshare">出借</Button>
        <div id="torentbox"></div>
      </div>
      <div id="rentlist">
        <template v-for="(thisbook,index) in bookshelf">
          <div class="book">
            <a @click="want(index)">
              <center>
                <img class="bookimg" :src="'/img/books/'+thisbook.img" alt />
                <h3>{{thisbook.bookname}}</h3>
              </center>
              <div class="user">
                <img class="avatar" src="../../assets/img/useravatar/useravatar.png" alt />
                <span>{{thisbook.username}}</span>
              </div>
            </a>
          </div>
        </template>
      </div>
      <div id="iswant" v-if="wanted">
        <center>
          <h4 style="margin:10px 0 0;color:red">要借这本书吗？</h4>
          <Button type="warning" style="margin:30px 40px 0" @click="wantbook">确认</Button>
          <Button type="warning" @click="cancel" style="margin:30px 40px 0">取消</Button>
        </center>
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
      thebook: {},
      bookshelf: [],
      rentstatus: false,
      wanted: false,
      whichwant: ""
    };
  },
  methods: {
    handleSearch(value) {
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
    sharebook() {
      let id = localStorage.getItem("id");
      this.axios
        .post("http://127.0.0.1:8090/addborrow", {
          bookname: this.searchin,
          useid: id
        })
        .then(resp => {
          console.log(resp.data);
          this.rentstatus = false;
          this.searchin = this.searchin;
          this.$Message.success("已放上书架！");
        })
        .catch(error => {
          console.log("出借失败！");
          console.log(error);
        });
    },
    toshare() {
      this.rentstatus = true;
    },
    cancel() {
      this.rentstatus = false;
      this.wanted = false;
    },
    wantbook() {
      let wantdata = {
        useid: localStorage.getItem("id"),
        borrowuserid: this.bookshelf[this.whichwant].id,
        bookname: this.bookshelf[this.whichwant].bookname
      };
      console.log(wantdata);
      this.axios
        .post("http://127.0.0.1:8090/makerecord", wantdata)
        .then(resp => {
          this.searchin = this.searchin;
          this.wanted = false;
        });
    },
    want(index) {
      this.whichwant = index;
      this.wanted = true;
    }
  },
  watch: {
    searchin: function() {
      this.axios
        .post("http://127.0.0.1:8090/searchborrow", { bookname: this.searchin })
        .then(resp => {
          console.log(resp.data);
          this.bookshelf = resp.data;
        })
        .catch(error => {
          console.log("出错了！！！！");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#rentpage {
  width: 1150px;
  margin: auto;
  display: flex;
  flex-direction: row;
}
#res {
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
#rentconfirm {
  margin: 5px;
  background-color: rgb(255, 172, 95);
  overflow: hidden;
  width: 400px;
  height: 520px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#rentconfirm img {
  width: 100px;
  border: 1px double rgb(255, 133, 51);
}
#rentconfirm p {
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
a {
  color: #515a6e;
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
#iswant {
  margin: 5px;
  overflow: hidden;
  background-color: rgb(255, 172, 95);
  width: 400px;
  height: 300px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>