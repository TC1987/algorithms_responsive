import React, { useState } from 'react';
import { connect } from 'react-redux';

import styles from './sidebar.module.css';

import Algorithms from './Algorithms/Algorithms';
import Settings from './Settings/Settings';
import Playback from './Playback/Playback';

const Sidebar = ({ isOpen }) => {
	return (
		<div className={ `${ styles.sidebar } ${ isOpen ? styles.isOpen : '' }` }>
			<ul className={ styles.list }>
				<Algorithms list={ styles.list } heading={ styles.heading } />
				<Settings listContainer={ styles.listContainer } list={ styles.list } heading={ styles.heading } bold={ styles.bold } />
				<Playback listContainer={ styles.listContainer } list={ styles.list } heading={ styles.heading } />
			</ul>
		</div>
	)
}

const mapStateToProps = state => ({
	isOpen: state.sidebarOpen
})

export default connect(mapStateToProps)(Sidebar);