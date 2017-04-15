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

  onCancel() {
    const { actions, message } = this.props
    actions.toggleDisplayState(message.id)
  }

  // メソッド定義
  render() {
    const { message } = this.props
    const cancelButton = message ? <input type="button" value="キャンセル" onClick={this.onCancel.bind(this)} /> : null
    return (
      <div>
        <textarea ref={(input) => { this.textMessage = input }} rows="4" cols="40" defaultValue={message ? message.text : ''} />
        {cancelButton}
        <input type="button" value={message ? '更新' : '登録'} onClick={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default MessageForm