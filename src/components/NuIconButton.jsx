import { Icon } from "@mui/material";
import React from "react";
import { IconButton } from "ui-neumorphism"; //uses https://www.npmjs.com/package/@mdi/react
import "ui-neumorphism/dist/index.css";

export function NuIconButton(props) {
  const {
    iconPath,
    dark,
    name,
    iconColor,
    iconSize,
    text,
    className,
    label,
    onChange,
    style,
    outlined,
    rounded,
    onclick,
  } = props;

  return (
    <IconButton
      style={style}
      dark={dark || true}
      height={150}
      width={150}
      name={name}
      color={iconColor}
      size={iconSize}
      text={text}
      className={className}
      label={label}
      onChange={onChange}
      outlined={outlined || false}
      rounded={rounded || true}
      onClick={onclick}
    >
      <Icon 
        path={iconPath} 
        color={iconColor}
        size={iconSize}
      />

    </IconButton>
  );
}
