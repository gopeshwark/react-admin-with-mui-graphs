import { Box } from "@mui/material";
import React from "react";
import AppTitleBar from "../../components/app-titlebar";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <AppTitleBar title="DASHBOARD" subtitle={"Welcome to your dashboard"} />
      </Box>
    </Box>
  );
};

export default Dashboard;
