<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户组管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20">
      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-button type="primary" @click="createMenu()">新增用户组</el-button>
          </div>
          <div>
            <el-tree
              :data="groups"
              @node-click="handleNodeClick"
              node-key="id"
              highlight-current
              :default-expanded-keys="[1,2]"
              :props="defaultProps">
            </el-tree>
          </div>
        </el-card>

      </el-col>
      <el-col :span="14">
        <div style="margin-bottom: 10px;">
          <el-button type="primary" @click="saveForm()">保存</el-button>
          <el-button v-if="!create" type="danger" @click="deleteGroup()">删除</el-button>
        </div>

        <el-tabs v-model="activePane" type="card">
          <el-tab-pane :label="paneName" name="first">
            <el-card class="box-card">
              <div>
                <el-form :model="dataForm" :rules="rules" ref="form" label-width="100px">
                  <el-form-item label="上级用户组" prop="parentName">
                    <el-input v-model="dataForm.parentName" readonly @click.native="search" placeholder="点击选择上级用户组">
                      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="名称" prop="name">
                    <el-input v-model="dataForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="编码" prop="code">
                    <el-input v-model="dataForm.code"></el-input>
                  </el-form-item>
                  <el-form-item label="描述" prop="description">
                    <el-input v-model="dataForm.description"></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="选择包含的用户" name="second">
            <el-transfer
              filterable
              :filter-method="filterMethod"
              v-model="usersValue"
              :data="users"
              :titles="['未选择用户','已选择用户']"
              :props="userProps">
            </el-transfer>
          </el-tab-pane>
        </el-tabs>

      </el-col>
    </el-row>

    <el-dialog title="选择上级菜单" :visible.sync="openParentMenu">
      <div>
        <el-tree
          ref="parentTree"
          :data="groups"
          @node-click="handleParentMenuClick"
          node-key="id"
          highlight-current
          :default-expanded-keys="[1,2]"
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

  import groupApi from '@/api/admin/group'
  import userApi from '@/api/admin/user'
  import menuUtil from '@/util/menu'

  export default {
    data() {
      return {
        activePane: 'first',
        create: true,
        paneName: '新增用户组',
        // 穿梭框数据
        users: [],
        usersValue: [],
        filterMethod(query, item) {
          return item.name.indexOf(query) > -1;
        },
        userProps: {
          'key': 'id',
          'label': 'name'
        },
        // 用户组树状图数据
        groups: [],
        openParentMenu: false,
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        // 表单数据
        dataForm: {
          id: null,
          parentId: 1,
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
    mounted: function () {
      groupApi.tree().then(json => {
        let groups = menuUtil.convertTree(json)
        this.groups = groups
      })

      // 初始化用户组包含的用户
      userApi.getAllUser().then(json => {
        var users = json
        _.each(users, function (o) {
          _.assign(o, {name: o.login + '(' + o.lastName + o.firstName + ')'});
        });
        this.users = users
      })

    },
    methods: {
      // 打开选择父节点
      search: function () {
        this.openParentMenu = true
      },
      createMenu: function () {
        // 新增，如果没有选择父节点，默认为1
        this.dataForm = {parentId: 1}
        this.create = true
        this.paneName = '新增用户组'
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
        var usersVaule = this.usersValue
        console.log(usersVaule)

        groupApi.saveOrUpdate(this.dataForm).then(json => {
          if (json.success) {
            // 更新数据
            groupApi.tree().then(json => {
              let groups = menuUtil.convertTree(json)
              this.groups = groups
            })

            //保存对应的用户
            var usersVaule = this.usersValue
            var assoc = [];
            _.each(usersVaule, o => {
              assoc.push({
                uid: o,
                groupCode: this.dataForm.code
              });
            });
            groupApi.assignUserToGroup(assoc).then(json => {
              if (json.success) {
                this.$message({
                  message: '保存成功',
                  type: 'success'
                });
              } else {
                this.$message({
                  message: json.message,
                  type: 'error'
                });
              }
            });

          } else {
            this.$message({
              message: '保存失败' + json.message,
              type: 'error'
            });
          }
        })
      },
      handleNodeClick: function (data) {
        this.dataForm = data
        this.dataForm.parentId = this.dataForm.parentGroup.id
        this.dataForm.parentName = this.dataForm.parentGroup.name
        this.create = false
        this.paneName = '编辑用户组'

        // 选择用户组时，更新显示里面对应的用户
        groupApi.getGroupUsers(data.code).then(json => {
          let usersValue = []
          json.forEach((item, index) => {
            usersValue.push(item.id)
          })
          this.usersValue = usersValue

        });
      },
      // 选择父菜单，先暂存选择的节点
      handleParentMenuClick: function (data) {
        this.parentId = data.id
        this.parentName = data.name
      },
      // 确认之后，才将父节点赋值
      confirmParentMenu: function () {
        this.openParentMenu = false
        this.dataForm.parentId = this.parentId
        this.dataForm.parentName = this.parentName
      },

      deleteGroup: function () {
        this.$confirm('确认删除吗？', '提示', {type: 'warning'}).then(() => {
          groupApi.delete(this.dataForm).then(json => {
            if (json.success) {
              this.$message({
                message: '用户组删除成功',
                type: 'success'
              });
              // 更新数据
              groupApi.tree().then(json => {
                let groups = menuUtil.convertTree(json)
                this.groups = groups
              })

            } else {
              this.$message({
                message: json.message,
                type: 'error'
              })
            }
          })
        })
      }

    },

  }
</script>

