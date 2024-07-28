Page({
  data: {
    messages: [
      // 假设的聊天记录数据
      { text: '您好，有什么可以帮助您的？' },
      
    ],
    inputText: '' // 用户输入的文本
  },
  onInput: function(event) {
    // 输入时更新 inputText
    this.setData({
      inputText: event.detail.value
    });
  },
  onSendMessage: function() {
    // 发送消息的逻辑
    const inputText = this.data.inputText.trim();
    if (inputText) {
      this.data.messages.push({ text: inputText });
      this.setData({
        messages: this.data.messages,
        inputText: '' // 发送后清空输入框
      });
    }
  }
});