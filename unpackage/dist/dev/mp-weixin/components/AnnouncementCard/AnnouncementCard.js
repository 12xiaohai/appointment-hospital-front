"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "AnnouncementCard",
  emits: ["showPopup"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o((...args) => _ctx.showPopup && _ctx.showPopup(...args))
      };
    };
  }
};
wx.createComponent(_sfc_main);
