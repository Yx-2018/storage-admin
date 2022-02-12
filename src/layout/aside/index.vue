<template>
	<el-aside class="layout-aside" :class="{ 'layout-aside-is-collapse': isCollapse }">
		<el-scrollbar>
			<Menu :menus="menus" />
		</el-scrollbar>
	</el-aside>
</template>

<script lang="ts">
import Menu from './menu.vue';
import { useStore } from '/@/store';
import { computed } from 'vue';
export default {
	name: 'Aside',
	components: {
		Menu,
	},
	setup() {
		const store = useStore();

		const isCollapse = computed(() => store.getters['layoutModule/GET_IS_COLLAPSE']);

		// 获取菜单信息
		const menus = computed(() => store.getters['userInfoModule/GET_MENUS']);

		return {
			menus,
			isCollapse,
		};
	},
};
</script>

<style lang="scss" scoped>
.layout-aside {
	width: 220px;
	background: var(--bg-aside);
	overflow-x: hidden;
	transition: width 0.3s ease;
}
.layout-aside-is-collapse {
	width: 64px;
}
</style>
