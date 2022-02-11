<template>
	<el-container class="layout">
		<Aside />
		<el-container class="layout-content">
			<Header />
			<el-main class="layout-content-main">
				<el-scrollbar>
					<router-view></router-view>
					<Footer />
				</el-scrollbar>
			</el-main>
		</el-container>
	</el-container>
</template>

<script lang="ts">
import Aside from './aside/index.vue';
import Header from './header/index.vue';
import Footer from './footer/index.vue';
export default {
	name: 'Layout',
	components: {
		Aside,
		Header,
		Footer,
	},
};
</script>

<style lang="scss" scoped>
.layout {
	width: 100%;
	height: 100%;
	overflow: hidden;
	&-content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		&-main {
			padding: 0;
		}
	}
}
</style>
