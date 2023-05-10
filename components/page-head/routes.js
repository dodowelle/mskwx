
const routes = [
	{
		name: "storeChoose",
		path: "",
		hidden: false,
		redirect: "noRedirect",
		alwaysShow: true,
		meta: {
			id: 1,
			title: "门店选择",
			icon: "icon-shujudaping",
			noCache: false,
			link: null,
		},
		children: [{
			name: "storeChoose1",
			path: "/pages/index/index",
			hidden: false,
			meta: {
				title: '选择门店',
				icon: ''
			}
		}],
	},
	{
		name: "storeChoose",
		path: '',
		hidden: false,
		meta: {
			title: "营业统计",
			icon: "icon-gongneng_yingyetongji",
		},
		children: [
			{
				name: "BusinessRealList",
				path: "/pages/realList/realList",
				hidden: false,
				meta: {
					title: '实时看板',
					icon: ''
				}
			},
			{
				name: "BusinessTarget",
				path: "/pages/businessTarget/businessTarget",
				hidden: false,
				meta: {
					title: '目标看板',
					icon: ''
				}
			}
		]
	}
]

export default routes