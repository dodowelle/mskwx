"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  _easycom_uni_data_picker2();
}
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
if (!Math) {
  _easycom_uni_data_picker();
}
const _sfc_main = {
  __name: "shop-select",
  setup(__props, { expose }) {
    const items = common_vendor.ref([{
      text: "一级组织",
      value: "0",
      children: [{
        text: "二级组织",
        value: "1"
      }]
    }]);
    const storeData = common_vendor.ref([]);
    const handleStore = () => {
    };
    expose({
      storeData
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.o(handleStore),
        c: common_vendor.o(($event) => storeData.value = $event),
        d: common_vendor.p({
          localdata: items.value,
          ["popup-title"]: "请选择门店",
          border: false,
          modelValue: storeData.value
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2d2ecdae"], ["__file", "E:/MeiShiKai_wx/components/shop-select/shop-select.vue"]]);
wx.createComponent(Component);
