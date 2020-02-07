import React, { useState, useEffect } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import styles from './container.module.css';

import { generateNumbersArray } from '../../utils/array_helpers';
import algorithms from '../../algorithms';

export const processAnimations = (animations, PRIMARY, SECONDARY, SPEED, setRunning) => {
	const arrayBars = document.getElementsByClassName('arrayBar');

	for (let i = 0; i < animations.length; i++) {
		const [ data, action ] = animations[i];
		const [ barOneIndex, barTwoIndex ] = data;
		const barOneStyles = arrayBars[barOneIndex].style;
		const barTwoStyles = barTwoIndex >= 0 ? arrayBars[barTwoIndex].style : null;

		switch (action) {
			case 'CHANGE_ONE_PRIMARY':
				setTimeout(() => {
					barOneStyles.backgroundColor = PRIMARY;
				}, i * SPEED);
				break;
			case 'CHANGE_ONE_SECONDARY':
				setTimeout(() => {
					barOneStyles.backgroundColor = SECONDARY;
				}, i * SPEED);
				break;
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
			case 'CHANGE_HEIGHT':
				setTimeout(() => {
					barOneStyles.height = `${data[2]}px`;
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

	setRunning(false);
};

export default ({ sidebarOpen, setSidebarOpen }) => {
	const [ algorithm, setAlgorithm ] = useState('');
	const [ speed, setSpeed ] = useState(5);
	const [ barCount, setBarCount ] = useState(100);
	const [ minHeight, setMinHeight ] = useState(5);
	const [ maxHeight, setMaxHeight ] = useState(400);
	const [ running, setRunning ] = useState(false);
	const [ numbersArray, setNumbersArray ] = useState([]);

	const runAlgorithm = () => {
		if (algorithm) {
			const animations = algorithms[algorithm]([ ...numbersArray ]);
			processAnimations(animations, '#3EC9D3', '#D3483E', speed, setRunning);
		}
	};

	const resetNumbers = () => {
		const arrayBars = document.getElementsByClassName('arrayBar');
		for (let i = 0; i < arrayBars.length; i++) {
			arrayBars[i].style.height = `${numbersArray[i]}px`;
		}
	};

	const newNumbers = () => {
		const numbers = generateNumbersArray(barCount, minHeight, maxHeight);
		setNumbersArray(numbers);
	};

	useEffect(
		() => {
			newNumbers();
		},
		[ barCount, minHeight, maxHeight ]
	);

	return (
		<div className={styles.innerContainer}>
			<Sidebar
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
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
				newNumbers={newNumbers}
				resetNumbers={resetNumbers}
				running={running}
				setRunning={setRunning}
			/>
			<Main numbersArray={numbersArray} />
		</div>
	);
};
