import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
