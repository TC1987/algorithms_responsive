import React, { useState, useEffect } from 'react';
import styles from './playback.module.css';
import { generateNumbersArray } from '../../../utils/array_helpers';
import algorithms from '../../../algorithms';

const Playback = (props) => {
	useEffect(
		() => {
			if (props.running) {
				props.setSidebarOpen();
				props.runAlgorithm();
			}
		},
		[ props.running ]
	);

	const handleClick = () => {
		if (!props.algorithm || props.running) {
			return;
		}

		props.resetNumbers();
		props.setRunning(true);
	};

	return (
		<div className={props.listContainer}>
			<ul className={props.list}>
				<li className={`${styles.start} ${props.algorithm ? styles.active : ''}`} onClick={handleClick}>
					Start
				</li>
				<li onClick={props.resetNumbers}>Reset</li>
				<li onClick={props.newNumbers}>New Numbers</li>
			</ul>
		</div>
	);
};

export default Playback;
