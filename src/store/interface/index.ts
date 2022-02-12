import { RouteRecordRaw } from 'vue-router';

export interface UserInfoState {
	userInfo: {
		name: string;
		photo?: string;
	};
	permissionMenus: Array<any>;
	menus: Array<RouteRecordRaw>;
}

export interface LayoutState {
	isCollapse: boolean;
}

export interface RootState {
	userInfoModule: UserInfoState;
	layoutModule: LayoutState;
}
