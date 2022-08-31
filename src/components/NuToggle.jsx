import React from 'react'
import { ToggleButton } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'


export function NuToggle(props) {
    const inputStyles = props.styles


      return <ToggleButton
        
        dark= {true}
        height={props.height}
        className= {props.className} //outter-most div
        name='onTopToggle'
        inputStyles={inputStyles}
        margin-left= "auto"
        margin-right= "auto"
        onclick= {props.onclick}
      />
  }


