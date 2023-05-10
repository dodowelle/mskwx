"use strict";
const common_vendor = require("../../../common/vendor.js");
const icons = {
  "addressbook": "",
  "addfriends-fill": "",
  "addfriends": "",
  "backspace-fill": "",
  "backspace": "",
  "bankcard-fill": "",
  "bankcard": "",
  "camera-fill": "",
  "camera": "",
  "captcha-fill": "",
  "captcha": "",
  "cart-fill": "",
  "cart": "",
  "classify": "",
  "classify-fill": "",
  "comment-fill": "",
  "comment": "",
  "community-fill": "",
  "community": "",
  "coupon-fill": "",
  "coupon": "",
  "delete": "",
  "delete-fill": "",
  "edit": "",
  "edit-fill": "",
  "fabulous-fill": "",
  "fabulous": "",
  "find": "",
  "find-fill": "",
  "help-fill": "",
  "help": "",
  "home-fill": "",
  "home": "",
  "idcard-fill": "",
  "idcard": "",
  "info": "",
  "info-fill": "",
  "invite-fill": "",
  "invite": "",
  "kefu-fill": "",
  "kefu": "",
  "like-fill": "",
  "like": "",
  "location": "",
  "location-fill": "",
  "lock": "",
  "lock-fill": "",
  "mail-fill": "",
  "mail": "",
  "message": "",
  "message-fill": "",
  "mobile-fill": "",
  "mobile": "",
  "more": "",
  "more-fill": "",
  "my-fill": "",
  "my": "",
  "principal": "",
  "notice-fill": "",
  "notice": "",
  "order": "",
  "order-fill": "",
  "picture": "",
  "picture-fill": "",
  "setup-fill": "",
  "setup": "",
  "share": "",
  "share-fill": "",
  "shop": "",
  "shop-fill": "",
  "star-fill": "",
  "star": "",
  "starhalf": "",
  "stepon-fill": "",
  "stepon": "",
  "wait-fill": "",
  "wait": "",
  "warning": "",
  "warning-fill": "",
  "plus": "",
  "plussign-fill": "",
  "plussign": "",
  "minus": "",
  "minussign": "",
  "minussign-fill": "",
  "close": "",
  "clear": "",
  "clear-fill": "",
  "checkbox-fill": "",
  "checkround": "",
  "checkbox": "",
  "check": "",
  "pulldown-fill": "",
  "pullup": "",
  "pullup-fill": "",
  "pulldown": "",
  "roundright-fill": "",
  "roundright": "",
  "arrowright": "",
  "arrowleft": "",
  "arrowdown": "",
  "left": "",
  "up": "",
  "right": "",
  "back": "",
  "top": "",
  "dropdown": "",
  "turningleft": "",
  "turningup": "",
  "turningright": "",
  "turningdown": "",
  "refresh": "",
  "loading": "",
  "search": "",
  "rotate": "",
  "screen": "",
  "signin": "",
  "calendar": "",
  "scan": "",
  "qrcode": "",
  "wallet": "",
  "telephone": "",
  "visible": "",
  "invisible": "",
  "menu": "",
  "operate": "",
  "slide": "",
  "list": "",
  "nonetwork": "",
  "partake": "",
  "qa": "",
  "barchart": "",
  "piechart": "",
  "linechart": "",
  "at": "",
  "face": "",
  "redpacket": "",
  "suspend": "",
  "link": "",
  "keyboard": "",
  "play": "",
  "video": "",
  "voice": "",
  "sina": "",
  "browser": "",
  "moments": "",
  "qq": "",
  "wechat": "",
  "balance": "",
  "bankcardpay": "",
  "wxpay": "",
  "alipay": "",
  "payment": "",
  "receive": "",
  "sendout": "",
  "evaluate": "",
  "aftersale": "",
  "warehouse": "",
  "transport": "",
  "delivery": "",
  "switch": "",
  "goods": "",
  "goods-fill": ""
};
const _sfc_main = {
  name: "fui-icon",
  emits: ["click"],
  options: {
    addGlobalClass: true
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 64
    },
    //rpx | px
    unit: {
      type: String,
      default: "rpx"
    },
    color: {
      type: String,
      default: ""
    },
    //字重
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    //是否禁用点击
    disabled: {
      type: Boolean,
      default: false
    },
    params: {
      type: [Number, String],
      default: 0
    },
    customPrefix: {
      type: String,
      default: ""
    },
    //是否显示为主色调，color为空时有效。nvue不支持【内部使用】
    primary: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      icons
    };
  },
  methods: {
    handleClick() {
      if (this.disabled)
        return;
      this.$emit("click", {
        params: this.params
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.icons[$props.name] || ""),
    b: $props.color,
    c: $props.size + $props.unit,
    d: $props.fontWeight,
    e: common_vendor.n(!$props.color && !$props.primary ? "fui-icon__color" : ""),
    f: common_vendor.n($props.primary && !$props.color ? "fui-icon__active-color" : ""),
    g: common_vendor.n($props.disabled ? "fui-icon__not-allowed" : ""),
    h: common_vendor.n($props.customPrefix),
    i: common_vendor.n($props.customPrefix ? $props.name : ""),
    j: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-665e11e9"], ["__file", "E:/MeiShiKai_wx/components/firstui/fui-icon/fui-icon.vue"]]);
wx.createComponent(Component);
