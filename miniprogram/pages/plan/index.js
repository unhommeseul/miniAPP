Page({
  data: {
    day1: '',
    day2: '',
    day3: '',
    day4: '',
    day5: '',
    day6: '',
    day7: ''
  },
  onLoad: function() {
    this.loadFromStorage();
  },
  handleDay1Input: function(e) {
    this.setData({
      day1: e.detail.value
    });
    this.saveToStorage('day1', e.detail.value);
  },
  handleDay2Input: function(e) {
    this.setData({
      day2: e.detail.value
    });
    this.saveToStorage('day2', e.detail.value);
  },
  handleDay3Input: function(e) {
    this.setData({
      day3: e.detail.value
    });
    this.saveToStorage('day3', e.detail.value);
  },
    handleDay4Input: function(e) {
    this.setData({
      day4: e.detail.value
    });
    this.saveToStorage('day4', e.detail.value);
  },
    handleDay5Input: function(e) {
    this.setData({
      day5: e.detail.value
    });
    this.saveToStorage('day5', e.detail.value);
  },
    handleDay6Input: function(e) {
    this.setData({
      day6: e.detail.value
    });
    this.saveToStorage('day6', e.detail.value);
  },
    handleDay7Input: function(e) {
    this.setData({
      day7: e.detail.value
    });
    this.saveToStorage('da7', e.detail.value);
  },
  loadFromStorage: function() {
    const day1 = wx.getStorageSync('day1') || '';
    const day2 = wx.getStorageSync('day2') || '';
    const day3 = wx.getStorageSync('day3') || '';
    const day4 = wx.getStorageSync('day4') || '';
    const day5 = wx.getStorageSync('day5') || '';
    const day6 = wx.getStorageSync('day6') || '';
    const day7 = wx.getStorageSync('day7') || '';
    this.setData({
      day1,
      day2,
      day3,
      day4,
      day5,
      day6,
      day7
    });
  },
  saveToStorage: function(key, value) {
    wx.setStorageSync(key, value);
  }
});