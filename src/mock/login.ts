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
				};
			}
			return {
				code: 1001,
				message: '用户名密码错误',
			};
		},
	},
];
