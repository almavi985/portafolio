import React from 'react';
import './index.css';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './componentes/home/Home';
import Proyectos from './componentes/proyectos/Proyectos';
import Sobre from './componentes/sobre/Sobre';
import Educacion from './componentes/educacion/Educacion'
import Habil from './componentes/habil/Habil';
import Contacto from './componentes/contacto/Contacto';


ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sobre' component={Sobre}/>
        <Route exact path='/educacion' component={Educacion}/>
        <Route exact path='/habil' component={Habil}/>
        <Route exact path='/proyectos' component={Proyectos}/>
        <Route exact path='/contacto' component={Contacto}/>
      </Switch>
    </div>

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
