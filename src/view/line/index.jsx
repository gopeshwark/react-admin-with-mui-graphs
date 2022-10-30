import { Box } from "@mui/material";
import React from "react";
import AppTitleBar from "../../components/app-titlebar";
import LineChart from "../../components/charts/line-chart";

const Line = () => {
  return (
    <Box m="20px">
      <AppTitleBar title="Line Chart" subtitle={"Simple Line Chart"} />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
