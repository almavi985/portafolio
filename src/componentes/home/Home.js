import React from 'react';

import Navi from '../navi/Navi';
import Footer from '../footer/Footer';
import Sobre from '../sobre/Sobre'
import Educacion from '../educacion/Educacion'
import Habil from '../habil/Habil'
import Proyectos from '../proyectos/Proyectos'
import Contacto from '../contacto/Contacto'
import { IconName } from "react-icons/bs";
class Home extends React.Component {
	render() {

		return (

			<>

				<Navi />

				<main role="main" className="flex-shrink-0 mt-5" style={{"Background":"pink"}}>

					<div className="container">
						<li>♥</li>
						<marquee width="1000" height="100" style={{"border":"solid"}} bgcolor="pink">
							<h1>♥ Bienvenidooo ♥ </h1></marquee>
						<i class="fi fi-rr-confetti"></i> 
						<div class="content">
							<div class="inner">
								<h2>Hola, este es mi portafolio ☺</h2>
								<p>Mi nombre es Alma Viridiana Hernandez Oropeza
									Ingeniera en Computacion de Estado de Mexico<br />
									Soy desarrollador web en Front end y Back end, programadora en C y Java</p>
									<i class="fab fa-bootstrap"></i>
							</div>
						</div>

						<hr className="featurette-divider" />
						<img src={require('./images.jfif')} width="500" height="300" />
					</div>

				</main>
				<Sobre />
				<Educacion />
				<Habil />
				<Proyectos />
				<Contacto />

				<Footer />

			</>

		)

	}

}




export default Home;