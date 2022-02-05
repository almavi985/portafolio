import React from 'react';
import { NavLink } from "react-router-dom";

class Navi extends React.Component {

	render() {

		return (

			<nav className="navbar navbar-expand-md navbar-black fixed-top bg-white" >
				<NavLink to="/" className="nav-link">Inicio </NavLink>
				<NavLink to="/sobre" className="nav-link">Sobre mi </NavLink>
				<NavLink to="/educacion" className="nav-link">Educacion  </NavLink>
				<NavLink to="/habil" className="nav-link">Habil </NavLink>
                <NavLink to="/proyectos" className="nav-link">Proyectos </NavLink>
                <NavLink to="/contacto" className="nav-link">Contacto </NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
				<div className="collapse navbar-collapse" id="navbarCollapse" >
					<ul className="navbar-nav mr-auto">
						

					</ul>

				</div>

			</nav>

		)

	}

}

export default Navi;