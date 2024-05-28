import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./pages/task/Task";
import Help from "./pages/help/Help";
import Home from "./pages/home/Home.jsx";
import Index from "./pages/Index";
import Layout from "./Layout/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="task" element={<Task />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
