<template>
	<div class="layout-user">
		<el-avatar class="mr5" :icon="ElIconUserFilled" :src="userInfo.photo" :size="25"></el-avatar>
		<el-dropdown @command="handleCommandChange">
			<div class="layout-user-dropdown">
				<span class="mr5">{{ userInfo.name }}</span>
				<SvgIcon icon="ElIconArrowDown" />
			</div>
			<template #dropdown>
				<el-dropdown-menu class="layout-user-dropdown-menu">
					<el-dropdown-item>首页</el-dropdown-item>
					<el-dropdown-item>个人中心</el-dropdown-item>
					<el-dropdown-item divided command="loginOut">退出</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script lang="ts">
import { computed, resolveComponent } from 'vue';
import { useStore } from '/@/store';
import { Local } from '/@/utils/storage';
import { useRouter } from 'vue-router';
import SvgIcon from '/@/components/svgIcon/index.vue';

export default {
	name: 'User',
	components: {
		SvgIcon,
	},
	setup() {
		const store = useStore();
		const router = useRouter();
		const userInfo = computed(() => store.getters['userInfoModule/GET_USER_INFO']);
		const ElIconUserFilled = resolveComponent('ElIconUserFilled');

		const handleCommandChange = (command: string) => {
			switch (command) {
				case 'loginOut':
					Local.clear();
					router.push('/login');
			}
		};

		return {
			ElIconUserFilled,
			userInfo,
			handleCommandChange,
		};
	},
};
</script>

<style scoped lang="scss">
.layout-user {
	display: flex;
	align-items: center;
	&-dropdown {
		display: flex;
		align-items: center;
		&-menu {
			width: 100px;
		}
	}
}
</style>
