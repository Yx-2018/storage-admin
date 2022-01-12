import * as icons from '@element-plus/icons-vue';
import { App } from 'vue';

/**
 * 注册图标
 * @param app
 */
export function registerIcon(app: App) {
	const svgIcons = icons as any;
	for (const icon in svgIcons) {
		app.component(`ElIcon${icon}`, svgIcons[icon]);
	}
}
