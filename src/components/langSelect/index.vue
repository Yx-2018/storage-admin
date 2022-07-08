<template>
	<el-dropdown class="lang-select" @command="handleSetLanguage">
		<el-button size="small">{{ language === 'zh' ? '中文' : 'English' }}</el-button>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item :disabled="language === 'zh'" command="zh"> 中文 </el-dropdown-item>
				<el-dropdown-item :disabled="language === 'en'" command="en"> English </el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useStore } from '/@/store';

const store = useStore();
const language = computed(() => store.getters['settingModule/GET_LANGUAGE']);

// 切换语言的方法
const i18n = useI18n();
const handleSetLanguage = (lang: string) => {
	i18n.locale.value = lang;
	store.commit('settingModule/SET_LANGUAGE', lang);
};
</script>
