import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { loadEnv } from '/@/utils/viteBuild';
import ElementPlugins from '/@/plugins/elementUI';
import MockPlugin from '/@/plugins/mock';

const pathResolve = (dir: string): any => {
	return resolve(__dirname, '.', dir);
};

const { VITE_PORT, VITE_OPEN, VITE_PUBLIC_PATH } = loadEnv();

const alias: Record<string, string> = {
	'/@': pathResolve('./src/'),
};

export default defineConfig({
	plugins: [vue(), ...ElementPlugins, MockPlugin],
	root: process.cwd(),
	resolve: { alias },
	base: process.env.NODE_ENV === 'production' ? VITE_PUBLIC_PATH : './',
	server: {
		host: '0.0.0.0',
		port: VITE_PORT,
		open: VITE_OPEN,
		proxy: {
			'/gitee': {
				target: 'https://gitee.com',
				ws: true,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/gitee/, ''),
			},
		},
	},
	build: {
		outDir: 'dist',
		minify: 'esbuild',
		sourcemap: false,
		chunkSizeWarningLimit: 1500,
	},
});
