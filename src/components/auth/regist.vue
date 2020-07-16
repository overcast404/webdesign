<template>
  <div id="regist">
    <router-link to="/">
      <img src="../../assets/auth/login.png" id="registimg" />
    </router-link>
    <div id="registform">
      <Form ref="formvalidate" :model="formvalidate" :rules="rulevalidate" :label-width="80">
        <FormItem label="用户名" prop="name">
          <Input
            type="text"
            v-model="formvalidate.name"
            placeholder="昵称"
            clearable
            autocomplete="on"
          ></Input>
        </FormItem>
        <FormItem label="密码" prop="pass">
          <Input
            type="password"
            v-model="formvalidate.pass"
            placeholder="密码"
            clearable
            @keyup.enter.native="handleSubmit('formvalidate')"
          ></Input>
        </FormItem>
        <FormItem label="确认密码" prop="repass">
          <Input
            type="password"
            v-model="formvalidate.repass"
            placeholder="重新输入密码"
            clearable
            @keyup.enter.native="handleSubmit('formvalidate')"
          ></Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            @click="handleSubmit('formvalidate')"
            ghost
            style="margin-right:10px"
          >注册</Button>
          <Button type="warning" ghost to="/auth">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validateRepass = (rule, value, callback) => {
      if (value !== this.formvalidate.pass) {
        console.log(value);
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      formvalidate: {
        name: "",
        pass: "",
        repass: ""
      },
      rulevalidate: {
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
        ],
        repass: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            validator: validateRepass,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        let registdata={
          name:this.formvalidate.name,
          password:this.formvalidate.pass
        }
        if (valid) {
          this.$Message.success("发送！");
          this.axios
            .post("http://127.0.0.1:8080/User/addUser", registdata)
            .then(resp => {
              if (resp.data.success) {
              localStorage.setItem("id",resp.data.user.id);
              localStorage.setItem("username",resp.data.user.name);
              localStorage.setItem("sign",resp.data.user.sign);
              localStorage.setItem("avatar","/img/useravatar/"+resp.data.user.avator);
              localStorage.setItem("rentnum",resp.data.borrownum);
              localStorage.setItem("collectnum",resp.data.colletnum);
              localStorage.setItem("postnum",resp.data.cardnum);
              this.$Message.success("登录成功！");
              this.$router.push("/");
              }
            });
        } else {
          this.$Message.error("注册信息不规范!");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#regist {
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
#registimg {
  width: 200px;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
#registform {
  width: 490px;
  margin: 5px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
}
</style>