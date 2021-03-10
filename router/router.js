import Vue from 'vue';
import VueRouter from 'vue-router';
// 路由的首页重定向
const router = new VueRouter({
	mode:"history",
  // 搭建路由规则
	routes: [
    {
			path:'/store',
			name:"store",
			component: () => import('@/views/index')
		},
		{
			path:"/",
			redirect:{name:"store"}
		},
		{
			path: '/store/categoryList',
			name:'CategoryList',
			component:() => import('@/views/CategoryList/CategoryItem')
		},
		{
		 	path: '/store/search',
			name:'search',
		 	component:()=> import('@/views/search/search')
		},
		{
		 	path: '/store/details',
			name:'details',
		 	component:()=> import('@/views/details/details')
		},
		{
		 	path: '/store/login',
			name:'Login',
		 	component:()=> import('@/views/Login/login')
		},
		{
		 	path: '/store/cart',
			name:'cart',
		 	component:()=> import('@/views/addcart/addcart')
		},
		{
		 	path: '/store/my',
			name:'my',
		 	component:()=> import('@/views/my/my')
		}
		//配置分类栏目页
  ]
});
Vue.use(VueRouter);
export default router;
