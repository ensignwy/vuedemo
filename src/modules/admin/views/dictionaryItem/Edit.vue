<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{}" @click.native="goBack()">返回</el-breadcrumb-item>
      <el-breadcrumb-item v-if="create">新增字典</el-breadcrumb-item>
      <el-breadcrumb-item v-else>编辑字典</el-breadcrumb-item>
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
            <el-input type="textarea" v-model="dataForm.description"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="saveForm()">保存</el-button>
            <el-button v-if="!create" type="primary" @click="disableDictionaryItem()">{{btnName}}</el-button>
            <el-button v-if="!create" type="danger" @click="deleteDictionaryItem()">删除</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="14">

      </el-col>
    </el-row>


  </div>
</template>

<script>

  import dictionaryApi from '@/api/admin/dictionary'

  export default {
    data() {
      return {
        create: true,
        btnName: '',
        dataForm: {
          id: null,
          name: '',
          code: '',
          description: ''
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

      let id = this.$route.params.id
      if (!id) {
        return
      }
      this.create = false
      dictionaryApi.findItemById(id).then(json => {
        this.dataForm = json
        if (json.isDisabled) {
          this.btnName = '启用'
        } else {
          this.btnName = '停用'
        }

      })
    },
    methods: {
      goBack:function () {
        history.go(-1)
      },
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

        let dicId = this.$route.params.dicId
        if (!dicId) {
          this.$message({
            message: '找不到对应的字典，无法添加字典项',
            type: 'error'
          });
          return
        }

        this.dataForm.dicId = dicId
        dictionaryApi.saveOrUpdateItem(this.dataForm).then(json => {
          if (json.success) {
            this.$message({
              message: '字典项保存成功',
              type: 'success'
            });
            setTimeout(() => {
              this.$router.push({
                name: 'app.DictionaryItemList',
                params: {dicId: dicId}
              });
            }, 700)

          } else {
            this.$message({
              message: '保存失败' + json.data.message,
              type: 'error'
            });

          }
        })
      },
      deleteDictionaryItem: function () {
        let id = this.$route.params.id
        let dicId = this.$route.params.dicId
        if (!id) {
          return
        }
        this.$confirm('确认删除吗？', '提示', {type: 'warning'}).then(() => {
          dictionaryApi.setItemDeleted(id).then(json => {
            if (json.success) {
              this.$message({
                message: '删除成功',
                type: 'success'
              })
              setTimeout(() => {
                this.$router.push({
                  name: 'app.DictionaryItemList',
                  params: {dicId: dicId}
                });
              }, 700)
            } else {
              this.$message({
                message: json.message,
                type: 'error'
              })
            }
          })
        })
      },
      disableDictionaryItem: function () {
        let id = this.$route.params.id
        if (!id) {
          return
        }
        if (this.dataForm.isDisabled) {
          dictionaryApi.setItemUndisbaled(id).then(json => {
            if (json.success) {
              this.$message({
                message: '字典项启用成功',
                type: 'success'
              })
              this.btnName = '停用'
            } else {
              this.$message({
                message: json.message,
                type: 'error'
              })
            }
          })
        } else {
          dictionaryApi.setItemDisabled(id).then(json => {
            if (json.success) {
              this.$message({
                message: '字典项停用成功',
                type: 'success'
              })
              this.btnName = '启用'
            } else {
              this.$message({
                message: json.message,
                type: 'error'
              })
            }
          })
        }
      }
    }

  }
</script>

