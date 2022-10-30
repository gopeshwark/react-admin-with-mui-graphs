import { lazy, Suspense, useState } from "react";
import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AppTopbar from "./view/global/app-topbar";
import AppSidebar from "./view/global/app-sidebar";
const Dashboard = lazy(() => import("./view/dashboard"));
const Team = lazy(() => import("./view/team"));
const Contacts = lazy(() => import("./view/contacts"));
const Invoices = lazy(() => import("./view/invoices"));
const Form = lazy(() => import("./view/form"));
const Calendar = lazy(() => import("./view/calendar"));
const FAQ = lazy(() => import("./view/faq"));
const Bar = lazy(() => import("./view/bar"));
const Pie = lazy(() => import("./view/pie"));
const Line = lazy(() => import("./view/line"));
const Geography = lazy(() => import("./view/geography"));

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <AppSidebar isSidebar={isSidebar} />
          <main className="content">
            <AppTopbar setIsSidebar={setIsSidebar} />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
