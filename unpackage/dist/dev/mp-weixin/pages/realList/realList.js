"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_page_head2 = common_vendor.resolveComponent("page-head");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  (_easycom_page_head2 + _easycom_uni_data_picker2 + _easycom_uni_data_select2 + _easycom_qiun_data_charts2)();
}
const _easycom_page_head = () => "../../components/page-head/page-head.js";
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
if (!Math) {
  (_easycom_page_head + _easycom_uni_data_picker + _easycom_uni_data_select + _easycom_qiun_data_charts)();
}
const _sfc_main = {
  __name: "realList",
  setup(__props) {
    const tabs = ["实时看板", "实时门店排行榜"];
    const items = common_vendor.ref([{
      text: "一级组织",
      value: "0",
      children: [{
        text: "二级组织",
        value: "1"
      }]
    }]);
    const activeIndex = common_vendor.ref(0);
    const storeData = common_vendor.ref([]);
    const panel = common_vendor.ref("0");
    const dataScope = common_vendor.ref(-1);
    const dateTypeItems = common_vendor.ref([
      {
        text: "比昨日",
        value: -1
      },
      {
        text: "比一周内",
        value: -7
      }
    ]);
    const panelItems = common_vendor.ref([
      {
        text: "全部平台",
        value: "0"
      },
      {
        text: "美团",
        value: "1"
      },
      {
        text: "饿了么",
        value: "2"
      }
    ]);
    const changeTab = (index) => {
      activeIndex.value = index;
    };
    const handleStore = (val) => {
      console.log(val);
    };
    const handlePanel = (val) => {
      console.log(val);
    };
    const handleDate = (val) => {
    };
    const activeInt = common_vendor.ref(0);
    const chooseType = (index) => {
      activeInt.value = index;
    };
    const chartData = common_vendor.ref({});
    common_vendor.onMounted(() => {
      setTimeout(() => {
        let res = {
          categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
          series: [
            {
              name: "目标值",
              data: [35, 36, 31, 33, 13, 34]
            },
            {
              name: "完成量",
              data: [18, 27, 21, 24, 6, 28]
            }
          ]
        };
        chartData.value = JSON.parse(JSON.stringify(res));
      }, 200);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "实时看板"
        }),
        b: common_vendor.f(tabs, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => changeTab(index), index),
            d: common_vendor.n(activeIndex.value === index ? "active" : "")
          };
        }),
        c: common_assets._imports_0$1,
        d: common_vendor.o(handleStore),
        e: common_vendor.o(($event) => storeData.value = $event),
        f: common_vendor.p({
          localdata: items.value,
          ["popup-title"]: "请选择门店",
          border: false,
          modelValue: storeData.value
        }),
        g: common_vendor.o(handlePanel),
        h: common_vendor.o(($event) => panel.value = $event),
        i: common_vendor.p({
          localdata: panelItems.value,
          placeholder: "请选择平台",
          clear: false,
          modelValue: panel.value
        }),
        j: common_vendor.o(handleDate),
        k: common_vendor.o(($event) => dataScope.value = $event),
        l: common_vendor.p({
          localdata: dateTypeItems.value,
          placeholder: "请选择时间",
          clear: false,
          modelValue: dataScope.value
        }),
        m: common_vendor.f(["商户实收", "营业额", "有效订单", "单均商户实收", "到手率"], (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        n: common_vendor.f(["分时", "累计"], (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(activeInt.value === index ? "active" : ""),
            c: index,
            d: common_vendor.o(($event) => chooseType(index), index)
          };
        }),
        o: common_vendor.p({
          type: "column",
          chartData: chartData.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-25327907"], ["__file", "E:/workspace/MeiShiKai_wx/pages/realList/realList.vue"]]);
wx.createPage(MiniProgramPage);
