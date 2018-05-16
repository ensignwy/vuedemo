<template>
  <div class="container clearfix">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
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
          ajax: URL_API_ROOT + '/authority/table',
          buttons: [

            {

              text: '新增',
              className: 'el-button el-button--primary el-button--small',
              action: function (e, dt, node, config) {

                vm.$router.push({name: 'app.AuthorityAdd'});

              }
            }
          ],
          columnDefs: [
            {
              //设置不参与搜索和排序
              "targets": [3],
              "searchable": false,
              "sortable": false
            }
          ]
        },
        columns: [
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
          },
          {
            name: '操作',
            render: function (data, type, row) {
              return '<a href="javascript:;" onClick="dt_editAuth(' +'\''+ row.code + '\')">编辑</a>'
            }
          }
        ]
      }
    },
    // 销毁挂载在window上的方法
    beforeDestroy() {
      delete window.dt_editAuth
    },
    mounted() {
      let vm = this

      window.dt_editAuth = function (data) {
        vm.$router.push({
          name: 'app.AuthorityEdit',
          params: {
            code: data
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

