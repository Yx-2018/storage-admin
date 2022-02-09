import { InjectionKey } from 'vue';
import { createStore, useStore as defaultUseStore, Store } from 'vuex';
import userInfoModule from '/@/store/modules/userInfo';
import { RootState } from './interface';

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
	// 开启严格模式
	strict: true,
	modules: {
		userInfoModule,
	},
});

export const useStore = () => {
	return defaultUseStore(key);
};
