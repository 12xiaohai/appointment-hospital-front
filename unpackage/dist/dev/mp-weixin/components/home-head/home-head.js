"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
const _sfc_main = {
  __name: "home-head",
  setup(__props) {
    common_vendor.ref("");
    const navigateToDoctorList = () => {
      common_vendor.index.navigateTo({
        url: `/pages/doctorlist/doctorlist`
        // 传递搜索框内容
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        c: common_vendor.p({
          radius: "20",
          focus: false,
          ["cancel-button"]: "none",
          placeholder: "搜索医生、科室、病症"
        }),
        d: common_vendor.o(navigateToDoctorList)
      };
    };
  }
};
wx.createComponent(_sfc_main);
