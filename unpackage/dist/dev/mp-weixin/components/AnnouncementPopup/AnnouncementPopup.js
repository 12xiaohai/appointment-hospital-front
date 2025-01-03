"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "AnnouncementPopup",
  setup(__props, { expose: __expose }) {
    const popup = common_vendor.ref(null);
    const open = () => {
      if (popup.value) {
        popup.value.open();
      } else {
        console.error("Popup组件未加载完成！");
      }
    };
    __expose({
      open
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o((...args) => _ctx.closePopup && _ctx.closePopup(...args)),
        b: common_vendor.sr(popup, "7b2f3874-0", {
          "k": "popup"
        }),
        c: common_vendor.p({
          type: "center"
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
