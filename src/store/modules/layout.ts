import { Module } from 'vuex';
import { LayoutState, RootState } from '/@/store/interface';

const layoutModule: Module<LayoutState, RootState> = {
	namespaced: true,
	state: {
		isCollapse: false,
	},
	mutations: {
		SET_IS_COLLAPSE(state, data) {
			state.isCollapse = data;
		},
	},
	actions: {
		changeIsCollapse({ state, commit }) {
			commit('SET_IS_COLLAPSE', !state.isCollapse);
		},
	},
	getters: {
		GET_IS_COLLAPSE(state) {
			return state.isCollapse;
		},
	},
};

export default layoutModule;
