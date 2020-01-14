import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './playback.module.css';

import { updatePlayback } from '../../../reducers/playbackReducer';
import { initializeNumbers } from '../../../reducers/numbersReducer';

import { generateNumbersArray } from '../../../utils/array_helpers';

import algorithms from '../../../algorithms';


const Playback = props => {
	const resetNumbers = () => {
		const numbers = generateNumbersArray(props.barCount, props.heights.min, props.heights.max);
		props.initializeNumbers(numbers);
	}

	const runAlgorithm = () => {
		if (props.algorithm) {
			algorithms[props.algorithm]([...props.numbers], 'black', 'red', props.speed);
		}
	}

	useEffect(() => {
		resetNumbers();
	}, [props.barCount]);


	return (
		<div className={ props.listContainer }>
			<ul className={ props.list }>
			<li
				className={ `${ styles.start } ${ props.algorithm ? styles.active : '' }` }
				onClick={ runAlgorithm }
			>
				{ props.isRunning ? 'Pause' : 'Start'}
			</li>
				<li>Reset</li>
				<li onClick={ resetNumbers }>New Numbers</li>
			</ul>
		</div>
	)
}

const maptStateToProps = state => {
	return {
		algorithm: state.algorithm,
		isRunning: state.isRunning,
		numbers: state.numbers,
		barCount: state.barCount,
		heights: state.heights,
		speed: state.speed
	}
}

const mapDispatchToProps = {
	updatePlayback,
	initializeNumbers
}

export default connect(maptStateToProps, mapDispatchToProps)(Playback);