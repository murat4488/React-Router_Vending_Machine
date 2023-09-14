import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Home from "./Home";
import FreshSardines from "./FreshSardines";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/fresh_sardines" element={<FreshSardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
