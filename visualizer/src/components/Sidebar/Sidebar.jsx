import React, { useState } from 'react';

import styles from './sidebar.module.css';

export default () => {
	return (
		<div className={ styles.sidebar }>
			<ul className={ styles.list }>
				<li className={ styles.bold }>Algorithms</li>
				<li>Quick Sort</li>
				<li>Merge Sort</li>
				<li>Insertion Sort</li>
				<li>Selection Sort</li>
				<li>Bubble Sort</li>
				<li className={ styles.line }></li>
				<li className={ styles.bold }>Settings</li>
				<li>Speed: <span className={ styles.bold }>1x</span></li>
				<li># of Bars: <span className={ styles.bold }>400</span></li>
				<li>Min Height: <span className={ styles.bold }>5</span></li>
				<li>Max Height: <span className={ styles.bold }>400</span></li>
				<li className={ styles.line }></li>
				<li className={ styles.start }>Start/Pause</li>
				<li>Reset</li>
				<li>New Numbers</li>
			</ul>
		</div>
	)
}