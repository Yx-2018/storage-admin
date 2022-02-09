import { RouteRecordRaw } from 'vue-router';

export interface UserInfoState {
	userInfo: {
		name: string;
		photo?: string;
	};
	permissionMenus: Array<any>;
	menus: Array<RouteRecordRaw>;
}

export interface RootState {
	userInfoModule: UserInfoState;
}
