import React, { useState } from 'react';

import styles from './sidebar.module.css';

import Algorithms from './Algorithms/Algorithms';
import Settings from './Settings/Settings';
import Playback from './Playback/Playback';

export default () => {
	return (
		<div className={ styles.sidebar }>
			<ul className={ styles.list }>
				<Algorithms list={ styles.list } heading={ styles.heading } />
				<Settings listContainer={ styles.listContainer } list={ styles.list } heading={ styles.heading } bold={ styles.bold } />
				<Playback listContainer={ styles.listContainer } list={ styles.list } heading={ styles.heading } />
			</ul>
		</div>
	)
}