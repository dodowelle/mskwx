"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  _easycom_qiun_data_charts2();
}
const _easycom_qiun_data_charts = () => "../../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
if (!Math) {
  _easycom_qiun_data_charts();
}
const _sfc_main = {
  __name: "realLook",
  setup(__props) {
    const activeInt = common_vendor.ref(0);
    const chooseType = (index) => {
      activeInt.value = index;
    };
    const opts = {
      color: ["#D92B34", "#D8D8D8", "#FAC858", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
      padding: [15, 10, 0, 15],
      enableScroll: false,
      legend: {},
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        gridType: "dash",
        dashLength: 2
      },
      extra: {
        line: {
          type: "curve",
          width: 2,
          activeType: "hollow"
        }
      }
    };
    const chartData = common_vendor.ref({});
    common_vendor.onMounted(() => {
      setTimeout(() => {
        let res = {
          categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
          series: [
            {
              name: "今日",
              lineType: "dash",
              data: [35, 36, 31, 33, 13, 34]
            },
            {
              name: "昨日",
              data: [18, 27, 21, 24, 6, 28]
            }
          ]
        };
        chartData.value = JSON.parse(JSON.stringify(res));
      }, 200);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(["商户实收", "营业额", "有效订单", "单均商户实收", "到手率"], (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        b: common_vendor.f(["分时", "累计"], (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(activeInt.value === index ? "active" : ""),
            c: index,
            d: common_vendor.o(($event) => chooseType(index), index)
          };
        }),
        c: common_vendor.p({
          type: "line",
          opts,
          chartData: chartData.value
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eb4ed96b"], ["__file", "E:/MeiShiKai_wx/pages/realList/component/realLook.vue"]]);
wx.createComponent(Component);
