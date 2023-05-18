import React from 'react'; 
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/Layout/Header';
import Login from './components/Login/index';
import Nasa from './components/Nasa/Nasa.js';
import Reloj from './components/Hora/Reloj';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        {
          <Reloj/>
        }
      </Router>
      



<div className="row" style={{padding: '24px 10px'}}>

</div>
    </div>
  );
}

export default App;
