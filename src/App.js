import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Navbar from "./Shared/Navbar";


function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}>Home</Route>
        <Route path="*" element={<NotFound />}>Home</Route>
      </Routes>
    </Navbar>
  );
}

export default App;
