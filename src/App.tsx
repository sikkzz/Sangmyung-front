import React from "react";
import "./App.css";
import { GlobalStyle } from "./styles/globalStyle";
import {Routes, Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
