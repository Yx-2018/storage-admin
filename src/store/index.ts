import { InjectionKey } from 'vue';
import { createStore, useStore as defaultUseStore, Store } from 'vuex';
import routesList from './modules/routesList';

export const key: InjectionKey<Store<any>> = Symbol();

export const store = createStore<any>({
	modules: {
		routesList,
	},
});

export const useStore = () => {
	return defaultUseStore(key);
};
