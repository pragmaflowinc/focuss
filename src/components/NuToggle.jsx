import React, { useState} from "react";
import { ToggleButton } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";



export function NuToggle(props) {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleButton
      name={props.name}
      color= {props.color}      
      dark={true}
      height={props.height}
      width={props.width}
      className='{props.className}' //outter-most div
      // onclick={props.onclick}
      label={props.label}
      // disabled={props.disabled || false}
      checked={checked || true}
      // onChange={props.onChange}
      onchange={(e) => { setChecked(e.target.checked) }}
      
      
    />
  );
}
