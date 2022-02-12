import { Module } from 'vuex';
import { UserInfoState, RootState } from '/@/store/interface';
import { Local } from '/@/utils/storage';
import { STORAGE_ADMIN_INFO } from '/@/config';
import { getUserMenu } from '/@/api/login';

const userInfoModule: Module<UserInfoState, RootState> = {
	namespaced: true,
	state: {
		userInfo: {
			name: '',
			photo: '',
		},
		permissionMenus: [],
		menus: [],
	},
	mutations: {
		SET_USER_INFO(state, data) {
			state.userInfo = data;
		},
		SET_PERMISSION_MENUS(state, data) {
			state.permissionMenus = data;
		},
		SET_MENUS(state, data) {
			state.menus = data;
		},
	},

	actions: {
		setUserInfo({ commit }, data) {
			if (data) {
				commit('SET_USER_INFO', data);
				Local.set(STORAGE_ADMIN_INFO, data);
			} else {
				const userInfo = Local.get(STORAGE_ADMIN_INFO);
				userInfo && commit('SET_USER_INFO', userInfo);
			}
		},
		async getPermissionMenus({ commit }) {
			const { data } = await getUserMenu();
			commit('SET_PERMISSION_MENUS', data);
			return data;
		},
	},

	getters: {
		GET_USER_INFO(state) {
			return state.userInfo;
		},
		GET_PERMISSION_MENUS(state) {
			return state.permissionMenus;
		},
		GET_MENUS(state) {
			// 过滤顶级/路由，其他路由充当菜单
			if (state.menus && state.menus.length) {
				return state.menus[0].children;
			}
			return state.menus;
		},
	},
};

export default userInfoModule;
