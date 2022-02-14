<template>
	<div class="layout-breadcrumb">
		<SvgIcon :icon="isCollapse ? 'ElIconExpand' : 'ElIconFold'" class="layout-breadcrumb-icon" @click="handleIconClick" />
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
import { useStore } from '/@/store';
import SvgIcon from '/@/components/svgIcon/index.vue';

export default defineComponent({
	name: 'Breadcrumb',
	components: {
		SvgIcon,
	},
	setup() {
		const route = useRoute();
		const router = useRouter();
		const store = useStore();

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

		const isCollapse = computed(() => store.getters['layoutModule/GET_IS_COLLAPSE']);

		const handleBreadcrumbClick = ({ redirect, path }: any) => {
			if (redirect) router.push(redirect);
			else router.push(path);
		};

		const handleIconClick = () => {
			store.dispatch('layoutModule/changeIsCollapse');
		};

		return { breadcrumbList, isCollapse, handleBreadcrumbClick, handleIconClick };
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
