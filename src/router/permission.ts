import { store } from '/@/store';
import { RouteRecordRaw } from 'vue-router';
import { dynamicRoutes, otherRouter } from '/@/router/routes';
import router from '/@/router/index';

/**
 * 组装路由
 */
export async function setPermissionRoutes() {
	// 获取原始路由权限集合
	let permissionMenus = store.getters['userInfoModule/GET_PERMISSION_MENUS'];
	if (!permissionMenus.length) {
		permissionMenus = await store.dispatch('userInfoModule/getPermissionMenus');
	}
	// 获取真实路由集合
	const passRouters = diffRouters(dynamicRoutes, permissionMenus);
	store.commit('userInfoModule/SET_MENUS', passRouters);
	//动态追加路由
	for (const passRouter of passRouters) {
		router.addRoute(passRouter);
	}
	// 最后追加404页面，防止其他页面被拦截
	router.addRoute(otherRouter);
}

/**
 * 逐层比较有权限路由
 * @param dynamicRouters
 * @param menus
 */
function diffRouters(dynamicRouters: RouteRecordRaw[], menus: any[]) {
	const passRouters = [];
	for (const dynamicRouter of dynamicRouters) {
		let menu = menus.find((p: any) => p.path === dynamicRouter.path);
		if (!menu) {
			continue;
		}
		let children = undefined;
		if (dynamicRouter.children && dynamicRouter.children.length && menu.children && menu.children.length) {
			children = diffRouters(dynamicRouter.children, menu.children);
		}
		dynamicRouter.children = children;
		passRouters.push(dynamicRouter);
	}
	return passRouters;
}
