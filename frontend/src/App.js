import "./App.css";
import Customers from "./components/Customers";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Vehicles from "./components/Vehicles";
import Appointments from "./components/Appointments";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
