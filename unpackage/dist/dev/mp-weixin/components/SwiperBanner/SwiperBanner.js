"use strict";
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "SwiperBanner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_1
      };
    };
  }
};
wx.createComponent(_sfc_main);
