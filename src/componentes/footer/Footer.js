import React from 'react';


class Footer extends React.Component {

  render() {

    return (

        <footer className="container">
            <p className="float-right"><a href="#" rel="noopener noreferrer">Inicio</a></p>
            <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Propiedad de Alma Viridiana Hernandez Oropeza </p>
            <p>Pagina hecha para fines educativos</p>
            <p>Ucamp 2022@</p>
        </footer>

    )
    
  }

}

export default Footer;