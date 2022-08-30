import React from 'react'
import { TextField } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'


export function NuTextField(props) {
    const inputStyles = props.styles


      return <TextField
        autofocus={true}
        dark= {true}
        height= {props.height}
        width= {props.width}
        type="text"
        className='input' //outter div
        name={props.name}
        placeholder="what's the next focus?"
        margin-top="auto"
        margin-bottom="auto"
        inputStyles={inputStyles}
        background = "#000"
        margin-left = "auto"
        margin-right = "auto"
      />
  }


