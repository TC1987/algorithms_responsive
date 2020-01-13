import React from 'react';

export default props => (
	<div className={ props.listContainer }>
		<h4 className={ props.heading }>Settings</h4>
		<ul className={ props.list }>
			<li>Speed: <span className={ props.bold }>1x</span></li>
			<li># of Bars: <span className={ props.bold }>400</span></li>
			<li>Min Height: <span className={ props.bold }>5</span></li>
			<li>Max Height: <span className={ props.bold }>400</span></li>
		</ul>
	</div>
)