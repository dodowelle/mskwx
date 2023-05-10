"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_page_head2 = common_vendor.resolveComponent("page-head");
  const _easycom_shop_select2 = common_vendor.resolveComponent("shop-select");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_fui_switch2 = common_vendor.resolveComponent("fui-switch");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_toast2 = common_vendor.resolveComponent("fui-toast");
  (_easycom_page_head2 + _easycom_shop_select2 + _easycom_uni_data_select2 + _easycom_fui_switch2 + _easycom_fui_icon2 + _easycom_fui_toast2)();
}
const _easycom_page_head = () => "../../components/page-head/page-head.js";
const _easycom_shop_select = () => "../../components/shop-select/shop-select.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_fui_switch = () => "../../components/firstui/fui-switch/fui-switch.js";
const _easycom_fui_icon = () => "../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_toast = () => "../../components/firstui/fui-toast/fui-toast.js";
if (!Math) {
  (_easycom_page_head + _easycom_shop_select + _easycom_uni_data_select + _easycom_fui_switch + _easycom_fui_icon + _easycom_fui_toast)();
}
const _sfc_main = {
  __name: "businessTarget",
  setup(__props) {
    const toast = common_vendor.ref(null);
    const panel = common_vendor.ref("");
    const dataScope = common_vendor.ref("");
    const orgIds = common_vendor.ref("");
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
    const dateTypeItems = common_vendor.ref([]);
    const orgItems = common_vendor.ref([]);
    const handlePanel = () => {
    };
    const handleDate = () => {
    };
    const handleOrg = () => {
    };
    const checked = common_vendor.ref(true);
    const showToast = () => {
      toast.value.show({
        text: "提示信息"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "目标看板"
        }),
        b: common_vendor.o(handlePanel),
        c: common_vendor.o(($event) => panel.value = $event),
        d: common_vendor.p({
          localdata: panelItems.value,
          placeholder: "按平台",
          clear: false,
          modelValue: panel.value
        }),
        e: common_vendor.o(handleDate),
        f: common_vendor.o(($event) => dataScope.value = $event),
        g: common_vendor.p({
          localdata: dateTypeItems.value,
          placeholder: "按时间",
          clear: false,
          modelValue: dataScope.value
        }),
        h: common_vendor.o(handleOrg),
        i: common_vendor.o(($event) => orgIds.value = $event),
        j: common_vendor.p({
          localdata: orgItems.value,
          placeholder: "按组织",
          clear: false,
          modelValue: orgIds.value
        }),
        k: common_vendor.p({
          scaleRatio: 0.8,
          checked: checked.value,
          color: "#D92B34"
        }),
        l: common_vendor.o(showToast),
        m: common_vendor.p({
          name: "help",
          size: 32,
          color: "#ccc"
        }),
        n: common_vendor.sr(toast, "5a87a93b-7", {
          "k": "toast"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5a87a93b"], ["__file", "E:/MeiShiKai_wx/pages/businessTarget/businessTarget.vue"]]);
wx.createPage(MiniProgramPage);
