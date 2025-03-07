import './App.css'
import { Routes, Route } from "react-router";
import Sponsors from "./pages/Sponsors";
import Exhibitors from "./pages/Exhibitors";
import { Navigate } from "react-router";
import DashboardLayout from './components/DashboardLayout';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ExhibitorDetails from './pages/ExhibitorDetails';
import SponsorDetails from './pages/SponsorDetails';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/*"
            element={
              <DashboardLayout>
                <Routes>
                  <Route path="/" element={<Navigate to="/sponsors" replace />} />
                  <Route path="/sponsors" element={<Sponsors />} />
                  <Route path="/exhibitors" element={<Exhibitors />} />
                  <Route path="/exhibitor-details" element={<ExhibitorDetails />} />
                  <Route path="/sponsor-details" element={<SponsorDetails />} />
                </Routes>
              </DashboardLayout>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
