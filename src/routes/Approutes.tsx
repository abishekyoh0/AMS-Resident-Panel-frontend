import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile/profile";


export default function AppRoutes() {
  return (
    <div>
      <Routes>
       <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
