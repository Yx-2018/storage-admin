<template>
	<div class="notice-bar" :style="{ background, color }">
		<SvgIcon v-if="showLeft" icon="icon-tongzhi" class="notice-bar-left-icon" />
		<div ref="wrapEl" class="notice-bar-wrap">
			<slot>
				<div ref="textEl" class="notice-bar-wrap-text">{{ text }}</div>
			</slot>
		</div>
		<SvgIcon v-if="showRight" icon="ElIconArrowRight" class="notice-bar-right-icon" @click="$emit('iconClick')" />
	</div>
</template>

<script lang="ts">
import SvgIcon from '/@/components/svgIcon/index.vue';
import { defineComponent, onMounted, reactive, ref } from 'vue';

export default defineComponent({
	name: 'NoticeBar',
	components: {
		SvgIcon,
	},
	props: {
		text: {
			type: String,
			default: '',
		},
		background: {
			type: String,
			default: '',
		},
		color: {
			type: String,
			default: '',
		},
		animation: {
			type: Boolean,
			default: true,
		},
		time: {
			type: Number,
		},
		showLeft: {
			type: Boolean,
			default: true,
		},
		showRight: {
			type: Boolean,
			default: true,
		},
	},
	setup(props) {
		const wrapEl = ref();
		const textEl = ref();

		const state = reactive({
			wrapWidth: 0,
			textWidth: 0,
		});

		// 设置动画样式表
		const initStyleSheet = () => {
			if (!props.animation) return;
			// 获取滚动盒子宽度
			state.wrapWidth = wrapEl.value.clientWidth;
			// 获取滚动内容宽度
			state.textWidth = textEl.value.clientWidth;

			document.styleSheets[0].insertRule(
				`@keyframes noticeBar { 0% { transform: translateX(${state.wrapWidth}px); } 100% { transform: translateX(-${state.textWidth}px); }}`
			);
			initAnimation();
		};

		// 初始化动画
		const initAnimation = () => {
			textEl.value.style.cssText = `animation: noticeBar ${props.time || (state.wrapWidth + state.textWidth) / 100}s linear infinite;`;
		};

		onMounted(() => {
			initStyleSheet();
		});
		return {
			wrapEl,
			textEl,
			state,
		};
	},
});
</script>

<style scoped lang="scss">
.notice-bar {
	background: var(--color-warning-light-9);
	height: 40px;
	padding: 0 15px;
	width: 100%;
	border-radius: 4px;
	display: flex;
	align-items: center;
	color: var(--color-warning);
	font-size: 14px;
	&-left-icon {
		font-size: inherit;
		margin-right: 10px;
		line-height: 0;
	}
	&-right-icon {
		cursor: pointer;
		margin-left: 10px;
	}
	&-wrap {
		flex: 1;
		overflow: hidden;
		&-text {
			line-height: 20px;
			display: inline-block;
			white-space: nowrap;
		}
	}
}
</style>
