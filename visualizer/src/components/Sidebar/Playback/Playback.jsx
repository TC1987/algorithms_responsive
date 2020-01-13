import React from 'react';

import styles from './playback.module.css';

export default props => (
	<div className={ props.listContainer }>
		<ul className={ props.list }>
			<li className={ styles.start }>Start/Pause</li>
			<li>Reset</li>
			<li>New Numbers</li>
		</ul>
	</div>
)