import React from 'react'

function Info(props) {
  return (
    <div>
      Test Info Says: Signal - {props.clr} so userAction - {props.action} / mark - {props.mark}
    </div>
  )
}

export default Info