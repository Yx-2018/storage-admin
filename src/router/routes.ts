import { RouteRecordRaw } from 'vue-router';
export const commonRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		name: '/',
		component: () => import('/@/views/home/index.vue'),
	},
];
