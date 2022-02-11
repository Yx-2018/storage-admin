<template>
	<template v-for="item in menus">
		<el-sub-menu v-if="item.children && item.children.length" :key="item.path" :index="item.path">
			<template #title>
				<i v-if="item.meta.icon" class="iconfont menu-icon" :class="[item.meta.icon]"></i>
				<span>{{ item.meta.title }}</span>
			</template>
			<SubMenu :menus="item.children" />
		</el-sub-menu>
		<el-menu-item v-else :key="item.path" :index="item.path">
			<i v-if="item.meta.icon" class="iconfont menu-icon" :class="[item.meta.icon]"></i>
			<span>{{ item.meta.title }}</span>
		</el-menu-item>
	</template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SubMenu',
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
