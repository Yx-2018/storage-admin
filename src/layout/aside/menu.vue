<template>
	<el-menu :default-active="defaultActive" :collapse="isCollapse" background-color="transparent" router>
		<SubMenu :menus="menus" />
	</el-menu>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import SubMenu from './subMenu.vue';
import { useRoute } from 'vue-router';
import { useStore } from '/@/store';

export default defineComponent({
	name: 'Menu',
	components: {
		SubMenu,
	},
	props: {
		menus: {
			type: Array,
			default: () => [],
		},
	},
	setup() {
		const route = useRoute();
		const store = useStore();
		const isCollapse = computed(() => store.getters['layoutModule/GET_IS_COLLAPSE']);
		const defaultActive = route.path;

		return {
			defaultActive,
			isCollapse,
		};
	},
});
</script>
