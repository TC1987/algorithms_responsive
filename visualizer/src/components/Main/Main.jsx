import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './main.module.css';
import { generateNumbersArray } from '../../utils/array_helpers';

import { bubbleSortHelper, bubbleSort } from '../../algorithms/bubble_sort/bubble_sort';

const Main = props => {
	const [numbersArray, setNumbersArray] = useState([]);

	useEffect(() => {
		const numbers = generateNumbersArray(props.barCount, props.heights.min, props.heights.max);
		setNumbersArray(numbers);
	}, [props.barCount])

	useEffect(() => {
		console.log(props.isRunning);
		bubbleSortHelper([...numbersArray], 'black', 'red');
	}, [props.isRunning]);

	return (
		<main className={ styles.main }>
			<div className={ styles.arrayContainer }>
				{ numbersArray.map((value, idx) => (
					<div
						className='arrayBar'
						key={ idx }
						style={{ height: `${value}px` }}
					>
					</div>
				))}
			</div>
		</main>
	)
}

const mapStateToProps = state => {
	return {
		barCount: state.barCount,
		heights: state.heights,
		isRunning: state.isRunning,
		algorithm: state.algorithm		
	}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);