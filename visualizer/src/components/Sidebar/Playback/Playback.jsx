import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './playback.module.css';

import { updatePlayback } from '../../../reducers/playbackReducer';

const Playback = props => {
	return (
		<div className={ props.listContainer }>
			<ul className={ props.list }>
			<li
				className={ `${ styles.start } ${ props.algorithm ? styles.active : '' }` }
				onClick={ props.updatePlayback }
			>
				{ props.isRunning ? 'Pause' : 'Start'}
			</li>
				<li>Reset</li>
				<li>New Numbers</li>
			</ul>
		</div>
	)
}

const maptStateToProps = state => {
	return {
		algorithm: state.algorithm,
		isRunning: state.isRunning
	}
}

const mapDispatchToProps = {
	updatePlayback
}

export default connect(maptStateToProps, mapDispatchToProps)(Playback);