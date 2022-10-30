import { Box } from "@mui/material";
import React from "react";
import AppTitleBar from "../../components/app-titlebar";
import BarChart from "../../components/charts/bar-chart";

const Bar = () => {
  return (
    <Box m="20px">
      <AppTitleBar title="Bar Chart" subtitle={"Simple Bar Chart"} />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
