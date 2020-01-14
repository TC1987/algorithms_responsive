import React, { useState, useEffect } from 'react';
import styles from './playback.module.css';
import { generateNumbersArray } from '../../../utils/array_helpers';
import algorithms from '../../../algorithms';


const Playback = props => {
	return (
		<div className={ props.listContainer }>
			<ul className={ props.list }>
			<li
				className={ `${ styles.start } ${ props.algorithm ? styles.active : '' }` }
				onClick={ props.runAlgorithm }
			>
				{/* { props.isRunning ? 'Pause' : 'Start'} */}
				Start
			</li>
				<li>Reset</li>
				<li>New Numbers</li>
			</ul>
		</div>
	)
}

export default Playback;