import { Local } from '/@/utils/storage';
import { STORAGE_ADMIN_TOKEN } from '/@/config';

/**
 * 获取有权限的路由组装
 */
export function setPermissionRoutes() {
	if (!Local.get(STORAGE_ADMIN_TOKEN)) {
		return;
	}
	addRoutes();
}

function addRoutes() {}
