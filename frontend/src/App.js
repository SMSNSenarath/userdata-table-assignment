//Importing npm libraries
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Importing components
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import CreateStudent from "./pages/CreateStudent/CreateStudent";
import { AuthContextProvider,AuthContext} from "./context/AuthContext";
import { useContext } from "react";
import NotFound from "./pages/NotFound/NotFound";
import StudentProtectedRoutes from "./ProtectedRoutes/StudentProtectedRoutes";
import AdminProtectedRoutes from "./ProtectedRoutes/AdminProtectedRoutes";


function App() {
  const {user} = useContext(AuthContext);
  const loggedAsStudent = user && user.accountType === "student";
  const loggedAsAdmin = user && user.accountType === "admin";
  return (
    <AuthContextProvider>
    <BrowserRouter>
    <Routes>
          {/* Home Page for any guest user */}
          <Route path="/" element={<Home />} />
 
          {/* If already logged in as a student, redirect to student dashboard */}
          <Route
            path="/login-admin"
            element={
              loggedAsAdmin ? (
                <Navigate to="/admin-dashboard" />
              ) : (
                <LoginAdmin />
              )
            }
          />
 
          {/* If already logged as admin, redirect to admin dashboard */}
          <Route
            path="/login"
            element={
              loggedAsStudent ? <Navigate to="/student-dashboard" /> : <Login />
            }
          />
 
          {/* 404 Page Not Found Page */}
          <Route path="/*" element={<NotFound/>} />
 
          {/* Protected Students Routes */}
          <Route element={<StudentProtectedRoutes />}>
            <Route path="/student-dashboard" element={<StudentDashboard />} />
          </Route>
 
          {/* Protected Admin Routes */}
          <Route element={<AdminProtectedRoutes />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/create-student" element={<CreateStudent />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
