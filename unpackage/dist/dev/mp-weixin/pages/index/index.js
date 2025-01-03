"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_home_head2 = common_vendor.resolveComponent("home-head");
  const _easycom_SwiperBanner2 = common_vendor.resolveComponent("SwiperBanner");
  const _easycom_AnnouncementCard2 = common_vendor.resolveComponent("AnnouncementCard");
  const _easycom_AnnouncementPopup2 = common_vendor.resolveComponent("AnnouncementPopup");
  const _easycom_function_grid2 = common_vendor.resolveComponent("function-grid");
  (_easycom_home_head2 + _easycom_SwiperBanner2 + _easycom_AnnouncementCard2 + _easycom_AnnouncementPopup2 + _easycom_function_grid2)();
}
const _easycom_home_head = () => "../../components/home-head/home-head.js";
const _easycom_SwiperBanner = () => "../../components/SwiperBanner/SwiperBanner.js";
const _easycom_AnnouncementCard = () => "../../components/AnnouncementCard/AnnouncementCard.js";
const _easycom_AnnouncementPopup = () => "../../components/AnnouncementPopup/AnnouncementPopup.js";
const _easycom_function_grid = () => "../../components/function-grid/function-grid.js";
if (!Math) {
  (_easycom_home_head + _easycom_SwiperBanner + _easycom_AnnouncementCard + _easycom_AnnouncementPopup + _easycom_function_grid)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const announcementPopup = common_vendor.ref(null);
    const onShowPopup = () => {
      if (announcementPopup.value) {
        announcementPopup.value.open();
      } else {
        console.error("AnnouncementPopup 组件未加载！");
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onShowPopup),
        b: common_vendor.sr(announcementPopup, "64b115f0-3", {
          "k": "announcementPopup"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
