import { Module } from 'vuex';
import { SettingState, RootState } from '/@/store/interface';
import { Local } from '/@/utils/storage';
import { LANG, STORAGE_LANG } from '/@/config';

const settingModule: Module<SettingState, RootState> = {
	namespaced: true,
	state: {
		language: Local.get(STORAGE_LANG) || LANG,
	},
	mutations: {
		SET_LANGUAGE(state, lang) {
			// 设置缓存
			Local.set(STORAGE_LANG, lang);
			// 修改状态
			state.language = lang;
		},
	},
	actions: {},
	getters: {
		GET_LANGUAGE(state) {
			return state.language;
		},
	},
};

export default settingModule;
