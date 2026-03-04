import { Route, Routes } from "react-router-dom";
import { Mainlayout } from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../components/Shared/NotFound";
import { PublicRoute } from "./PublicRoute";
import { SignIn } from "../pages/Auth/Signin";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import VehicleManagement from "../pages/VehicleManagement/VehicleManagement";
import AddVehicle from "../components/VehicleManagement/AddVehicle";


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
          <Route path="/vehicles & parking" element={<VehicleManagement />} />
          <Route path="/add-vehicle" element={<AddVehicle setOpenModal={function (): void {
            throw new Error("Function not implemented.");
          } } />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
