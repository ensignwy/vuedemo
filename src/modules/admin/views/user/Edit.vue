<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item v-if="create">新增用户</el-breadcrumb-item>
      <el-breadcrumb-item v-else>编辑用户</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row :gutter="20">
      <el-col :span="10">
        <el-form :model="dataForm" :rules="rules" ref="form" label-width="100px">
          <el-form-item label="账号" prop="login">
            <el-input v-if="create" v-model="dataForm.login"></el-input>
            <el-input v-else disabled v-model="dataForm.login"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-if="create" type="password" v-model="dataForm.password"></el-input>
            <el-input v-else placeholder="若不修改密码，请留空" type="password" v-model="dataForm.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="repassword">
            <el-input v-if="create" type="password" v-model="dataForm.repassword"></el-input>
            <el-input v-else placeholder="若不修改密码，请留空" type="password" v-model="dataForm.repassword"></el-input>
          </el-form-item>
          <el-form-item label="名" prop="firstName">
            <el-input v-model="dataForm.firstName"></el-input>
          </el-form-item>
          <el-form-item label="姓" prop="lastName">
            <el-input v-model="dataForm.lastName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="dataForm.email"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="saveForm()">保存</el-button>
            <el-button type="danger" v-if="!create" @click="deleteUser()">删除</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="14">

        <data-tables ref="dataTable" :options="options"
                     :columns="columns"></data-tables>
      </el-col>
    </el-row>


  </div>
</template>

<script>

  import userApi from '@/api/admin/user'

  export default {
    data() {
      let validatePass2 = (rule, value, callback) => {
        // 用一个等于号，不判断类型
        if (value != this.dataForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var uid = this.$route.params.id
      return {
        create: true,
        dataForm: {
          id: null,
          login: '',
          password: undefined,
          repassword: undefined,
          firstName: '',
          lastName: '',
          email: ''
        },
        rules: {
          login: [
            {required: true, message: '请输入用户名'},
          ],
          password: [
            {required: true, message: '请输入密码'}
          ],
          repassword: [
            {required: true, message: '请再次输入密码'},
            {validator: validatePass2}
          ]
        },
        options: {
          dom: 'rftip',
          serverSide: true,
          ordering: true,
          ajax: URL_API_ROOT + '/role/table',
          buttons: [],
          fnDrawCallback: function (oSettings, json) {
            if (!uid) {
              return
            }
            userApi.getRoleByUser(uid).then(function (json) {
              for (var i = 0; i < json.length; i++) {
                $("input:checkbox[value='" + json[i].roleCode + "']").attr('checked', 'true');
              }
            });
          }
        },
        columns: [
          {
            sClass: "text-center",
            data: "code",
            render: function (data, type, full, meta) {
              return '<input type="checkbox"  class="checkchild"  value="' + data + '" />';
            },
            width: '15px'
          },
          {
            name: '角色名称',
            data: 'name'
          },
          {
            name: '编码',
            data: 'code'
          },
          {
            name: '描述',
            data: 'description'
          }
        ]
      }
    },
    mounted() {
      let dataTable = this.$refs.dataTable
      dataTable.table();

      let id = this.$route.params.id
      if (!id) {
        return
      }
      this.create = false
      userApi.getUserById(id).then(json => {
        this.dataForm = json
        this.dataForm.password = null
        this.rules.password[0].required = false
        this.rules.repassword[0].required = false
      })
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
        let id = this.$route.params.id
        userApi.editUser(this.create, this.dataForm).then(json => {
          if (json.success) {
            let assoc = [];
            let uid = id || json.data.rows.id
            $('.checkchild:checked').each(function () {
              assoc.push({
                uid: uid,
                roleCode: $(this).val()
              });

            });

            userApi.assignRoleToUser(assoc).then(data => {
              if (data.success) {
                this.$message({
                  message: '用户保存成功',
                  type: 'success'
                });
                setTimeout(() => {
                  this.$router.push({name: 'app.UserList'});
                }, 700)
              } else {
                this.$message({
                  message: data.message,
                  type: 'error'
                });
              }
            });

          } else {
            this.$message({
              message: json.message,
              type: 'error'
            });
          }
        })
      },
      deleteUser: function () {
        let id = this.$route.params.id
        if (!id) {
          return
        }
        this.$confirm('确认删除吗？', '提示', {
          type: 'warning'
        }).then(() => {
          userApi.deleteUser(id).then(json => {
            if (json.success) {
              this.$message({
                message: '删除成功',
                type: 'success'
              })
              setTimeout(() => {
                this.$router.push({name: 'app.UserList'});
              }, 700)
            } else {
              this.$message({
                message: json.message,
                type: 'error'
              })
            }
          })
        }).catch(() => {

        })

      }
    }

  }
</script>

