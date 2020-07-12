<template>
  <div id="login">
    <img src="../../assets/auth/login.png" alt id="loginimg" />
    <div id="loginform">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="name">
          <Input
            type="text"
            v-model="formValidate.name"
            placeholder="昵称"
            clearable
            autocomplete="on"
          ></Input>
        </FormItem>
        <FormItem label="密码" prop="pass">
          <Input
            type="password"
            v-model="formValidate.pass"
            placeholder="密码"
            clearable
            @keyup.enter.native="handleSubmit('formValidate')"
          ></Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            @click="handleSubmit('formValidate')"
            ghost
            style="margin-right:10px"
          >登录</Button>
          <Button type="warning">注册</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        pass: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        pass: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("发送！");
          axios.post("http://127.0.0.1:8080/User/login", name).then(resp => {
            if (resp.data.Msg) {
              console.log(resp.data.Msg);
              this.$Message.success("登录成功！");
            }
          });
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
#login {
  width: 700px;
  height: 400px;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: 20px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#loginimg {
  width: 200px;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
#loginform {
  width: 490px;
  margin: 5px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
}
</style>