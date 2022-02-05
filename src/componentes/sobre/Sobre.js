import React from 'react';

import Navi from '../navi/Navi';

import Footer from '../footer/Footer';
import img from '../sobre/mia.jpg'
import cv from '../sobre/cv.pdf'


class Sobre extends React.Component {

	render() {

		return (

			<>

<Navi/>
				<main role="main" className="flex-shrink-0 mt-5">

					<div className="container">

						<h1>♥</h1>
						<h1 className="mb-5">Sobre mi </h1>

						<div className="row">

							<div className="col-md-4">
								<img className="h-8 w-auto" src={img} alt="Contanctanos" width={500} height={300} />
							</div>

							<div className="col-md-5">
								<p>Soy ingenieria en computacion. Soy una persona tranquila y amable. Me gusta liderar e involucrarme en equipos de trabajo y mantener el orden,
									Me considero una persona capaz de escuchar a las personas y ayudarlas en lo que se logre, prefiero evitar conflictos con la gente y trato de
									solucionarlo de una manera eficaz. Me gusta nadar, practicar yoga realizar juegos que despejen mi mente y sean mejor para mi salud ♥

								</p>
								<p className='text-center'>
									<a className="btn btn-success" href={cv} download>
										Descargar CV *u*
									</a>
								</p>


							</div>

						</div>
					</div>

				</main>

			</>

		)

	}

}

export default Sobre;
