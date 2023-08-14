import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GrandPrize from "./components/GrandPrize";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/grandprize" element={<GrandPrize />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
