"use strict";
const common_vendor = require("../common/vendor.js");
const useAppStore = common_vendor.defineStore("counter", {
  state: () => {
    return {
      clickedNav: "",
      // 点击的一级导航
      activeItem: ""
      // 点击的二级导航
    };
  },
  actions: {
    setClickedNav(val) {
      this.clickedNav = val;
    },
    setActiveItem(val) {
      this.activeItem = val;
    }
  }
});
exports.useAppStore = useAppStore;
