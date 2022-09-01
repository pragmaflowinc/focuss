import React from 'react'
import { TextField } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'


export function NuTextField(props) {
    const inputStyles = props.styles


      return <TextField
        style={props.styles}
        autofocus={true}
        dark= {true}
        height= {props.height}
        width= {props.width}
        type="text"
        className='input' //outter div
        name={props.name}
        placeholder={props.placeholder}
        inputStyles={inputStyles}
        margin-left = "auto"
        margin-right = "auto"
      />
  }


