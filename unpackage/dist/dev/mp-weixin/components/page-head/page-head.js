"use strict";
const common_vendor = require("../../common/vendor.js");
const components_pageHead_routes = require("./routes.js");
const common_assets = require("../../common/assets.js");
const siderbarItem = () => "./siderbarItem.js";
const _sfc_main = {
  name: "page-head",
  components: {
    siderbarItem
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      routes: components_pageHead_routes.routes,
      customBar: 88,
      statusBar: 0,
      activeIndex: "",
      activeItem: "门店选择1"
    };
  },
  created() {
    const that = this;
    common_vendor.index.getSystemInfo({
      success(e) {
        that.statusBar = e.statusBarHeight;
        that.customBar = e.statusBarHeight + 48;
      }
    });
  },
  methods: {
    toggle() {
      this.$refs.navLeft.open();
    },
    updateActiveItem(val) {
      this.activeItem = val;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _component_siderbarItem = common_vendor.resolveComponent("siderbarItem");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  (_easycom_uni_icons2 + _easycom_uni_nav_bar2 + _component_siderbarItem + _easycom_uni_drawer2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_nav_bar + _easycom_uni_drawer)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "bars",
      size: "20",
      color: "#ffffff"
    }),
    b: common_vendor.t($props.title),
    c: common_vendor.o((...args) => $options.toggle && $options.toggle(...args)),
    d: $data.statusBar + "px",
    e: common_vendor.p({
      backgroundColor: "#D92B34",
      color: "#ffffff",
      leftWidth: "620rpx",
      height: $data.customBar
    }),
    f: common_assets._imports_0$2,
    g: common_vendor.f($data.routes, (route, index, i0) => {
      return {
        a: index,
        b: "e80b2f0b-3-" + i0 + ",e80b2f0b-2",
        c: common_vendor.o(($event) => $data.activeIndex = $event, index),
        d: common_vendor.p({
          item: route,
          ["active-index"]: $data.activeIndex
        })
      };
    }),
    h: common_vendor.sr("navLeft", "e80b2f0b-2"),
    i: common_vendor.p({
      width: 280
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e80b2f0b"], ["__file", "E:/workspace/MeiShiKai_wx/components/page-head/page-head.vue"]]);
wx.createComponent(Component);
