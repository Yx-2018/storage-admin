import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

/**
 * 按需引入后，部分组件样式不可用，目前采用全局引入
 * 线上可以使用cdn引入，减小打包体积
 */

export default [
	AutoImport({
		resolvers: [ElementPlusResolver()],
	}),
	Components({
		resolvers: [ElementPlusResolver()],
	}),
];
