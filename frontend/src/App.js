//Importing npm libraries
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Importing components
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginAdmin from "./pages/LoginAdmin";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/login-admin" element={<LoginAdmin/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
