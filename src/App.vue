<template>
	<router-view></router-view>
</template>

<script lang="ts">
import { onBeforeMount } from 'vue';
import { setIconfontCdn } from '/@/utils/loadCdn';
export default {
	setup() {
		onBeforeMount(() => {
			setIconfontCdn();
		});
	},
};
</script>
