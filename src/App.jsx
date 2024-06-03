import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from "./pages/help/Help";
import Index from "./pages/Index";
import Layout from "./Layout/Layout.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import LayoutConfig from "./Layout/SettingLayout.jsx";
import ThemeConfig from "./components/ThemeConfig/ThemeConfig.jsx";
import InfoConfig from "./components/ThemeConfig/InfoConfig.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<LayoutConfig />}>
          <Route path="/settings" element={<InfoConfig />} />
          <Route path="/settings/theme" element={<ThemeConfig />}></Route>
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
