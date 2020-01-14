import React from 'react';
import { connect } from 'react-redux';

import styles from './settings.module.css';

import { updateSpeed } from '../../../reducers/speedReducer';
import { updateBarCount } from '../../../reducers/barsReducer';

const Settings = props => (
	<div className={ props.listContainer }>
		<h4 className={ props.heading }>Settings</h4>
		<ul className={ props.list }>
			<li>Speed: <span className={ props.bold }>{ props.speed }ms</span></li>
			<li><input type="range" min="5" max="200" onChange={ e => props.updateSpeed(e.target.value) } value={ props.speed } /></li>
			<li># of Bars: <span className={ props.bold }>{ props.barCount }</span></li>
			<li><input type="range" min="5" max="400" onChange={ e => props.updateBarCount(e.target.value) } value={ props.barCount } /></li>
			{/* <li>Min Height: <input type="number" className={ styles.input }></input></li> */}
			{/* <li>Max Height: <input type="number" className={ styles.input }></input></li> */}
			{/* <li>Min Height: <span className={ props.bold }>5</span></li> */}
			{/* <li>Max Height: <span className={ props.bold }>400</span></li> */}
		</ul>
	</div>
)

const mapStateToProps = state => {
	return {
		speed: state.speed,
		barCount: state.barCount
	}
}

const mapDispatchToProps = {
	updateSpeed,
	updateBarCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);