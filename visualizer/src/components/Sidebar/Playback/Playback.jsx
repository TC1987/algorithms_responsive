import React, { useState, useEffect } from 'react';
import styles from './playback.module.css';
import { generateNumbersArray } from '../../../utils/array_helpers';
import algorithms from '../../../algorithms';


const Playback = props => {
	const handleClick = () => {
		props.setRunning(true);
		props.setSidebarOpen()
		props.runAlgorithm();
	}

	return (
		<div className={props.listContainer}>
			<ul className={props.list}>
				<li
					className={`${styles.start} ${props.algorithm ? styles.active : ''}`}
					onClick={handleClick}
				>
					{/* { props.isRunning ? 'Pause' : 'Start'} */}
					Start
			</li>
				<li onClick={props.resetNumbers}>Reset</li>
				<li onClick={props.newNumbers}>New Numbers</li>
			</ul>
		</div>
	)
}

export default Playback;