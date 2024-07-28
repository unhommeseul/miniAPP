Page({
  data: {
    imgs: [
      "https://m.360buyimg.com/babel/jfs/t20260713/169353/21/38491/136346/64b0a7c7F115f8a08/c413a29fab739105.png",      "https://m.360buyimg.com/babel/jfs/t1/44470/17/29147/207505/66973bd3Fc89ac09d/1dae554d7239bfd8.png",
    ],
  },
  onCustomerServiceTap: function () {
    // 跳转到AI智能助手页面
    wx.navigateTo({
      url: "/pages/ai-assistant/ai-assistant", // 后期替换为实际页面路径
    });
  },
  onCustomerServiceTap: function () {
    // 跳转到客服页面
    wx.navigateTo({
      url: "/pages/customer/customer", 
    });
  },
});