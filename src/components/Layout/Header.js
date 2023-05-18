import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/'>
    <img src='./logo192.png' width='50'/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav m-auto" >
      <li className="nav-item active">
        <Link className="nav-link" to='/login'>Inicar sesion <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/nasa'>Consumo Api</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/reloj'>Reloj JS</Link>
      </li>
      
    </ul>
  </div>
</nav>

    );

};
export default Header;