import React, { useState } from 'react';

import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

import styles from './container.module.css';

export default () => {
	const [selectedAlgo, setSelectedAlgo] = useState('');
	const [speed, setSpeed] = useState(5);
	const [barCount, setBarCount] = useState(200);
	const [minHeight, setMinHeight] = useState(5);
	const [maxHeight, setMaxHeight] = useState(400);
	const [running, setRunning] = useState(false);
	const [randomNumbers, setRandomNumbers] = useState([]);

	return (
		<div className={ styles.container }>
			<Sidebar />
			<Main />
		</div>
	)
}