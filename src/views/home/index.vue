<template>
	<div>
		<NoticeBar
			text="🔥综合vue3.x 、Typescript、vite、Element plus等在实际项目中使用实践"
			color="var(--color-primary)"
			background="var(--color-whites)"
			:time="30"
			:show-right="false"
		/>
	</div>
</template>

<script lang="ts">
import NoticeBar from '/@/components/noticeBar/index.vue';

export default {
	name: 'Home',
	components: {
		NoticeBar,
	},
};
</script>
