<template>
	<div class="layout-footer mt15">
		<div class="layout-footer-warp">
			<div>{{ COPYRIGHT_HOLDER }}</div>
			<div class="mt5">{{ PUBLISH_NUMBER }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { COPYRIGHT_HOLDER, PUBLISH_NUMBER } from '/@/config';

export default {
	name: 'Footer',
	setup() {
		return {
			COPYRIGHT_HOLDER,
			PUBLISH_NUMBER,
		};
	},
};
</script>

<style scoped lang="scss">
.layout-footer {
	width: 100%;
	&-warp {
		margin: auto;
		color: var(--color-text-secondary);
		text-align: center;
	}
}
</style>
