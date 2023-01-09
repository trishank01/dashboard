import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Scheduling from "./pages/Scheduling/Scheduling";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scheduling" element={<Scheduling />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
