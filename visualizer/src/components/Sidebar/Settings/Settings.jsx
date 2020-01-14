import React from 'react';
import styles from './settings.module.css';

const Settings = props => (
	<div className={ props.listContainer }>
		<h4 className={ props.heading }>Settings</h4>
		<ul className={ props.list }>
			<li>Speed: <span className={ props.bold }>{ props.speed }ms</span></li>
			<li><input type="range" min="5" max="200" value={ props.speed } onChange={ e => props.setSpeed(e.target.value) } /></li>
			<li># of Bars: <span className={ props.bold }>{ props.barCount }</span></li>
			<li><input type="range" min="5" max="300" value={ props.barCount } onChange={ e => props.setBarCount(e.target.value) } /></li>
			<li>Min Height: <span className={ props.bold }>{ props.minHeight }</span></li>
			<li><input type="range" min="5" max="100" value={ props.minHeight } onChange={ e => props.setMinHeight(e.target.value) } /></li>
			<li>Max Height: <span className={ props.bold }>{ props.maxHeight }</span></li>
			<li><input type="range" min="150" max="600" value={ props.maxHeight } onChange={ e => props.setMaxHeight(e.target.value) } /></li>
			{/* <li>Min Height: <input type="number" className={ styles.input }></input></li> */}
			{/* <li>Max Height: <input type="number" className={ styles.input }></input></li> */}
			{/* <li>Min Height: <span className={ props.bold }>5</span></li> */}
			{/* <li>Max Height: <span className={ props.bold }>400</span></li> */}
		</ul>
	</div>
)

export default Settings;