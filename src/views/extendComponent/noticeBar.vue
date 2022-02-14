<template>
	<section>
		<el-card header="默认" class="mb15">
			<NoticeBar text="🔥综合vue3.x 、Typescript、vite、Element plus等在实际项目中使用实践" />
		</el-card>
		<el-card header="自定义配置" class="mb15">
			<NoticeBar
				text="🔥综合vue3.x 、Typescript、vite、Element plus等在实际项目中使用实践"
				color="var(--color-primary)"
				background="var(--color-primary-light-9)"
				:animation="false"
				:time="30"
				:show-left="false"
				:show-right="false"
			/>
		</el-card>
		<el-card header="纵向滚动通知">
			<NoticeBar :animation="false">
				<el-carousel height="20px" direction="vertical" indicator-position="none">
					<el-carousel-item v-for="item in 3" :key="item" class="flex-v-center lh-none"
						>🔥综合vue3.x 、Typescript、vite、Element plus等在实际项目中使用实践</el-carousel-item
					>
				</el-carousel>
			</NoticeBar>
		</el-card>
	</section>
</template>

<script lang="ts">
import NoticeBar from '/@/components/noticeBar/index.vue';

export default {
	name: 'NoticeBarView',
	components: {
		NoticeBar,
	},
};
</script>
