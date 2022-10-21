import React from "react";
import { Switch } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

export function NuSwitch(props) {
  const {
    name,
    color,
    height,
    width,
    className,
    label,
    checked,
    onChange,
    defaultChecked,
  } = props;

  return (
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
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
  );
}
