//Importing npm libraries
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Importing components
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import CreateStudent from "./pages/CreateStudent";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/login-admin" element={<LoginAdmin/>}/>
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      <Route path="/student-dashboard" element={<StudentDashboard/>}/>
      <Route path="/create-student" element={<CreateStudent/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
