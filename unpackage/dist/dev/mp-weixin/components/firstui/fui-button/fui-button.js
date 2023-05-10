"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-button",
  emits: ["click", "getuserinfo", "contact", "getphonenumber", "error", "opensetting"],
  props: {
    //样式类型：primary，success， warning，danger，link，purple，gray
    type: {
      type: String,
      default: "primary"
    },
    //按钮背景色，当传入值时type失效
    background: {
      type: String,
      default: ""
    },
    //按钮显示文本
    text: {
      type: String,
      default: ""
    },
    //按钮字体颜色
    color: {
      type: String,
      default: ""
    },
    //按钮禁用背景色
    disabledBackground: {
      type: String,
      default: ""
    },
    //按钮禁用字体颜色
    disabledColor: {
      type: String,
      default: ""
    },
    borderWidth: {
      type: String,
      default: "1px"
    },
    borderColor: {
      type: String,
      default: ""
    },
    //宽度
    width: {
      type: String,
      default: "100%"
    },
    //高度
    height: {
      type: String,
      default: ""
    },
    //字体大小，单位rpx
    size: {
      type: [Number, String],
      default: 0
    },
    bold: {
      type: Boolean,
      default: false
    },
    //['20rpx','30rpx','20rpx','30rpx']->[上，右，下，左]
    margin: {
      type: Array,
      default() {
        return ["0", "0"];
      }
    },
    //圆角
    radius: {
      type: String,
      default: ""
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    formType: {
      type: String,
      default: ""
    },
    openType: {
      type: String,
      default: ""
    },
    //支付宝小程序 
    //当 open-type 为 getAuthorize 时，可以设置 scope 为：phoneNumber、userInfo
    scope: {
      type: String,
      default: ""
    },
    appParameter: {
      type: String,
      default: ""
    },
    index: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    getTypeColor() {
      return "";
    },
    getBackground() {
      let color = this.getTypeColor;
      if (this.disabled || this.plain) {
        color = "transparent";
      }
      if (!this.disabled && !this.plain && this.background) {
        color = this.background;
      }
      return color;
    },
    getColor() {
      let color = "#fff";
      if (this.color) {
        color = this.disabled && this.disabledBackground ? this.disabledColor : this.color;
      } else {
        if (this.disabled && this.disabledBackground) {
          color = this.disabledColor || "#FFFFFF";
        } else {
          color = this.type === "gray" ? "#465CFF" : "#FFFFFF";
        }
      }
      return color;
    },
    getSize() {
      const size = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiButton && common_vendor.index.$fui.fuiButton.size || 32;
      return `${this.size || size}rpx`;
    },
    getHeight() {
      const height = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiButton && common_vendor.index.$fui.fuiButton.height || "96rpx";
      return this.height || height;
    },
    getBorderRadius() {
      let radius = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiButton && common_vendor.index.$fui.fuiButton.radius || "16rpx";
      radius = this.radius || radius || "0";
      if (~radius.indexOf("rpx")) {
        radius = Number(radius.replace("rpx", "")) * 2 + "rpx";
      } else if (~radius.indexOf("px")) {
        radius = Number(radius.replace("px", "")) * 2 + "px";
      } else if (~radius.indexOf("%")) {
        radius = Number(radius.replace("%", "")) * 2 + "%";
      }
      return radius;
    },
    getRadius() {
      const radius = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiButton && common_vendor.index.$fui.fuiButton.radius || "16rpx";
      return this.radius || radius;
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      time: 0,
      trigger: false,
      pc: false
    };
  },
  created() {
  },
  methods: {
    handleStart(e) {
      if (this.disabled)
        return;
      this.trigger = false;
      if (new Date().getTime() - this.time <= 150)
        return;
      this.trigger = true;
      this.time = new Date().getTime();
    },
    handleClick() {
      if (this.disabled || !this.trigger)
        return;
      this.time = 0;
    },
    handleTap() {
      if (this.disabled)
        return;
      this.$emit("click", {
        index: Number(this.index)
      });
    },
    handleEnd(e) {
      if (this.disabled)
        return;
      setTimeout(() => {
        this.time = 0;
      }, 150);
    },
    bindgetuserinfo({
      detail = {}
    } = {}) {
      this.$emit("getuserinfo", detail);
    },
    bindcontact({
      detail = {}
    } = {}) {
      this.$emit("contact", detail);
    },
    bindgetphonenumber({
      detail = {}
    } = {}) {
      this.$emit("getphonenumber", detail);
    },
    binderror({
      detail = {}
    } = {}) {
      this.$emit("error", detail);
    },
    bindopensetting({
      detail = {}
    } = {}) {
      this.$emit("opensetting", detail);
    },
    bindchooseavatar({
      detail = {}
    } = {}) {
      this.$emit("chooseavatar", detail);
    },
    bindlaunchapp({
      detail = {}
    } = {}) {
      this.$emit("launchapp", detail);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.text
  }, $props.text ? {
    b: common_vendor.t($props.text),
    c: !$props.background && !$props.disabledBackground && !$props.plain && $props.type === "gray" && $props.color === "#fff" ? 1 : "",
    d: $props.bold ? 1 : "",
    e: $options.getSize,
    f: $options.getSize,
    g: $props.color ? $props.disabled && $props.disabledBackground ? $props.disabledColor : $props.color : $props.type === "gray" ? "#465CFF" : "#FFFFFF"
  } : {}, {
    h: common_vendor.n($props.bold ? "fui-text__bold" : ""),
    i: common_vendor.n($data.time && ($props.plain || $props.type === "link") ? "fui-button__opacity" : ""),
    j: common_vendor.n(!$props.background && !$props.disabledBackground && !$props.plain ? "fui-button__" + $props.type : ""),
    k: common_vendor.n(!$props.width || $props.width === "100%" || $props.width === true ? "fui-button__flex-1" : ""),
    l: common_vendor.n($data.time && !$props.plain && $props.type !== "link" ? "fui-button__active" : ""),
    m: common_vendor.n($data.pc && !$props.disabled ? $props.plain || $props.type === "link" ? "fui-button__opacity-pc" : "fui-button__active-pc" : ""),
    n: $props.width,
    o: $options.getHeight,
    p: $options.getHeight,
    q: $props.disabled ? $props.disabledBackground || $options.getTypeColor : $props.plain ? "transparent" : $options.getBackground,
    r: !$props.borderColor || !$data.isNvue ? "0" : $props.borderWidth,
    s: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent",
    t: $options.getRadius,
    v: $options.getSize,
    w: $options.getColor,
    x: $props.loading,
    y: $props.formType,
    z: $props.openType,
    A: $props.appParameter,
    B: common_vendor.o((...args) => $options.bindgetuserinfo && $options.bindgetuserinfo(...args)),
    C: common_vendor.o((...args) => $options.bindgetphonenumber && $options.bindgetphonenumber(...args)),
    D: common_vendor.o((...args) => $options.bindcontact && $options.bindcontact(...args)),
    E: common_vendor.o((...args) => $options.binderror && $options.binderror(...args)),
    F: common_vendor.o((...args) => $options.bindopensetting && $options.bindopensetting(...args)),
    G: common_vendor.o((...args) => $options.bindchooseavatar && $options.bindchooseavatar(...args)),
    H: common_vendor.o((...args) => $options.bindlaunchapp && $options.bindlaunchapp(...args)),
    I: $props.disabled,
    J: $props.scope,
    K: common_vendor.o((...args) => $options.handleTap && $options.handleTap(...args)),
    L: $props.borderColor
  }, $props.borderColor ? {
    M: common_vendor.n($data.time && ($props.plain || $props.type === "link") && !$props.disabled ? "fui-button__opacity" : ""),
    N: common_vendor.n($props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""),
    O: $props.borderWidth,
    P: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent",
    Q: $options.getBorderRadius
  } : {}, {
    R: common_vendor.n(!$props.width || $props.width === "100%" || $props.width === true ? "fui-button__flex-1" : ""),
    S: common_vendor.n($props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""),
    T: $props.width,
    U: $options.getHeight,
    V: $props.margin[0] || 0,
    W: $props.margin[1] || 0,
    X: $props.margin[2] || $props.margin[0] || 0,
    Y: $props.margin[3] || $props.margin[1] || 0,
    Z: $options.getRadius,
    aa: $options.getBackground,
    ab: common_vendor.o((...args) => $options.handleStart && $options.handleStart(...args)),
    ac: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args)),
    ad: common_vendor.o((...args) => $options.handleEnd && $options.handleEnd(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-face3f74"], ["__file", "E:/MeiShiKai_wx/components/firstui/fui-button/fui-button.vue"]]);
wx.createComponent(Component);
