import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GrandPrize from "./components/GrandPrize";
import YetToImplement from "./components/YetToImplement";
import FirstPrize from "./components/FirstPrize";
import SecondPrize from "./components/SecondPrize";
import ThirdPrize from "./components/ThirdPrize";
import FourthPrize from "./components/FourthPrize";
import FifthPrize from "./components/FifthPrize";
import CarouselC from "./components/CarouselC";
import GrandPrize2 from "./components/GrandPrize2";
import { createContext, useContext, useState } from 'react';
import { ShowNewGrandPageContext } from "./components/GrandPageContext";

function App() {

   const [showSecondGrandPage , setShowSecondGrandPage] = useState(false)

// const ShowNewGrandPageContext = createContext(false);



  return (
    <div className="App">
       <ShowNewGrandPageContext.Provider value={[showSecondGrandPage, setShowSecondGrandPage]}>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/grandprize" element={<GrandPrize />} />
          <Route path="/secondgrandprize" element={<GrandPrize2 />} />

          <Route path="/firstprize" element={<FirstPrize/>}/>
          <Route path="/secondprize" element={<SecondPrize/>}/>
          <Route path="/thirdprize" element={<ThirdPrize/>}/>
          <Route path="/fourthprize" element={<FourthPrize/>}/>
          <Route path="/fifthprize" element={<FifthPrize/>}/>
          <Route  path="cara" element={<CarouselC/>} />
          <Route path="/*" element={<YetToImplement/>}/>

        </Route>
      </Routes>
      </ShowNewGrandPageContext.Provider>
     
    </div>
  );
}

export default App;
