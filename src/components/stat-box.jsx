import { useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme/theme";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return <div>StatBox</div>;
};

export default StatBox;
