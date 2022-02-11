<template>
	<el-container class="layout">
		<Aside />
		<el-container>
			<el-header>Header</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
			<el-footer>Footer</el-footer>
		</el-container>
	</el-container>
</template>

<script lang="ts">
import Aside from './aside/index.vue';
export default {
	name: 'Layout',
	components: {
		Aside,
	},
};
</script>

<style lang="scss" scoped>
.layout {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>
