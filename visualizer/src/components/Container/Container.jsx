import React, { useState, useEffect } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import styles from './container.module.css';

import { generateNumbersArray } from '../../utils/array_helpers';
import algorithms from '../../algorithms';

export const processAnimations = (animations, PRIMARY, SECONDARY, SPEED) => {
	const arrayBars = document.getElementsByClassName('arrayBar');

	for (let i = 0; i < animations.length; i++) {
		const [data, action] = animations[i];
		const [barOneIndex, barTwoIndex] = data;
		const barOneStyles = arrayBars[barOneIndex].style;
		const barTwoStyles = arrayBars[barTwoIndex].style;

		switch (action) {
			case 'CHANGE_TWO_PRIMARY':
				setTimeout(() => {
					barOneStyles.backgroundColor = PRIMARY;
					barTwoStyles.backgroundColor = PRIMARY;
				}, i * SPEED);
				break;
			case 'CHANGE_TWO_SECONDARY':
				setTimeout(() => {
					barOneStyles.backgroundColor = SECONDARY;
					barTwoStyles.backgroundColor = SECONDARY;
				}, i * SPEED);
				break;
			case 'SWAP_HEIGHTS':
				setTimeout(() => {
					barOneStyles.height = `${data[2]}px`;
					barTwoStyles.height = `${data[3]}px`;
				}, i * SPEED);
				break;
			default:
				break;
		}
	}
}

export default () => {
	const [algorithm, setAlgorithm] = useState('');
	const [speed, setSpeed] = useState(5);
	const [barCount, setBarCount] = useState(200);
	const [minHeight, setMinHeight] = useState(5);
	const [maxHeight, setMaxHeight] = useState(400);
	const [running, setRunning] = useState(false);
	const [numbersArray, setNumbersArray] = useState([]);

	const runAlgorithm = () => {
		if (algorithm) {
			const animations = algorithms[algorithm]([...numbersArray]);
			processAnimations(animations, 'pink', 'red', speed);
		}
	}

	useEffect(() => {
		const numbers = generateNumbersArray(barCount, minHeight, maxHeight);
		setNumbersArray(numbers);
	}, [barCount, minHeight, maxHeight]);

	return (
		<div className={styles.innerContainer}>
			<Sidebar
				speed={speed}
				setSpeed={setSpeed}
				barCount={barCount}
				setBarCount={setBarCount}
				minHeight={minHeight}
				setMinHeight={setMinHeight}
				maxHeight={maxHeight}
				setMaxHeight={setMaxHeight}
				algorithm={algorithm}
				setAlgorithm={setAlgorithm}
				runAlgorithm={runAlgorithm}
			/>
			<Main numbersArray={numbersArray} />
		</div>
	)
}