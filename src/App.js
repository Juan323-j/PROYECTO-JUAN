import React from 'react'; 
import { BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import Header from './components/Layout/Header';
import Login from './components/Login';
import Nasa from './components/Nasa/Nasa';
import Reloj from './components/Hora/Reloj';



function App() {
  return (
  <Router>
    <Header/>
    <Switch>
    <Route path='/login' exact component={Login}></Route>
    <Route path='/nasa' exact component={Nasa}></Route>
    <Route path='/reloj' exact component={Reloj}></Route>
    </Switch>
  </Router>


  );
}

export default App;
