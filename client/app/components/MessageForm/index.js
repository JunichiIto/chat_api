import React, { Component } from 'react'

// Componentはイベントが使える
class MessageForm extends Component {
  // メソッド定義
  render() {
    return (
      <div>
        <textarea rows="4" cols="40" />
        <input type="button" value="登録" />
      </div>
    )
  }
}

export default MessageForm