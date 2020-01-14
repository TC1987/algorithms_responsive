import React from 'react';
import { connect } from 'react-redux';

import styles from './playback.module.css';

import { updatePlayback } from '../../../reducers/playbackReducer';

const Playback = props => (
	<div className={ props.listContainer }>
		<h4 className={ props.heading }>Playback</h4>
		<ul className={ props.list }>
			<li className={ `styles.start ${ props.algorithm ? styles.active : ''}` }>Start/Pause</li>
			<li>Reset</li>
			<li>New Numbers</li>
		</ul>
	</div>
)

const maptStateToProps = state => {
	return {
		algorithm: state.algorithm
	}
}

const mapDispatchToProps = {
	update: updatePlayback
}

export default connect(maptStateToProps, mapDispatchToProps)(Playback);