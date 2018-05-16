import Vue from 'vue'
import Router from 'vue-router'
import AdminHome from '@/modules/admin/views/home/Home'
import NotFound from '@/components/NotFound'
import Index from '@/modules/admin/views/home/Index'
import Profile from '@/modules/admin/views/home/Profile'
import Login from '@/modules/admin/views/Login'

import UserList from '@/modules/admin/views/user/List'
import UserEdit from '@/modules/admin/views/user/edit'
import RoleList from '@/modules/admin/views/role/List'
import RoleEdit from '@/modules/admin/views/role/Edit'
import AuthorityList from '@/modules/admin/views/authority/List'
import AuthorityEdit from '@/modules/admin/views/authority/Edit'
import GroupList from '@/modules/admin/views/group/List'
import MenuList from '@/modules/admin/views/menu/List'
import DictionaryList from '@/modules/admin/views/dictionary/List'
import DictionaryEdit from '@/modules/admin/views/dictionary/Edit'
import DictionaryItemList from '@/modules/admin/views/dictionaryItem/List'
import DictionaryItemEdit from '@/modules/admin/views/dictionaryItem/Edit'

Vue.use(Router)
let routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/login',
    name: 'app.Login',
    component: Login
  },
  {
    path: '/',
    name: 'app.AdminHome',
    component: AdminHome,
    children: [
      {
        path: '/',
        name: 'app.Index',
        component: Index
      },
      {
        path: '/profile',
        name: 'app.Profile',
        component: Profile
      },
      {
        path: '/menu',
        name: 'app.MenuList',
        component: MenuList
      },
      {
        path: '/user',
        name: 'app.UserList',
        component: UserList
      },
      {
        path: '/user/add',
        name: 'app.UserAdd',
        component: UserEdit
      },
      {
        path: '/user/edit/:id',
        name: 'app.UserEdit',
        component: UserEdit
      },
      {
        path: '/role',
        name: 'app.RoleList',
        component: RoleList
      },
      {
        path: '/role/add',
        name: 'app.RoleAdd',
        component: RoleEdit
      },
      {
        path: '/role/edit/:code',
        name: 'app.RoleEdit',
        component: RoleEdit
      },
      {
        path: '/authority',
        name: 'app.AuthorityList',
        component: AuthorityList
      },
      {
        path: '/authority/add',
        name: 'app.AuthorityAdd',
        component: AuthorityEdit
      },
      {
        path: '/authority/edit/:code',
        name: 'app.AuthorityEdit',
        component: AuthorityEdit
      },
      {
        path: '/group',
        name: 'app.GroupList',
        component: GroupList
      },
      {
        path: '/dictionary',
        name: 'app.DictionaryList',
        component: DictionaryList
      },
      {
        path: '/dictionary/add',
        name: 'app.DictionaryAdd',
        component: DictionaryEdit
      },
      {
        path: '/dictionary/edit/:id',
        name: 'app.DictionaryEdit',
        component: DictionaryEdit
      },
      {
        path: '/dictionary/item/:dicId',
        name: 'app.DictionaryItemList',
        component: DictionaryItemList
      },
      {
        path: '/dictionary/item/add/:dicId',
        name: 'app.DictionaryItemAdd',
        component: DictionaryItemEdit
      },
      {
        path: '/dictionary/item/edit/:dicId/:id',
        name: 'app.DictionaryItemEdit',
        component: DictionaryItemEdit
      }
    ]
  }
]
const router = new Router({
  history: true,
  routes: routes
})

export default router
