<template>
	<el-menu :default-active="defaultActive" background-color="transparent" router>
		<SubMenu :menus="menus" />
	</el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SubMenu from './subMenu.vue';
import { useRoute } from 'vue-router';

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
		const defaultActive = route.path;

		return {
			defaultActive,
		};
	},
});
</script>
