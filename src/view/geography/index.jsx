import { Box, useTheme } from "@mui/material";
import React from "react";
import AppTitleBar from "../../components/app-titlebar";
import GeographyChart from "../../components/charts/geography-chart";
import { tokens } from "../../theme/theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <AppTitleBar
        title="Geography Chart"
        subtitle={"Simple Geography Chart"}
      />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
