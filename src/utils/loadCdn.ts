const iconfontCdn: string[] = ['//at.alicdn.com/t/font_3138901_2yzgtq2vb7a.css'];

export function setIconfontCdn() {
	if (!iconfontCdn.length) return;
	iconfontCdn.forEach((url) => {
		let link = document.createElement('link');
		link.href = url;
		link.rel = 'stylesheet';
		link.crossOrigin = 'anonymous';
		document.getElementsByTagName('head')[0].appendChild(link);
	});
}
