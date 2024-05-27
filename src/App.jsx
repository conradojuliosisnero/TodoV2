import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./pages/task/Task";
import Help from "./pages/help/Help";
import Home from "./pages/home/Home.jsx";  
import Index from './pages/Index'
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <BrowserRouter>
        <Nav />
      <Routes>
        <Route index element={<Index />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/task" element={<Task />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
