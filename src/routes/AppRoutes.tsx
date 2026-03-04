
import { Routes, Route } from 'react-router-dom';
import FamilyTenants from "../pages/FamilyTenants/FamilyTenants"
import VisitorManagement from '../pages/VisitorManagement/VisitorManagement';

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        
                 <Route path="/FamilyTenants" element={<FamilyTenants/>} />
                 <Route path="/VisitorManagement" element={<VisitorManagement/>} />
      </Routes>
    </div>
  );
}