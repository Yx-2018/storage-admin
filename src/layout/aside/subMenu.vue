<template>
	<template v-for="item in menus">
		<el-sub-menu v-if="item.children && item.children.length" :key="item.path" :index="item.path">
			<template #title>
				<SvgIcon v-if="item.meta.icon" :icon="item.meta.icon" class="menu-icon" />
				<span>{{ item.meta.title }}</span>
			</template>
			<SubMenu :menus="item.children" />
		</el-sub-menu>
		<el-menu-item v-else :key="item.path" :index="item.path">
			<SvgIcon v-if="item.meta.icon" :icon="item.meta.icon" class="menu-icon" />
			<span>{{ item.meta.title }}</span>
		</el-menu-item>
	</template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvgIcon from '/@/components/svgIcon/index.vue';

export default defineComponent({
	name: 'SubMenu',
	components: {
		SvgIcon,
	},
	props: {
		menus: {
			type: Array,
			default: () => [],
		},
	},
});
</script>
<style lang="scss" scoped>
.menu-icon {
	font-size: 14px !important;
	display: inline-block;
	vertical-align: middle;
	margin-right: 5px;
	width: 24px;
	text-align: center;
}
</style>
