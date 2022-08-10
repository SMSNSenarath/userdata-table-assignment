//Importing npm libraries
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Importing components
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
