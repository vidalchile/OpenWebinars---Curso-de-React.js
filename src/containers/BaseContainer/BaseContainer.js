import React from 'react';
import SearchContainer from '../../containers/SearchContainer';
import Header from '../../components/Header/';
import { Link, IndexLink } from 'react-router';

class BaseContainer extends React.Component {

	render(){

		return <main className="container">
		 	<Header/>
			<nav className="Navigation">
				<IndexLink to="/" className="Link" activeClassName="Link--active">Home</IndexLink>
				<Link to="/about" className="Link" activeClassName="Link--active">about</Link>
			</nav>
			{ this.props.children || <SearchContainer/> }
		</main>;
	}
}

export default BaseContainer;