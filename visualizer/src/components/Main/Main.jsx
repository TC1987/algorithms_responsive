import React, { useState } from 'react';

import styles from './main.module.css';

const Main = () => {
	const [selectedAlgo, setSelectedAlgo] = useState('');
	const [speed, setSpeed] = useState(5);
	const [barCount, setBarCount] = useState(200);
	const [minHeight, setMinHeight] = useState(5);
	const [maxHeight, setMaxHeight] = useState(400);
	const [running, setRunning] = useState(false);
	const [randomNumbers, setRandomNumbers] = useState([]);

	return (
		<main className={ styles.main }></main>
	)
}

export default Main;