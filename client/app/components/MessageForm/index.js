import React, { Component } from 'react'

// Componentはイベントが使える
class MessageForm extends Component {
  onSubmit() {
    const { actions } = this.props
    actions.addMessage(this.textMessage.value)
  }

  // メソッド定義
  render() {
    return (
      <div>
        <textarea ref={(input) => { this.textMessage = input }} rows="4" cols="40" />
        <input type="button" value="登録" onClick={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default MessageForm