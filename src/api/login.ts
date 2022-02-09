import Request from '/@/utils/request';

export function login(data: object) {
	return Request({
		url: '/login',
		method: 'post',
		data,
	});
}

export function getUserMenu() {
	return Request({
		url: `/user/menu`,
		method: 'get',
	});
}
