import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Scheduling from "./pages/Scheduling/Scheduling";
import TimeSheets from "./pages/TimeSheets/TimeSheets";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/timesheet" element={<TimeSheets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
