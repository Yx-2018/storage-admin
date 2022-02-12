import { Result } from '/@/utils/request';
import { MockMethod } from 'vite-plugin-mock';

const userList = [
	{
		userName: 'admin',
		password: '123456',
	},
];

export default [
	{
		url: '/api/login',
		method: 'post',
		response: ({ body }: any): Result<any> => {
			const item = userList.find((p) => p.userName === body.userName);
			if (item && item.password === body.password) {
				return {
					code: 200,
					message: 'success',
					data: {
						userInfo: {
							name: 'admin',
							photo: 'https://avatars.githubusercontent.com/u/35365624?v=4',
						},
						token: new Date().getTime(),
					},
				};
			}
			return {
				code: 1001,
				message: '用户名密码错误',
			};
		},
	},
	{
		url: '/api/user/menu',
		method: 'get',
		response: ({ body }: any): Result<any> => {
			return {
				code: 200,
				message: '成功',
				data: [
					{
						path: '/',
						name: '/',
						redirect: 'home',
						children: [
							{
								path: '/home',
								name: 'home',
								meta: {
									title: '首页',
								},
							},
							{
								path: '/care',
								name: 'care',
								meta: {
									title: '人员',
									icon: 'icon-home',
								},
							},
						],
					},
				],
			};
		},
	},
] as MockMethod[];
