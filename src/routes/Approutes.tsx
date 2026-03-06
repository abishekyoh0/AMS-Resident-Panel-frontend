import { Route, Routes } from "react-router-dom";
import { Mainlayout } from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../components/Shared/NotFound";
import { PublicRoute } from "./PublicRoute";
import { SignIn } from "../pages/Auth/Signin";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import VehicleManagement from "../pages/VehicleManagement/VehicleManagement";
import AddVehicle from "../components/VehicleManagement/AddVehicle";
import FamilyTenants from "../pages/FamilyTenants/FamilyTenants"
import VisitorManagement from '../pages/VisitorManagement/VisitorManagement';
import MyProfile from "../pages/Profile/profile";
import Invoices from "../pages/Invoices/Invoices";
import MyComplaints from "../pages/MyComplaints/MyComplaints";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          element={
            <ProtectedRoute>
              <Mainlayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/vehicles&parking" element={<VehicleManagement />} />
          <Route path="/family&tenants" element={<FamilyTenants />} />
          <Route path="/visitors" element={<VisitorManagement />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-complaints" element={<MyComplaints />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/add-vehicle" element={<AddVehicle setOpenModal={function (): void {
            throw new Error("Function not implemented.");
          } } />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
