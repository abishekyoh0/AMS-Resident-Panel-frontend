import { Route, Routes } from "react-router-dom";
import { Mainlayout } from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../components/Shared/NotFound";
import { PublicRoute } from "./PublicRoute";
import { SignIn } from "../pages/Auth/Signin";
import Dashboard from "../components/Dashboard/Dashboard";


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
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
