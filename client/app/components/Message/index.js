import React, { Component } from 'react'

class Message extends Component {
  onClick() {
    const { actions, id } = this.props
    actions.toggleDisplayState(id)
  }

  render() {
    const { text } = this.props
    return (
      <div onClick={this.onClick.bind(this)}>
        {text}
      </div>
    )
  }
}

export default Message