import React from 'react'

// var Message = function (props) {
//   var text = props.text
// }

const Message = ({text}) => {
  // JSX = React importが必須
  return (
    <div>
      {text}
    </div>
  )
}

export default Message