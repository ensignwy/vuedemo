<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/authority' }">权限管理</el-breadcrumb-item>
      <el-breadcrumb-item v-if="create">新增权限</el-breadcrumb-item>
      <el-breadcrumb-item v-else>编辑权限</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row :gutter="20">
      <el-col :span="10">
        <el-form :model="dataForm" :rules="rules" ref="form" label-width="100px">
          <el-form-item label="名称" prop="name">
            <el-input v-model="dataForm.name"></el-input>
          </el-form-item>
          <el-form-item label="编码" prop="code">
            <el-input v-model="dataForm.code"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input v-model="dataForm.description"></el-input>
          </el-form-item>
          <el-form-item label="URL" prop="url">
            <el-input v-model="dataForm.url"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="saveForm()">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="14">

      </el-col>
    </el-row>


  </div>
</template>

<script>

  import authorityApi from '@/api/admin/authority'

  export default {
    data() {
      var uid = this.$route.params.id
      return {
        create: true,
        dataForm: {
          id: null,
          name: '',
          code: '',
          description: '',
          url: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入名称'},
          ],
          code: [
            {required: true, message: '请输入编码'}
          ]
        }
      }
    },
    mounted() {

      let code = this.$route.params.code
      if (!code) {
        return
      }
      this.create = false
      authorityApi.getAuthorityBycode(code).then(json => {
        this.dataForm = json
      })
    },
    methods: {
      saveForm: function () {
        // 表单检验
        this.$refs['form'].validate((valid) => {
          if (!valid) {
            return
          }
          this.save()
        })
      },
      save: function () {
        let vm = this
        authorityApi.update(this.create, this.dataForm).then(json => {
          if (json.success) {
            this.$message({
              message: '权限保存成功',
              type: 'success'
            });
            setTimeout(() => {
              this.$router.push({name: 'app.AuthorityList'});
            }, 700)

          } else {
            this.$message({
              message: '保存失败' + json.data.message,
              type: 'error'
            });

          }
        })
      }
    }

  }
</script>
