// import Dashboard from "./pages/Dashboard/Dashboard";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Category from "./pages/Category/Category.jsx";
import CategoryFrames from "./pages/Category/Categoryframes.jsx";
import Finance from "./pages/Finance/Finance.jsx";
import Language from "./pages/Language/Language.jsx";
import Marketplace from "./pages/Marketplace/Marketplace.jsx";
import News from "./pages/Notification/News.jsx";
import Writenotification from "./pages/Notification/Writenotification.jsx";
import Users from "./pages/Users/Users.jsx";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import Advertisement from "./pages/Notification/Advertisement.jsx";
import AddUser from "./pages/Setting/AddUser.jsx";
import UserLogin from "./pages/Setting/UserLogin.jsx";
import Login from "./pages/login/Login.jsx";
import Jewelrate from "./pages/Setting/Jewelrate.jsx";
import AddLocation from "./pages/Setting/AddLocation.jsx";
import "./style/dark.scss";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="language" element={<Language />} />
          <Route path="Category" element={<Category />} />
          <Route path="Finance" element={<Finance />} />
          <Route path="Users" element={<Users />} />
          <Route path="Marketplace" element={<Marketplace />} />
          <Route path="Writenotification" element={<Writenotification />} />
          <Route path="News" element={<News />} />
          <Route path="Advertisement" element={<Advertisement />} />
          <Route path="Categoryframes" element={<CategoryFrames />} />
          <Route path="UserLogin" element={<UserLogin />} />
          <Route path="AddUser" element={<AddUser />} />
          <Route path="JewelRate" element={<Jewelrate />} />
          <Route path="AddLocation" element={<AddLocation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
