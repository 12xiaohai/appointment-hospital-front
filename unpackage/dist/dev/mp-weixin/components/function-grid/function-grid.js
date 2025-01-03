"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid)();
}
const _sfc_main = {
  __name: "function-grid",
  setup(__props) {
    const gridItems = common_vendor.ref([
      {
        icon: "/static/icons/doctor.png",
        name: "查找医生",
        path: "/pages/doctorlist/doctorlist"
      },
      {
        icon: "/static/icons/doctor.png",
        name: "门诊预约",
        path: "/pages/appointment/appointment"
      },
      {
        icon: "/static/icons/doctor.png",
        name: "在线商城",
        path: "/pages/store/store"
      },
      {
        icon: "/static/icons/doctor.png",
        name: "在线咨询",
        path: "/pages/consultation/consultation"
      },
      {
        icon: "/static/icons/doctor.png",
        name: "养生知识",
        path: "/pages/health/health"
      },
      {
        icon: "/static/icons/doctor.png",
        name: "药材介绍",
        path: "/pages/herb/herb"
      },
      {
        icon: "/static/icons/doctor.png",
        name: "AI大模型",
        path: ""
      },
      // 示例，未定义路径
      {
        icon: "/static/icons/doctor.png",
        name: "课程报名",
        path: "/pages/course/course"
      }
    ]);
    const handleClick = (index) => {
      const selectedItem = gridItems.value[index];
      console.log("跳转路径:", selectedItem.path);
      if (selectedItem && selectedItem.path) {
        common_vendor.index.navigateTo({
          url: selectedItem.path
          // 普通页面跳转
        });
      } else {
        common_vendor.index.showToast({
          title: "功能尚未开放！",
          icon: "none"
        });
        console.warn(`未定义跳转路径: ${(selectedItem == null ? void 0 : selectedItem.name) || "未知模块"}`);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(gridItems.value, (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.name),
            c: index,
            d: common_vendor.o(($event) => handleClick(index), index),
            e: "d75bddc0-1-" + i0 + ",d75bddc0-0",
            f: common_vendor.p({
              index
            })
          };
        }),
        b: common_vendor.p({
          column: 4,
          highlight: true,
          showBorder: false,
          square: false
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
