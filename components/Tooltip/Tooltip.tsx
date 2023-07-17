import React from "react";
import ReactTooltip from "react-tooltip";
import classes from "./Tooltip.module.css";

export default function Splash() {
  return (
    <ReactTooltip
      id="global"
      className={classes.tooltip}
      place="bottom"
      delayShow={500}
      multiline={true}
      backgroundColor="#263238"
      textColor="#cfd8dc"
      arrowColor="transparent"
    />
  );
}
