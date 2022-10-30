import { Box } from "@mui/material";
import React from "react";
import AppTitleBar from "../../components/app-titlebar";
import PieChart from "../../components/charts/pie-chart";

const Pie = () => {
  return (
    <Box m="20px">
      <AppTitleBar title="Pie Chart" subtitle={"Simple Pie Chart"} />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
