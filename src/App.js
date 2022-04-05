import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/DashBoard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/Reviews" element={<Reviews></Reviews>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
