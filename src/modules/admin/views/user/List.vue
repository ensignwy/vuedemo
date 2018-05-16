<template>
  <div class="container clearfix">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>

    <data-tables ref="dataTable" :options="options"
                 :columns="columns"></data-tables>
  </div>
</template>

<script>

  import $ from 'jquery'

  export default {
    data() {
      let vm = this
      return {
        options: {
          dom: 'Brftip',
          serverSide: true,
          searching: true,
          ordering: true,
          ajax: URL_API_ROOT + '/user/findAllUsers',
          buttons: [

            {

              text: '新增',
              className: 'el-button el-button--primary el-button--small',
              action: function (e, dt, node, config) {

                vm.$router.push({name: 'app.UserAdd'});

              }
            }
          ],
          columnDefs: [
            {
              //设置不参与搜索和排序
              "targets": [2, 3, 4, 5],
              "searchable": false,
              "sortable": false
            }
          ]
        },
        columns: [
          {
            name: 'id',
            data: 'id',
            visible: false
          },
          {
            name: '登陆账号',
            data: 'login'
          },
          {
            name: '姓名',
            data: 'firstName',
            render: function (data, type, row) {
              let lastName = row.lastName
              return lastName + data
            }
          },
          {
            name: '角色',
            data: 'roles',
            render: function (data, type, row) {
              let _html = ''
              for (let i = 0; i < data.length; i++) {
                _html += "<span class='label label-info'>" + data[i].name + "</span>&nbsp;&nbsp;"
              }
              return _html
            }
          },
          {
            name: '邮箱',
            data: 'email'
          },
          {
            name: '操作',
            render: function (data, type, row) {
              return '<a href="javascript:;" onClick="dt_editUser(' + row.id + ')">编辑</a>'
            }
          }
        ]
      }
    },
    // 销毁挂载在window上的方法
    beforeDestroy() {
      delete window.dt_editUser
    },
    mounted() {
      let vm = this

      window.dt_editUser = function (data) {
        vm.$router.push({
          name: 'app.UserEdit',
          params: {
            id: data
          }
        });
      }

      let dataTable = this.$refs.dataTable
      dataTable.table();
    },
    methods: {

    }

  }
</script>

