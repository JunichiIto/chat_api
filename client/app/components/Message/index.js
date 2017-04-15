import React, { Component } from 'react'

class Message extends Component {
  onClick() {
    const { actions, id } = this.props
    actions.toggleDisplayState(id)
  }

  onRemove() {
    const { actions, id } = this.props
    $.ajax({
      type: 'DELETE',
      url: '/api/messages/' + id,
      success: (() => actions.removeMessage(id))
    })
  }

  render() {
    const { text } = this.props
    return (
      <div>
        <div>
          <span onClick={this.onClick.bind(this)}>{text}</span>
          <input type="button" value="削除" onClick={this.onRemove.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Message