<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>修改密码</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20">
      <el-col :span="10">
        <el-form :model="dataForm" :rules="rules" ref="form" label-width="100px">
          <el-form-item label="输入新密码" prop="password">
            <el-input type="password" placeholder="密码长度要大于6,建议数字+字母+特殊字符(至少是其中2种组合)"
                      v-model="dataForm.password"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码" prop="repassword">
            <el-input type="password" v-model="dataForm.repassword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveForm()">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

  </div>
</template>

<script>

  import userApi from '@/api/admin/user'
  import http from 'axios'

  export default {
    data() {
      // 密码强度校验
      let validatePass1 = (rule, value, callback) => {

        let regexS = /^\d*$/, //数字
          regexZ = /^[a-zA-Z]+$/, //字母
          regexT = /^\W+$/, //特殊字符
          regexZT = /^\D*$/,//匹配任意非数字的字符
          regexST = /^[\d\W]*$/,//数字+特殊字符
          regexZS = /^\w*$/,//匹配字母+数字
          regexZST = /^[\w\W]*$/;

        let result = true

        if (regexS.test(value)) {
          result = false
        } else if (regexZ.test(value)) {
          result = false
        } else if (regexZ.test(value)) {
          result = false
        } else if (regexT.test(value)) {
          result = false
        }

        if (value.length < 6 || !result) {
          callback(new Error('密码强度低，不允许保存'));
        } else {
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        // 用一个等于号，不判断类型
        if (value != this.dataForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        dataForm: {
          password: null,
          repassword: null
        },
        rules: {
          password: [
            {required: true, message: '请输入密码'},
            {validator: validatePass1}
          ],
          repassword: [
            {required: true, message: '请再次输入密码'},
            {validator: validatePass2}
          ]
        }

      }
    },
    created() {
    },
    methods: {
      saveForm: function () {
        this.$refs['form'].validate((valid) => {
          if (!valid) {
            return
          }
          this.save()
        })
      },
      save: function () {
        let vm = this
        let newPassword = this.dataForm.password

        let Url = URL_ROOT + 'api/account/change_password';
        http.post(Url, {password: newPassword}).then(json => {
          console.log(json)
          if (json.status == 200) {
            this.$message({
              message: '密码修改成功',
              type: 'success'
            });
            setTimeout(() => {
              this.$router.push('/');
            }, 700)

          } else {
            this.$message({
              message: json.statusText,
              type: 'error'
            });
          }
        });
      },
    }

  }
</script>

