import React from 'react';
import { connect } from 'react-redux';

import { updateAlgorithm } from '../../../reducers/algorithmReducer';
import styles from './algorithms.module.css';

import algorithms from '../../../algorithms';

const Algorithms = props => {
	return (
		<div>
			<h4 className={ props.heading }>Algorithms</h4>
			<ul className={ props.list }>
				{ Object.keys(algorithms).map(algorithm => (
					<li 
						key={ algorithm }
						className={ algorithm === props.selected ? styles.selected : '' }
						onClick={ () => props.updateAlgorithm(algorithm) }
					>
						{ algorithm.split('_').join(' ') }
					</li>
				)) }
			</ul>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		selected: state.algorithm
	}
}

const mapDispatchToProps = {
	updateAlgorithm
}

export default connect(mapStateToProps, mapDispatchToProps)(Algorithms);