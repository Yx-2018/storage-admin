import Request from '/@/utils/request';

export function getAccount(data: Object) {
	return Request({
		url: '/parameter/query',
		method: 'post',
		data,
	});
}
