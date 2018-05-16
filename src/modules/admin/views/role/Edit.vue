<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/role' }">角色管理</el-breadcrumb-item>
      <el-breadcrumb-item v-if="create">新增角色</el-breadcrumb-item>
      <el-breadcrumb-item v-else>编辑角色</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row :gutter="20">
      <el-col :span="10">
        <el-form :model="dataForm" :rules="rules" ref="form" label-width="100px">
          <el-form-item label="名称" prop="name">
            <el-input v-model="dataForm.name"></el-input>
          </el-form-item>
          <el-form-item label="编码" prop="code">
            <el-input v-if="create" v-model="dataForm.code"></el-input>
            <el-input v-else disabled v-model="dataForm.code"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input v-model="dataForm.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveForm()">保存</el-button>
            <el-button type="danger" v-if="!create" @click="deleteRole()">删除</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="14">

        <el-tabs v-model="activePane" type="card">
          <el-tab-pane label="功能权限" name="first">
            <data-tables ref="dataTable" :options="options"
                         :columns="columns"></data-tables>
          </el-tab-pane>
          <el-tab-pane label="菜单权限" name="second">
            <el-tree
              ref="tree"
              :data="menus"
              @node-click="handleNodeClick"
              node-key="id"
              show-checkbox
              highlight-current
              :default-expanded-keys="[0]"
              :props="defaultProps">
            </el-tree>
          </el-tab-pane>
        </el-tabs>

      </el-col>
    </el-row>


  </div>
</template>

<script>

  import roleApi from '@/api/admin/role'
  import menuApi from '@/api/admin/menu'
  import menuUtil from '@/util/menu'

  export default {
    data() {
      let roleCode = this.$route.params.code
      return {
        create: true,
        activePane: 'first',
        menus: [],
        defaultProps: {
          children: 'children',
          label: 'title'
        },
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
        },
        options: {
          dom: 'rftip',
          serverSide: true,
          ordering: true,
          ajax: URL_API_ROOT + '/authority/table',
          buttons: [],
          fnDrawCallback: function (oSettings, json) {
            if (!roleCode) {
              return
            }
            // 回显角色对应的权限
            roleApi.getAuthorityByCode(roleCode).then(json => {
              for (let i = 0; i < json.length; i++) {
                $("input:checkbox[value='" + json[i].authorityCode + "']").attr('checked', 'true');
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
            name: '名称',
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
      // 角色列表
      let dataTable = this.$refs.dataTable
      dataTable.table();

      let roleCode = this.$route.params.code
      if (!roleCode) {
        // 新增：获取菜单数据
        menuApi.tree().then(json => {
          let menus = menuUtil.convertTree(json)
          this.menus = menus
        })
      }else{
        // 编辑：数据回显
        this.create = false
        roleApi.getRoleByCode(roleCode).then(json => {
          this.dataForm = json
        });

        roleApi.getMenuByRole(roleCode).then(json => {
          console.log(json);
          let menus = menuUtil.convertTree(json)
          this.menus = menus

          // 设置树节点的选中
          let keys = menuUtil.getCheckedKeys(json)
          this.$refs.tree.setCheckedKeys(keys)
        });
      }


    },
    methods: {
      handleNodeClick: function (data) {
      },
      saveForm: function () {
        let vm = this
        let checkedNodes = this.$refs.tree.getCheckedNodes()

        let assoc = [];
        _.each(checkedNodes, function (node) {
          assoc.push({
            menuId: node.id,
            roleCode: vm.dataForm.code
          });
        });
        this.$refs['form'].validate((valid) => {
          if (!valid) {
            return
          }
          this.save()
        })
      },
      save: function () {
        let vm = this
        let roleCode = this.$route.params.code

        roleApi.saveRole(this.dataForm).then(json => {
          if (json.success) {
            // 保存对应的权限
            let assoc = [];
            $('.checkchild:checked').each(function () {
              assoc.push({
                roleCode: roleCode,
                authorityCode: $(this).val()
              });
            });

            roleApi.assignAuthorityToRole(assoc).then(json => {
              if (json.success) {

                // 保存对应菜单
                let checkedNodes = this.$refs.tree.getCheckedNodes();
                let assoc2 = [];
                _.each(checkedNodes, node => {
                  assoc2.push({
                    menuId: node.id,
                    roleCode: roleCode
                  });
                });
                if (assoc2.length == 0) {
                  assoc2.push({
                    roleCode: roleCode
                  });
                }
                roleApi.assignMenuToRole(assoc2).then(json => {
                  if (json.success) {
                    this.$message({
                      message: '角色保存成功',
                      type: 'success'
                    });
                    setTimeout(() => {
                      this.$router.push({name: 'app.RoleList'});
                    }, 700)

                  } else {
                    this.$message({
                      message: json.message,
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
            });

          } else {
            this.$message({
              message: json.message,
              type: 'error'
            });

          }
        })
      },
      deleteRole: function () {
        let code = this.$route.params.code
        debugger
        if (!code) {
          return
        }
        roleApi.deleteRole(code).then(json => {
          if (json.success) {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            setTimeout(() => {
              this.$router.push({name: 'app.RoleList'});
            }, 700)
          } else {
            this.$message({
              message: json.message,
              type: 'error'
            });
          }
        })
      }
    }

  }
</script>

