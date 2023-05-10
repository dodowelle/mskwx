"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_page_head2 = common_vendor.resolveComponent("page-head");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_next_orgit2 = common_vendor.resolveComponent("next-orgit");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  (_easycom_page_head2 + _easycom_uni_search_bar2 + _easycom_next_orgit2 + _easycom_uni_drawer2)();
}
const _easycom_page_head = () => "../../components/page-head/page-head.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_next_orgit = () => "../../components/next-orgit/next-orgit.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
if (!Math) {
  (_easycom_page_head + _easycom_uni_search_bar + _easycom_next_orgit + _easycom_uni_drawer)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const cns = common_vendor.getCurrentInstance();
    const screenWidth = common_vendor.index.getWindowInfo().screenWidth;
    const orgList = common_vendor.ref(["运营组一", "运营组二", "运营组三", "运营组四"]);
    const search = (val) => {
      console.log("search", val);
    };
    const shoDrawer = () => {
      console.log(666, cns);
      cns.refs["showRight"].open();
    };
    const selectAll = () => {
      cns.refs["showRight"].close();
    };
    const goBack = () => {
      cns.refs["showRight"].close();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "营业统计"
        }),
        b: common_vendor.o(search),
        c: common_vendor.p({
          placeholder: "输入门店名称",
          radius: "20",
          bgColor: "#F5F6FA",
          clearButton: "auto",
          cancelButton: "none"
        }),
        d: common_vendor.f(orgList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.o(shoDrawer, index),
            c: index
          };
        }),
        e: common_assets._imports_0,
        f: common_vendor.o(selectAll),
        g: common_vendor.o(goBack),
        h: common_vendor.sr("showRight", "087edc72-2"),
        i: common_vendor.p({
          mode: "right",
          width: common_vendor.unref(screenWidth),
          ["mask-click"]: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/MeiShiKai_wx/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
