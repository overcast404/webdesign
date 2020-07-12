<template>
  <div id="regist">
    <img src="../../assets/auth/login.png" id="registimg" />
    <div id="registform">
      <Form ref="formValidata" :model="formValidata" :rules="ruleValidata" :label-width="80">
        <FormItem label="用户名" prop="name">
          <Input
            type="text"
            v-model="formValidata.name"
            placeholder="昵称"
            clearable
            autocomplete="on"
          ></Input>
        </FormItem>
        <FormItem label="密码" prop="pass">
          <Input
            type="password"
            v-model="formValidata.pass"
            placeholder="密码"
            clearable
            @keyup.enter.native="handleSubmit('formValidata')"
          ></Input>
        </FormItem>
        <FormItem label="确认密码" prop="repass">
          <Input
            type="password"
            v-model="formValidata.repass"
            placeholder="重新输入密码"
            clearable
            @keyup.enter.native="handleSubmit('formValidata')"
          ></Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            @click="handleSubmit('formValidata')"
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
  name: "",
  pass: "",
  repass: "",
  data() {
      const validataRepass=(rule,value,callback)=>{
          if(valud!==formValidata)
      }
    return {
      formValidata: {
        name: "",
        pass: "",
        repass: ""
      },
      ruleValidata: {
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
            validator: validataRepass,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validata(valid => {
        if (valid) {
          this.$Message.success("发送！");
          this.axios
            .post("http://127.0.0.1:8080/User/login", name)
            .then(resp => {
              if (resp.data.Msg) {
                console.log(resp.data.Msg);
                this.$Message.success("登录成功！");
              }
            });
        } else {
          this.$Message.error("Fail!");
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