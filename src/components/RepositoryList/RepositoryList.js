import React from 'react';
import PropTypes from 'prop-types';
import RepositoryRow from '../../components/RepositoryRow';
import HintMessage from '../../components/HintMessage';
import Paginator from '../../components/Paginator/';

/**
 * Muestra los repositorios en una lista.
 */
class RepositoryList extends React.PureComponent {

	//Definir nuestros propTypes
	static propTypes = {
		data: PropTypes.arrayOf(PropTypes.object).isRequired,
		loading: PropTypes.bool.isRequired,
		queried: PropTypes.bool.isRequired,
		search: PropTypes.string.isRequired
	}

	renderMessage() {
	    
	    let text = ''; 
	    let l = this.props.data.length;

	    if(this.props.loading){

	      	text = <span>Searching result for <b>{ this.props.search }</b></span>;

	    }else if(l > 0) {

	      	text = <span>We found <b>{l}</b> repositories for <b>{this.props.search}</b></span>;

	    }else if(l === 0 && this.props.queried){

	      	text = <span>
	      		We could't find any repositories matching <b>{this.props.search}</b>
	      	</span>;

	    }else{

	    	text = 'Type the name of a repository and click search';
	    }

	    return <HintMessage>{ text }</HintMessage>;
	}

	renderTable() {

		if (this.props.loading || this.props.data.length === 0) {
			return null;
		} else {
		return 	<table className="u-full-width">
					<thead>
					<tr>
						<th>Repository</th>
						<th>Owner</th>
						<th>Starts</th>
						<th>Forks</th>
						<th></th>
					</tr>
					</thead>
						<tbody>
						{ this.props.data.map(repo =>
						<RepositoryRow repo={ repo } key={ repo.id } />
						)}
					</tbody>
				</table>;
				}
	}

	/**
	* Render the RepositoryList component
	*/

	render() {
	return <section className="RepositoryList">
	  {this.renderMessage()}
	  {this.renderTable()}
	</section>;
	}
}

// Export the class
export default Paginator(RepositoryList);
