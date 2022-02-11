<template>
	<el-header height="50px" class="layout-header">
		<Breadcrumb />
	</el-header>
</template>

<script>
import Breadcrumb from './breadcrumb/index.vue';
export default {
	name: 'Header',
	components: {
		Breadcrumb,
	},
};
</script>
<style lang="scss" scoped>
.layout-header {
	display: flex;
	align-items: center;
	padding: 0 15px;
	background: var(--color-whites);
	border-bottom: 1px solid var(--color-border-extra-light);
}
</style>
