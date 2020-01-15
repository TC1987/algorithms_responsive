import React, { useState } from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import styles from './header.module.css';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<span className={styles.title}><span style={{ fontWeight: '700' }}>sorting</span>inaction</span>
			</div>
			<Burger style={{ fontSize: '8px' }} isOpen={sidebarOpen} className={styles.menu} onClick={() => setSidebarOpen(state => !state)} />
		</header>
	)
}

export default Header;