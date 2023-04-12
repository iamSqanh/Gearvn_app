import Header from "./Components/Layouts/Header";
import Navigate from "./Components/Layouts/Nav/Navigate";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register";


function App() {
  return (





    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
