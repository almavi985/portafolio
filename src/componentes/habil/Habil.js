import React from 'react';
import Navi from '../navi/Navi';
class Habil extends React.Component {

  render() {

    return (

        <>
        <Navi/><div className="container" >
            <div className="row">
            <div className="col-md-1" style={{textAlign: "center"}} />
            <h1 style={{textAlign: "center"}}>Mis habilidades</h1>
            <div className="col-lg-6">
                <h2>Lenguajes </h2>
                <img src={require('./lenguajes.jpg')} width="500" height="300" />
                </div>
                <div className="col-lg-6">
                <h2>Base de datos </h2>
                <img src={require('./bd.jfif')} width="500" height="300" />
                </div>
                <div className="col-lg-6"> 
                <h2>Gestion de proyectos </h2>
                <img src={require('./adm.jfif')} width="500" height="300" />
                </div>
                <div className="col-lg-6">
                <h2>Mantenimiento correctivo y preventivo </h2>
                <img src={require('./mto.png')} width="500" height="300" />
                </div>
</div>

        </div><hr /></>

       

    )
    
  }

}

export default Habil;