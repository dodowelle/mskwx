"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_th2 = common_vendor.resolveComponent("uni-th");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_th2 + _easycom_uni_tr2 + _easycom_uni_td2 + _easycom_uni_table2)();
}
const _easycom_uni_th = () => "../../../uni_modules/uni-table/components/uni-th/uni-th.js";
const _easycom_uni_tr = () => "../../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_td = () => "../../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_table = () => "../../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_th + _easycom_uni_tr + _easycom_uni_td + _easycom_uni_table)();
}
const _sfc_main = {
  __name: "realRank",
  setup(__props) {
    const loading = common_vendor.ref(false);
    const tabs = common_vendor.ref(["商户实收", "营业额", "有效订单", "到手率", "单均商户实收"]);
    const activeIndex = common_vendor.ref(0);
    const tableData = common_vendor.ref([]);
    const toggle = (index) => {
      loading.value = true;
      activeIndex.value = index;
      setTimeout(() => {
        loading.value = false;
      }, 500);
    };
    const pageInfo = common_vendor.reactive({
      PageSize: 10,
      CurrentPage: 1,
      total: 0
    });
    common_vendor.toRefs(pageInfo);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabs.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(activeIndex.value === index ? "active" : ""),
            c: common_vendor.o(($event) => toggle(index), index),
            d: index
          };
        }),
        b: common_vendor.p({
          width: "60",
          align: "center"
        }),
        c: common_vendor.p({
          align: "left"
        }),
        d: common_vendor.p({
          width: "100",
          align: "center",
          sortable: true
        }),
        e: common_vendor.p({
          width: "90",
          align: "center",
          sortable: true
        }),
        f: common_vendor.p({
          width: "150",
          align: "center",
          sortable: true
        }),
        g: common_vendor.f(tableData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.date),
            b: "1954f0a8-8-" + i0 + "," + ("1954f0a8-7-" + i0),
            c: common_vendor.t(item.name),
            d: "1954f0a8-9-" + i0 + "," + ("1954f0a8-7-" + i0),
            e: common_vendor.t(item.address),
            f: "1954f0a8-10-" + i0 + "," + ("1954f0a8-7-" + i0),
            g: common_vendor.t(item.address),
            h: "1954f0a8-11-" + i0 + "," + ("1954f0a8-7-" + i0),
            i: common_vendor.t(item.address),
            j: "1954f0a8-12-" + i0 + "," + ("1954f0a8-7-" + i0),
            k: index,
            l: "1954f0a8-7-" + i0 + ",1954f0a8-0"
          };
        }),
        h: common_vendor.p({
          align: "center"
        }),
        i: common_vendor.p({
          align: "center"
        }),
        j: common_vendor.p({
          align: "center"
        }),
        k: common_vendor.sr("table", "1954f0a8-0"),
        l: common_vendor.p({
          loading: loading.value,
          border: true,
          stripe: true,
          emptyText: "暂无更多数据"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1954f0a8"], ["__file", "E:/MeiShiKai_wx/pages/realList/component/realRank.vue"]]);
wx.createComponent(Component);
