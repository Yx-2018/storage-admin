<template>
	<div class="layout-breadcrumb">
		<el-icon class="layout-breadcrumb-icon"><ElIconFold /></el-icon>
		<el-breadcrumb>
			<transition-group name="breadcrumb" mode="out-in">
				<el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
					<a v-if="index !== breadcrumbList.length - 1" @click.stop="handleBreadcrumbClick(item)">{{ item.meta.title }}</a>
					<span v-else>{{ item.meta.title }}</span>
				</el-breadcrumb-item>
			</transition-group>
		</el-breadcrumb>
	</div>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed, defineComponent } from 'vue';

export default defineComponent({
	name: 'Breadcrumb',
	setup() {
		const route = useRoute();
		const router = useRouter();
		const breadcrumbList = computed(() => {
			return route.matched.map((p) => {
				if (p.path === '/') {
					return {
						...p,
						meta: {
							title: '首页',
						},
					};
				}
				return p;
			});
		});

		const handleBreadcrumbClick = ({ redirect, path }: any) => {
			if (redirect) router.replace(redirect);
			else router.push(path);
		};

		return { breadcrumbList, handleBreadcrumbClick };
	},
});
</script>
<style lang="scss" scoped>
.layout-breadcrumb {
	display: flex;
	align-items: center;
	.layout-breadcrumb-icon {
		cursor: pointer;
		font-size: 18px;
		margin-right: 15px;
		color: var(--color-text-regular);
	}
}
</style>
