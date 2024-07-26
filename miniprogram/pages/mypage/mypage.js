Page({
  data:{
    date:"",
    region:"",
  },
  submit:function(e){
    let u=e.detail.value;
    wx.cloud
      .callFunction({
        name:"quickstartFunctions",
        data:{
          type:"createGroup",
          data:{
            ...u,
            age:new Date().getMonth,
            region:this.data.region,
          },
        },
      })
      .then((res) =>{
        if (res.result.success) {
          wx.redirectTo({
            url:
            "/pages/index/index",
          });
        }else {
          wx.showModal({
            title:"提示",
            content:res.result.errorMessage,
            success:function () {
              wx.nevigateBack({
                delta: 1,
              });
            },
          });
        }
      });
  },
  dateChange:function(e){
    this.setData({
      date:e.detail.value,
    });
  },
  regionchange:function(e){
    this.setData({
      region:e.detail.value,
    });
  },
});