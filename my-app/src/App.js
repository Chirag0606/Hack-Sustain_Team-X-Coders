import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import BodyFat from './Components/BodyFat';
import BMI from './Components/BMI';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bodyfat" element={<BodyFat />} />
          <Route exact path="/bmi" element={<BMI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
