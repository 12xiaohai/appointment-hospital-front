"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
const _sfc_main = {
  __name: "consultation",
  setup(__props) {
    const navigateToDoctorList = () => {
      common_vendor.index.navigateTo({
        url: `/pages/doctorlist/doctorlist`
        // 传递搜索框内容
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          radius: "20",
          focus: false,
          ["cancel-button"]: "none",
          placeholder: "搜索医生、科室、病症"
        }),
        b: common_vendor.o(navigateToDoctorList)
      };
    };
  }
};
wx.createPage(_sfc_main);
