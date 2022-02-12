<template>
	<el-header height="50px" class="layout-header">
		<Breadcrumb />
		<User />
	</el-header>
</template>

<script>
import Breadcrumb from './breadcrumb/index.vue';
import User from './user/index.vue';
export default {
	name: 'Header',
	components: {
		Breadcrumb,
		User,
	},
};
</script>
<style lang="scss" scoped>
.layout-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	background: var(--color-whites);
	border-bottom: 1px solid var(--color-border-extra-light);
}
</style>
