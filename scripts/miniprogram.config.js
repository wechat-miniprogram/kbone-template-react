/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
	origin: 'https://test.miniprogram.com',
	entry: '/test/aaa',
	router: {
		index: [
			'/test/aaa',
			'/test/bbb',
		],
		log: [
			'/test/aaa',
			'/test/bbb',
		]
	},
	redirect: {
		notFound: 'index',
		accessDenied: 'index',
	},
	generate: {
        autoBuildNpm: 'npm',
    },
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},
	appExtraConfig: {
        sitemapLocation: 'sitemap.json',
	},
	global: {},
	pages: {},
	optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
	projectConfig: {
        projectname: 'kbone-template-react',
		appid: '',
	},
}