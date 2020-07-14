<template>
  <div id="publish">
    <div id="inputs">
      <Input placeholder="标题" style="margin-bottom:2px" />
      <Input type="textarea" :rows="4" placeholder="来和大家聊聊吧..." />
      <div id="imgupload">
        <div class="demo-upload-list" v-for="item in uploadList">
          <template v-if="item.status === 'finished'">
            <img :src="item.url" />
            <div class="demo-upload-list-cover">
              <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
              <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
          </template>
          <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
          </template>
        </div>
        <Upload
          ref="upload"
          :show-upload-list="false"
          :on-success="handleSuccess"
          :on-progress="handleProgress"
          :format="['jpg','jpeg','png']"
          :before-upload="handleBeforeUpload"
          multiple
          paste
          type="drag"
          action="http://127.0.0.1:8090/saveimg"
          name="postimg"
          style="display: inline-block;width:58px;"
        >
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
        <Modal title="View Image" v-model="visible">
          <img
            :src="imgName"
            v-if="visible"
            style="width: 100%"
          />
        </Modal>
      </div>
      <div>
        <Button id="publishbtn" ghost>发布</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgName: "",
      visible: false,
      uploadList: []
    };
  },
  methods: {
    handleProgress(event,file,fileList){
      console.log(event)
      console.log(fileList)
      console.log(file.url)
    },
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      console.log(res)
      console.log(file)
      // file.url = "/img";
      // file.name = "lalalal";
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "Up to five pictures can be uploaded."
        });
      }
      return check;
    }
  },
  mounted() {
    this.uploadList = this.$refs.upload.fileList;
  }
};
</script>

<style lang="scss" scoped>
#publish {
  //610
  width: 600px;
  margin: 5px 0;
  background-color: rgb(236, 194, 140);
  padding: 5px 0;
  border-radius: 5px;
}
#inputs {
  width: 98%;
  margin: auto;
}
// #publishbtn{
//   background-color:darkgoldenrod;
// }
#imgupload {
  margin: 5px 0;
}
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>