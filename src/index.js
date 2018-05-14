// Styles
import './index.css';

// Importamos las distintas librerias
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';

/*
Router: es el primer componente de nuestra aplicación. Recibe como parámetro
la API que controlará el histórico del navegador*/

/*
Route: define una ruta en nuestra aplicación. Recibe como parámetro la ruta
o path y el componente que se renderizará.*/

/*
hashHistory : se suele utilizar en desarrollo. Agrega el símbolo # a las URL de
nuestro proyecto y no requrie de ninguna configuración especial en el servidor
*/

// Importamos los componentes
import BaseContainer from './containers/BaseContainer';
import DetailsContainer from './containers/DetailsContainer';
import About from './containers/About';

ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path="/" component={ BaseContainer } >
			<Route path=":user/:repo" component={ DetailsContainer } />
			<Route path="about" component={ About } />
 		</Route>
	</Router>,
  	document.getElementById('root')
);
