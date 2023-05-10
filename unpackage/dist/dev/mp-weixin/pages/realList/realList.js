"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_page_head2 = common_vendor.resolveComponent("page-head");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_page_head2 + _easycom_uni_data_picker2 + _easycom_uni_data_select2)();
}
const _easycom_page_head = () => "../../components/page-head/page-head.js";
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (_easycom_page_head + _easycom_uni_data_picker + _easycom_uni_data_select + realLook + realRank)();
}
const realLook = () => "./component/realLook.js";
const realRank = () => "./component/realRank.js";
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
    return (_ctx, _cache) => {
      return common_vendor.e({
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
        j: common_vendor.o(_ctx.handleDate),
        k: common_vendor.o(($event) => dataScope.value = $event),
        l: common_vendor.p({
          localdata: dateTypeItems.value,
          placeholder: "请选择时间",
          clear: false,
          modelValue: dataScope.value
        }),
        m: activeIndex.value === 0
      }, activeIndex.value === 0 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-25327907"], ["__file", "E:/MeiShiKai_wx/pages/realList/realList.vue"]]);
wx.createPage(MiniProgramPage);
