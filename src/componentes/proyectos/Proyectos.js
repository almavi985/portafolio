import React from 'react';
import Navi from '../navi/Navi';
class Proyectos extends React.Component {

  render() {

    return (
       <>  <Navi/>
        <div className="container servicios">

            <div className="row">
                 <h1 style={{textAlign: "center"}}>Mis proyectos</h1>
                <div className="col-lg-6">
                <img src={require('./pro1.PNG')} width="500" height="300" />
                    <h2>Proyecto 1</h2>
                    <p>Landing page personalizado</p>
                    <p><a className="btn btn-secondary" href="https://github.com/almavi985/Proyectolandpage" rel="noopener noreferrer" role="button">Demo &raquo;</a></p>
                    <p><a className="btn btn-secondary" href="https://almavi985.github.io/Proyectolandpage/" rel="noopener noreferrer" role="button">Pagina web &raquo;</a></p>
                    
                </div>

                <div className="col-lg-6">
                    <img src={require('./pro2.PNG')} width="500" height="300" />
                    <h2>Proyecto 2</h2>
                    <p>Base de datos CRUD</p>
                   <p><a className="btn btn-secondary" href="https://github.com/almavi985/PROYECT2" rel="noopener noreferrer" role="button" >Demo &raquo; </a> </p>
                   <p><a className="btn btn-secondary" href="https://almavi985.github.io/PROYECT2/" rel="noopener noreferrer" role="button">Pagina web &raquo;</a></p>
                     </div>

                <div className="col-lg-6">
                     <img src={require('./pro3.PNG')} width="500" height="300" />
                    <h2>Proyecto 3</h2>
                    <p>Dashboard consumida por una API</p>
                    <p><a className="btn btn-secondary" href="https://github.com/KourtZN/TEAM_B_PROYECTO_3_DASHBOARD_APP" rel="noopener noreferrer" role="button" >Demo &raquo; </a> </p>
                   <p><a className="btn btn-secondary" href="https://kourtzn.github.io/TEAM_B_PROYECTO_3_DASHBOARD_APP/" rel="noopener noreferrer" role="button">Pagina web &raquo;</a></p>
                </div>

                <div className="col-lg-6">
                     <img src={require('./pro4.PNG')} width="500" height="300" />
                    <h2>Proyecto 4</h2>
                    <p>Aplicacion web de un restaurant</p>
                    <p><a className="btn btn-secondary" href="https://github.com/almavi985/PROYECTO4" rel="noopener noreferrer" role="button" >Demo &raquo; </a> </p>
                   <p><a className="btn btn-secondary" href="https://almavi985.github.io/PROYECTO4/" rel="noopener noreferrer" role="button">Pagina web &raquo;</a></p>
                </div>

                <div className="col-lg-6">
                     <img src={require('./pro5.PNG')} width="500" height="300" />
                    <h2>Proyecto 5</h2>
                    <p>Aplicacion web e-commerce</p>
                    <p><a className="btn btn-secondary" href="https://github.com/almavi985/proyecto5" rel="noopener noreferrer" role="button" >Demo &raquo; </a> </p>
                   <p><a className="btn btn-secondary" href="https://almavi985.github.io/proyecto5/#/" rel="noopener noreferrer" role="button">Pagina web &raquo;</a></p>
                </div>

            </div>

        </div>
</> 
    )
    
  }

}

export default Proyectos;