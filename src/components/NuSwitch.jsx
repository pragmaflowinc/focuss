import React from "react";
import { Switch } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

export function NuSwitch(props) {
  // const [checked, setChecked] = useState(false);
  const {
    name,
    color,
    height,
    width,
    className,
    onclick,
    label,
    checked,
    onChange,
    defaultChecked,
  } = props;

  return (
    <div style={{
      border: "5px solid green",
    }}
      onClick = {e => alert("div clicked")}
    >
      <Switch
        name={name}
        color={color}
        dark={true}
        height={height}
        width={width}
        className={className} //outter-most div
        // onclick={onclick}
        label={label}
        // disabled={disabled || false}
        checked={checked}
        onChange={(e) => {
          console.log(e);
          onChange(e);
        }}
        defaultChecked={defaultChecked}
      />
    </div>
  );
}
