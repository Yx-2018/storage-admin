import { InjectionKey } from 'vue';
import { createStore, useStore as defaultUseStore, Store } from 'vuex';
import userInfoModule from '/@/store/modules/userInfo';
import layoutModule from '/@/store/modules/layout';
import settingModule from '/@/store/modules/setting';
import { RootState } from './interface';

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
	// 开启严格模式
	strict: true,
	modules: {
		userInfoModule,
		layoutModule,
		settingModule,
	},
});

export const useStore = () => {
	return defaultUseStore(key);
};
