import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./Pages/Login/SignUp";



function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}>Home</Route>
        <Route path="/login" element={<Login />}>Home</Route>
        <Route path="/signUP" element={<SignUp />}>Home</Route>
        <Route path="*" element={<NotFound />}>Home</Route>
      </Routes>
      <ToastContainer />
    </Navbar>
  );
}

export default App;
