import { createRouter, createWebHistory } from 'vue-router';
import { commonRoutes } from './routes';
import { Local } from '/@/utils/storage';
import { STORAGE_ADMIN_TOKEN } from '/@/config';
import { setPermissionRoutes } from '/@/router/permission';
import { store } from '/@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
	history: createWebHistory(),
	routes: commonRoutes,
});

router.beforeEach(async (to, from, next) => {
	NProgress.configure({ showSpinner: false });
	NProgress.start();
	// 不需要登陆页面直接跳过
	if (commonRoutes.find((p) => p.path === to.path)) {
		next();
		return;
	}
	const token = Local.get(STORAGE_ADMIN_TOKEN);
	// token不存在去登陆
	if (!token) {
		next('/login');
		return;
	}

	// 设置用户信息
	store.dispatch('userInfoModule/setUserInfo');

	// 组装路由
	if (!store.getters['userInfoModule/GET_MENUS'].length) {
		await setPermissionRoutes();
		// 由于addRoute是异步的，这里next参数不能为空，为空直接跳转结束。这里要加上to，让再进一次拦截，此时动态路由追加完成，即可正常跳转
		next({ ...to });
	} else {
		next();
	}
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
