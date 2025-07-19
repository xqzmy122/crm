import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Calendar from "../../pages/Calendar/Calendar";
import Clients from "../../pages/Clients/Clients";
import Analytics from "../../pages/Analytics/Analytics";
import Notifications from "../../pages/Notifications/Notification";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Calendar/>}/>
          <Route path="clients" element={<Clients/>}/>
          <Route path="analytics" element={<Analytics/>}/>
          <Route path="notifications" element={<Notifications/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing