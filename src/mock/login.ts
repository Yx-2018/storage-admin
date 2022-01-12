import { Result } from '/@/utils/request';

const userList = [
	{
		account: 'admin',
		password: '123456',
	},
];

export default [
	{
		url: '/api/login',
		method: 'post',
		response: ({ body }: any): Result<any> => {
			const item = userList.find((p) => p.account === body.account);
			if (item && item.password === body.password) {
				return {
					code: 200,
					message: 'success',
					data: {
						userName: 'admin',
						photo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg',
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
		method: 'post',
		response: ({ body }: any): Result<any> => {
			return {
				code: 200,
				message: '成功',
				data: [
					{
						title: '首页',
						path: '/home',
					},
				],
			};
		},
	},
];
