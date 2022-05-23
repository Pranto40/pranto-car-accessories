import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Home/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";



function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}>Home</Route>
        <Route path="/login" element={<Login />}>Home</Route>
        <Route path="/signUP" element={<SignUp />}>Home</Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
              <Purchase />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
              <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyOrders />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="myProfile" element={<MyProfile />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}>Home</Route>
      </Routes>
      <ToastContainer />
    </Navbar>
  );
}

export default App;
