import React, { useState, useEffect } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import styles from './container.module.css';

import { generateNumbersArray } from '../../utils/array_helpers';
import algorithms from '../../algorithms';

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
			algorithms[algorithm]([...numbersArray], minHeight, maxHeight, speed);
		}
	}

	useEffect(() => {
		const numbers = generateNumbersArray(barCount, minHeight, maxHeight);
		setNumbersArray(numbers);
	}, [barCount, minHeight, maxHeight]);

	return (
		<div className={ styles.innerContainer }>
			<Sidebar
				speed={ speed }
				setSpeed={ setSpeed }
				barCount={ barCount }
				setBarCount = { setBarCount }
				minHeight={ minHeight }
				setMinHeight={ setMinHeight }
				maxHeight={ maxHeight }
				setMaxHeight={ setMaxHeight }
				algorithm={ algorithm }
				setAlgorithm={ setAlgorithm }
				runAlgorithm={ runAlgorithm }
			/>
			<Main numbersArray={ numbersArray } />
		</div>
	)
}