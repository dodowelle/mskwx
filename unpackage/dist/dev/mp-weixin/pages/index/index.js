"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_page_head2 = common_vendor.resolveComponent("page-head");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_easycom_page_head2 + _easycom_uni_search_bar2)();
}
const _easycom_page_head = () => "../../components/page-head/page-head.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_page_head + _easycom_uni_search_bar)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const orgList = common_vendor.ref(["运营组一", "运营组二", "运营组三", "运营组四"]);
    const search = (val) => {
      console.log("search", val);
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
            b: index
          };
        }),
        e: common_assets._imports_0
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace/MeiShiKai_wx/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
