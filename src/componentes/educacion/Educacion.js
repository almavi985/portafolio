
import React from 'react';
import Navi from '../navi/Navi';
class Habil extends React.Component {

    render() {

        return (

            <>
            <Navi/>

            <div className="container" >
                <h1>♥</h1>
                <div className="row">
                <div className="col-md-1" />
                    <div className="col-md-5" >
                        <img src={require('./uaem.png')} width="300" height="300" />
                    </div>
                    <div className="col-md-5">
                        <div style={{ textAlign: "center" }} >
                            <h1 ></h1>
                            <font face="Comic Sans MS,Arial,Verdana" size='4'>Universidad Autonoma del Estado de Mexico</font>

                        </div>
                        <p></p>
                        <p>Ingenieria en Computacion Agosto 2017- Diciembre 2021</p>
                        <p>Estudie Ingenieria en Computacion en UAEMex en el centro universitario UAEM Texcoco
                            Me especialice en Administracion de Proyectos Informaticos, con conocimientos previos de gestion,
                            liderazgo entre equipos.
                            Asi como tambien, conocimientos en Java, C, Python,. Base de datos SQL, MySQL</p>
                    </div>
                    <div className="col-md-1" />
                    <div className="col-md-5" >
                        <img src={require('./cecytem.jfif')} width="300" height="300" />
                    </div>
                    <div className="col-md-6">
                        <div style={{ textAlign: "center" }} >
                            <h1 ></h1>
                            <font face="Comic Sans MS,Arial,Verdana" size='4'>Colegio de Estudios Cientificos y Tecnolpgicos del Estado de Mexico</font>

                        </div>
                        <p></p>
                        <p>Soporte y Mantenimiento al equipo de computo Agosto 2014- Junio 2017</p>
                        <p>Estudie la carrera tecnica de soporte, especializado a mantenimiento presencial y a distancia, limpieza
                            respaldos, instalacion de sistemas operativos y diferentes tipos de software.
                        </p>
                    </div>

                </div>

            </div><hr /></>



        )

    }

}

export default Habil;





