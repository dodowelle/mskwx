
const routes = [
	{
		name: "pages",
		path: "",
		hidden: false,
		redirect: "noRedirect",
		alwaysShow: true,
		style: {
			id: 1,
			navigationBarTitleText: "门店选择",
			icon: "icon-shujudaping",
			noCache: false,
			link: null,
		},
		children: [],
	},
	{
		name: "scpages",
		path: '',
		hidden: false,
		style: {
			navigationBarTitleText: "营业统计",
			icon: "icon-gongneng_yingyetongji",
		},
		children: []
	}, {
		name: "pagesex",
		path: '',
		hidden: false,
		style: {
			navigationBarTitleText: "异常监控",
			icon: "icon-yichangjiankong",
		},
		children: []
	},{
		name: "pagesbm",
		path: '',
		hidden: false,
		style: {
			navigationBarTitleText: "品牌管理",
			icon: "icon-caipin",
		},
		children: []
	}
]

export default routes