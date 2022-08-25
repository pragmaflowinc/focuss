import React from 'react'
import { ToggleButton } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'


export function NuToggle(props) {
    const inputStyles = props.styles


      return <ToggleButton
        
        dark= {true}
        height={80}
        className='toggle' //outter div
        name='onTopToggle'
        inputStyles={inputStyles}
        margin-left = "auto"
        margin-right = "auto"
      />
  }


