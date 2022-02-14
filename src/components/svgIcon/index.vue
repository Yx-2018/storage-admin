<script lang="ts">
import { h, defineComponent, resolveComponent } from 'vue';

/**
 * vue3中不支持组件名直接放在h函数参数，所以需要resolveComponent将组件名解析为组件
 * h('el-icon') -> h(resolveComponent('ElIcon'))
 */

export default defineComponent({
	name: 'SvgIcon',
	props: {
		icon: {
			type: String,
			required: true,
		},
		size: {
			type: String,
		},
		color: {
			type: String,
		},
	},
	setup(props) {
		if (props.icon.startsWith('ElIcon')) {
			return () =>
				h(
					resolveComponent('ElIcon'),
					{
						style: {
							fontSize: props.size,
							color: props.color,
						},
					},
					() => h(resolveComponent(props.icon))
				);
		} else {
			return () =>
				h('i', {
					class: `iconfont ${props.icon}`,
					style: {
						fontSize: props.size,
						color: props.color,
					},
				});
		}
	},
});
</script>
