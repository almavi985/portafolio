import React from 'react';
import { FaPhoneAlt,FaGithub,FaLinkedin } from 'react-icons/fa';
import { MdMail, MdLanguage } from 'react-icons/md';
import Navi from '../navi/Navi';
import Footer from '../footer/Footer';
import Tel from '../../assets/tel.svg'
<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>


class Contacto extends React.Component {

	render() {

		return(

			<>
           <Navi/>

			<main role="main" className="flex-shrink-0 mt-5">

				<div className="container">
				   <div className="row">

                     <h1>♥</h1>
					<h1 className="mb-5">Puedes contactarme en los siguientes medios *u*</h1>

					<img className="h-8 w-auto" src={Tel} alt="Contanctanos" width={40} height={40} />
					
            		<div className="row">

                    <p><FaPhoneAlt /> <a href={"tel:+525613450626"}></a>+525613450626</p>
                    <p><MdMail /> <a href="almavihernandez@gmail.com"></a>almavihernandez@gmail.com</p>
                   <p><MdLanguage /><a href='https://goo.gl/maps/NswL7yMvnwpNURXPA' target='_blank' rel='noreferrer'> Estado de Mexico</a></p>
                      <h4>Redes sociales</h4>
                    <p><FaGithub/> <a href="https://github.com/almavi985/" target='_blank' rel='noreferrer'>Github</a></p>
					<p><FaLinkedin/><a href='https://mx.linkedin.com/in/alma-viridiana-hernandez-oropeza-37a09b231?trk=profile-badge'>LinkedIn</a></p>
					
					</div>
					</div>
				</div>	

	  		</main>


	  		</>

		)

	}

}

export default Contacto;
 