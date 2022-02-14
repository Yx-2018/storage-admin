import { RouteRecordRaw } from 'vue-router';

/**
 * 上传后端做权限使用
 */
export const dynamicRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		name: '/',
		redirect: '/home',
		component: () => import('/@/layout/index.vue'),
		children: [
			{
				path: '/home',
				name: 'home',
				meta: {
					title: '首页',
					icon: 'icon-home',
				},
				component: () => import('/@/views/home/index.vue'),
			},
			{
				path: '/extendComponent',
				name: 'extendComponent',
				meta: {
					title: '扩展组件',
					icon: 'icon-gongnengdingyi',
				},
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/extendComponent/noticeBar',
				children: [
					{
						path: '/extendComponent/noticeBar',
						name: 'extendComponentNoticeBar',
						meta: {
							title: '滚动通知',
							icon: 'icon-tongzhi',
						},
						component: () => import('/@/views/extendComponent/noticeBar.vue'),
					},
				],
			},
		],
	},
];

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
];

export const otherRouter: RouteRecordRaw = {
	path: '/:pathMatch(.*)*',
	redirect: '/404',
};
