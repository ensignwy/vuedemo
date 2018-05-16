<template>
  <div class="container clearfix">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>字典管理</el-breadcrumb-item>
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
          ajax: URL_API_ROOT + '/dic/getTable',
          buttons: [

            {

              text: '新增',
              className: 'el-button el-button--primary el-button--small',
              action: function (e, dt, node, config) {

                vm.$router.push({name: 'app.DictionaryAdd'});

              }
            }
          ],
          columnDefs: [
            {
              //设置列不参与搜索和排序
              "targets": [4,5],
              "searchable": false,
              "sortable": false
            }
          ],
        },
        columns: [
          {
            name: 'id',
            data: 'id',
            visible: false
          },
          {
            name: '名称',
            data: 'name',
            render: function (data, type, row) {
              return data;
            }
          },
          {
            name: '编码',
            data: 'code',
            render: function (data, type, row) {
              if (data != null) {
                return data;
              }
              return ""
            }
          },
          {
            name: '描述',
            data: 'description',
            render: function (data, type, row) {
              if (data != null) {
                return data;
              }
              return ""
            }
          },
          {
            name: '是否可用',
            data: 'isDisabled',
            render: function (data, type, row) {
              if (!data) {
                return '是';
              } else {
                return '否'
              }

            }
          },
          {
            name: '操作',
            render: function (data, type, row) {
              return '<a href="javascript:;" onClick="dt_editDictionary(' +'\''+ row.id + '\')">编辑</a>&nbsp;&nbsp;'+
                '<a href="javascript:;" onClick="dt_showDictionaryItem(' +'\''+ row.id + '\')">查看字典项</a>&nbsp;&nbsp;'
            }
          }
        ]
      }
    },
    // 销毁挂载在window上的方法
    beforeDestroy() {
      delete window.dt_editDictionary
      delete window.dt_showDictionaryItem
    },
    mounted() {
      let vm = this

      window.dt_editDictionary = function (data) {
        vm.$router.push({
          name: 'app.DictionaryEdit',
          params: {
            id: data
          }
        });
      }
      window.dt_showDictionaryItem = function (data) {
        vm.$router.push({
          name: 'app.DictionaryItemList',
          params: {
            dicId: data
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

