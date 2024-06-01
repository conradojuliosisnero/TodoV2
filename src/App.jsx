import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from "./pages/help/Help";
import Index from "./pages/Index";
import Layout from "./Layout/Layout.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
