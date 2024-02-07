import React from 'react'
import C from './C'

function B(props) {
  return (
    <div>
        <C getItem = {props.item}/>
    </div>
  )
}

export default B