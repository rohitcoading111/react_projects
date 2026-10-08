import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;