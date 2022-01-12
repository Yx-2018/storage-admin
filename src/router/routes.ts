import { RouteRecordRaw } from 'vue-router';

// export const dynamicRoutes: RouteRecordRaw[] = [
// 	{
// 		path: '/',
// 		name: '/',
// 		redirect: 'home',
// 		component: () => import('/@/layout/index.vue'),
// 		children: [
// 			{
// 				path: 'home',
// 				name: 'home',
// 				meta: {
// 					title: '首页',
// 				},
// 				component: () => import('/@/views/home/index.vue'),
// 			},
// 		],
// 	},
// ];

export const commonRoutes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: 'login',
		component: () => import('/@/views/login/index.vue'),
	},
	{
		path: '/404',
		name: '404',
		component: () => import('/@/views/error/404.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404',
	},
];
