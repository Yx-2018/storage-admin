import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Local } from '/@/utils/storage';
import { STORAGE_ADMIN_TOKEN } from '/@/config';

export interface Result<T> {
	code: number;
	message?: string;
	data?: T;
}

// 配置新建一个 axios 实例
const service = axios.create({
	baseURL: import.meta.env.VITE_API_URL as string,
	timeout: 50000,
	headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
service.interceptors.request.use(
	(config: any) => {
		// 在发送请求之前做些什么 token
		if (Local.get(STORAGE_ADMIN_TOKEN)) {
			config.headers.common['Authorization'] = `${Local.get(STORAGE_ADMIN_TOKEN)}`;
		}
		// 请求前缀
		config.url = import.meta.env.VITE_API_ROOT + config.url;
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
service.interceptors.response.use(
	(response): Result<any> | Promise<any> => {
		// 对响应数据做点什么
		const res = response.data;
		if (res.code === 200) {
			return response.data;
		}
		if (res.code === 4001) {
			Local.clear(); // 清除浏览器全部临时缓存
			window.location.href = '/'; // 去登录页
			ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
				.then(() => {})
				.catch(() => {});
		} else {
			ElMessage.error(res.message || '系统错误');
		}
		return Promise.reject(res);
	},
	(error) => {
		// 对响应错误做点什么
		if (error.message.indexOf('timeout') != -1) {
			ElMessage.error('网络超时');
		} else if (error.message == 'Network Error') {
			ElMessage.error('网络连接错误');
		} else {
			if (error.response.data) ElMessage.error(error.response.statusText);
			else ElMessage.error('接口路径找不到');
		}
		return Promise.reject(error);
	}
);

// 导出 axios 实例
export default service;
