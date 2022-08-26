import React, {useState} from 'react'
import { TextField } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'


export function TimerField(props) {
    const inputStyles = props.styles


      const [PopUpTimer, setPopUpTimer] = useState(0);

      return <TextField
        dark= {true}
        height={30}
        type="text"
        className='input' //outter div
        name='mainInput'
        placeholder="180"
        margin-top="auto"
        margin-bottom="auto"
        inputStyles={inputStyles}
        background = "#000"
        margin-left = "auto"
        margin-right = "auto"
        id = "timerField"
      />
  }


