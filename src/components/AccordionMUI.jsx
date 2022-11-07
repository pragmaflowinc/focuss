import Accordion from "@mui/material/Accordion"; //https://mui.com/material-ui/api/accordion/ also https://mui.com/material-ui/api/paper/
import { Typography } from "ui-neumorphism";
import { NuIconButton } from "./NuIconButton";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IconButton } from "ui-neumorphism";

export function AccordionMUI(props) {
  const {
    name,
    children,
    color,
    expanded,
    height,
    width,
    className,
    label,
    onChange,
    styles,
    onClick,
    iconPath,
    iconColor,
    iconSize,
    detailsBackgroundColor,
  } = props;

  return (
    <Accordion
      classes={className}
      children={children}
      style={styles}
      name={name}
      color={color}
      height={height}
      width={width}
      label={label}
      onChange={onChange || null}
      expanded={expanded}
    >
      <AccordionSummary
        style={{ 
          backgroundColor: {detailsBackgroundColor} 
        }}
        expandIcon={
          <IconButton
            onClick={onClick}
            size={iconSize || 1}
            style={{
              color:{ iconColor },
              path: { iconPath },
              iconColor: { iconColor },
            }}
          />
        }
        
      />
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionMUI;
