"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
const ChildItem = () => "./child-item.js";
const store = store_index.useAppStore();
const _sfc_main = {
  props: {
    item: {
      type: Object,
      required: true
    },
    activeIndex: {
      type: String
    }
  },
  components: {
    ChildItem
  },
  data() {
    return {
      active: ""
    };
  },
  computed: {
    isActive() {
      return store.clickedNav === this.item.meta.title;
    },
    isActiveItem() {
      return store.activeItem === this.item.meta.title;
    }
  },
  methods: {
    handClick(item) {
      console.log("handClick", item.name);
      if (store.clickedNav === item.meta.title) {
        store.setClickedNav("");
      } else {
        store.setClickedNav(item.meta.title);
      }
    },
    handClick2(item) {
      console.log("handClick2", item.name);
      if (store.activeItem === this.item.meta.title)
        ;
      else {
        store.setActiveItem(item.meta.title);
        common_vendor.index.navigateTo({
          url: item.path
        });
      }
    },
    hasShowingChild(children = [], parent) {
      if (!children) {
        children = [];
      }
      const showingChildren = children.filter((item) => {
        return !item.hidden;
      });
      if (showingChildren.length > 0) {
        return true;
      }
      return false;
    }
  }
};
if (!Array) {
  const _component_child_item = common_vendor.resolveComponent("child-item");
  _component_child_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.item.hidden
  }, !$props.item.hidden ? common_vendor.e({
    b: $options.hasShowingChild($props.item.children, $props.item)
  }, $options.hasShowingChild($props.item.children, $props.item) ? {
    c: common_vendor.n($props.item.meta.icon || ""),
    d: common_vendor.n($options.isActive ? "icon_active" : ""),
    e: common_vendor.t($props.item.meta.title),
    f: common_vendor.t($options.isActive ? "" : ""),
    g: common_vendor.o(($event) => $options.handClick($props.item))
  } : {
    h: common_vendor.n($props.item.meta.icon || ""),
    i: common_vendor.n($options.isActive ? "icon_active" : ""),
    j: common_vendor.t($props.item.meta.title),
    k: common_vendor.o(($event) => $options.handClick2($props.item))
  }, {
    l: common_vendor.n($options.isActiveItem ? "active_item" : ""),
    m: $props.item.children && $options.isActive
  }, $props.item.children && $options.isActive ? {
    n: common_vendor.f($props.item.children, (child, ind, i0) => {
      return {
        a: ind,
        b: "9be3e92c-0-" + i0,
        c: common_vendor.p({
          item: child
        })
      };
    })
  } : {}, {
    o: common_vendor.n($options.isActive ? "active" : "")
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9be3e92c"], ["__file", "E:/MeiShiKai_wx/components/page-head/siderbarItem.vue"]]);
wx.createComponent(Component);
