import React, { useState } from "react";
import { checkbox } from "react";
import "ui-neumorphism/dist/index.css";

export function checkbox(props) {
  const [checked, setChecked] = useState(false);

  return (
    <checkbox
      name={props.name}
      color={props.color}
      dark={true}
      height={props.height}
      width={props.width}
      className="{props.className}" //outter-most div
      onclick={props.onclick}
      label={props.label}
      // disabled={props.disabled || false}
      checked={checked || false}
      onChange={(e) => {
        setChecked(e.value.checked);
      }}
      defaultChecked={false}
    />
  );
}
