import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Home from "./Home";
import Shop from "./Shop";
import History from "./History";
import Contacts from "./Contacts"
import './App.css';

function App() {
  return (<Router>
  
    <nav>
      <Link className="link" to="/home">На главную</Link>
      <Link className="link" to="/shop">Магазин</Link>
      <Link className="link" to="/history">История фарфора</Link>
      <Link className="link" to="/contacts">Контакты</Link>
      </nav>

      <Routes>
      
        <Route path="/home" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/contacts" element={<Contacts/>} />

      </Routes>
      </Router>
  );
}

export default App;

