import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './main.module.css';
import { mergeSortHelper, quickSortHelper, insertionSortHelper, selectionSortHelper, bubbleSortHelper } from '../../algorithms';
import { randomIntFromRange } from '../../utils/array_helpers';

const Main = props => {
	const [numbersArray, setNumbersArray] = useState([]);

	useEffect(() => {
		const nums = [];

		for (let i = 0; i < props.barCount; i++) {
			nums.push(randomIntFromRange(props.heights.min, props.heights.max));
		}

		Object.freeze(nums);
		setNumbersArray(nums);
	}, [])

	return (
		<main className={ styles.main }>
			<div className={ styles.arrayContainer }>
				{ numbersArray.map((value, idx) => (
					<div
						className={ styles.arrayBar }
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
		heights: state.heights
	}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);