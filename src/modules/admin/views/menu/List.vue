<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20">
      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-button type="primary" @click="createMenu()">新增菜单</el-button>
          </div>
          <div>
            <el-tree
              :data="menus"
              @node-click="handleNodeClick"
              node-key="id"
              highlight-current
              :default-expanded-keys="[0]"
              :props="defaultProps">
            </el-tree>
          </div>
        </el-card>

      </el-col>
      <el-col :span="14">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>新增菜单</span>
          </div>
          <div>
            <el-form :model="dataForm" :rules="rules" ref="form" label-width="100px">
              <el-form-item label="上级菜单" prop="parentName">
                <el-input v-model="dataForm.parentName" readonly @click.native="search">
                  <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                </el-input>
              </el-form-item>
              <el-form-item label="标题" prop="title">
                <el-input v-model="dataForm.title"></el-input>
              </el-form-item>
              <el-form-item label="编码" prop="code">
                <el-input v-model="dataForm.code"></el-input>
              </el-form-item>
              <el-form-item label="图标" prop="iconCls">
                <el-input v-model="dataForm.iconCls" placeholder="el-icon-info"></el-input>
              </el-form-item>
              <el-form-item label="链接" prop="href">
                <el-input v-model="dataForm.href" placeholder="/menu/edit"></el-input>
              </el-form-item>
              <el-form-item label="排序" prop="sortNo">
                <el-input v-model="dataForm.sortNo"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="saveForm()">保存</el-button>
                <el-button v-if="!create" type="primary" @click="disableMenu()">{{btnName}}</el-button>
                <el-button v-if="!create" type="danger" @click="deleteMenu()">删除</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog title="选择上级菜单" :visible.sync="openParentMenu">
      <div>
        <el-tree
          ref="parentTree"
          :data="menus"
          @node-click="handleParentMenuClick"
          node-key="id"
          highlight-current
          :default-expanded-keys="[0]"
          :props="defaultProps">
        </el-tree>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="openParentMenu = false">取 消</el-button>
        <el-button size="medium" type="primary" @click="confirmParentMenu()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

  import menuApi from '@/api/admin/menu'
  import menuUtil from '@/util/menu'

  export default {
    data() {
      return {
        menus: [],
        btnName: '启用',
        create: true,
        openParentMenu: false,
        dataForm: {
          id: null,
          title: '',
          code: '',
          href: '',
          iconCls: '',
          sortNo: 9999
        },
        rules: {
          title: [
            {required: true, message: '请输入名称'},
          ],
          code: [
            {required: true, message: '请输入编码'}
          ]
        },

        defaultProps: {
          children: 'children',
          label: 'title'
        }
      }
    },
    mounted: function () {
      menuApi.tree().then(json => {
        // tree组件需要数组格式的
        let menus = menuUtil.convertTree(json)
        this.menus = menus
      })
    },
    methods: {
      // 打开选择父节点
      search: function () {
        this.openParentMenu = true
      },
      createMenu: function () {
        let parentId = this.dataForm.id
        let parentName = this.dataForm.title
        this.dataForm = {sortNo: 9999}
        this.dataForm.parentName = parentName
        this.dataForm.parentId = parentId
        this.create = true
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
        menuApi.save(this.dataForm).then(json => {
          if (json.success) {
            this.$message({
              message: '菜单保存成功，正在刷新数据...',
              type: 'success'
            });
            setTimeout(() => {
              window.location.reload();
            }, 1500)

          } else {
            this.$message({
              message: '保存失败' + json.data.message,
              type: 'error'
            });
          }
        })
      },
      handleNodeClick: function (data) {
        console.log(data);
        this.dataForm = data
        this.dataForm.parentId = this.dataForm.parentMenu.id
        this.dataForm.parentName = this.dataForm.parentMenu.title
        this.create = false
        if (data.disabled) {
          this.btnName = '启用'
        } else {
          this.btnName = '停用'
        }
      },
      // 选择父菜单，先暂存选择的节点
      handleParentMenuClick: function (data) {
        this.parentId = data.id
        this.parentName = data.title
      },
      // 确认之后，才将父节点赋值
      confirmParentMenu: function () {
        this.openParentMenu = false
        this.dataForm.parentId = this.parentId
        this.dataForm.parentName = this.parentName
      },

      deleteMenu: function () {
        let id = this.dataForm.id
        if (!id) {
          this.$message({
            message: '找不到菜单',
            type: 'error'
          })
          return
        }
        this.$confirm('确认删除吗？', '提示', {type: 'warning'}).then(() => {
          menuApi.delete(this.dataForm).then(json => {
            if (json.success) {
              this.$message({
                message: '菜单删除成功，正在刷新数据...',
                type: 'success'
              });
              setTimeout(() => {
                window.location.reload();
              }, 1500)
            } else {
              this.$message({
                message: json.message,
                type: 'error'
              })
            }
          })
        })
      },
      disableMenu: function () {
        let id = this.dataForm.id
        if (!id) {
          this.$message({
            message: '找不到菜单',
            type: 'error'
          })
          return
        }
        if (this.dataForm.disabled) {
          menuApi.enable(id).then(json => {
            if (json.success) {
              this.$message({
                message: '菜单启用成功',
                type: 'success'
              })
              this.dataForm.disabled = false
              this.btnName = '停用'
            } else {
              this.$message({
                message: json.message,
                type: 'error'
              })
            }
          })
        } else {
          menuApi.disable(id).then(json => {
            if (json.success) {
              this.$message({
                message: '菜单停用成功',
                type: 'success'
              })
              this.dataForm.disabled = true
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
    },

  }
</script>

