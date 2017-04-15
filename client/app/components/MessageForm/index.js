import React, { Component } from 'react'
import $ from 'jquery'

// Componentはイベントが使える
class MessageForm extends Component {
  onSubmit() {
    const { actions } = this.props
    $.ajax({
      type: 'POST',
      url: '/api/messages',
      data: {
        message: {text: this.textMessage.value}
      },
      success: ((data) => actions.addMessage(data))
    })
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