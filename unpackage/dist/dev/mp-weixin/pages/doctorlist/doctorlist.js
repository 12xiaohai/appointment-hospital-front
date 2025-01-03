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
  __name: "doctorlist",
  setup(__props) {
    const searchKeyword = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      if (options.keyword) {
        searchKeyword.value = decodeURIComponent(options.keyword);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(_ctx.handleSearch),
        b: common_vendor.o(($event) => searchKeyword.value = $event),
        c: common_vendor.p({
          radius: "20",
          ["cancel-button"]: "none",
          placeholder: "搜索医生、科室、病症",
          focus: true,
          modelValue: searchKeyword.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
