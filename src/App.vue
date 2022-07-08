<template>
	<el-config-provider :locale="locale">
		<router-view></router-view>
	</el-config-provider>
</template>

<script lang="ts">
import { computed, onBeforeMount } from 'vue';
import { setIconfontCdn } from '/@/utils/loadCdn';
import { useStore } from '/@/store';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
export default {
	setup() {
		onBeforeMount(() => {
			setIconfontCdn();
		});
		const store = useStore();
		const locale = computed(() => {
			return store.getters['settingModule/GET_LANGUAGE'] === 'zh' ? zhCn : en;
		});
		return {
			locale,
		};
	},
};
</script>
