import React from 'react';
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
						className={ algorithm === props.algorithm ? styles.selected : '' }
						onClick={ () => props.setAlgorithm(algorithm) }
					>
						{ algorithm.split('_').join(' ') }
					</li>
				)) }
			</ul>
		</div>
	)
}

export default Algorithms;