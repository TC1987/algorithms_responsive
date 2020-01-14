import React, { useState } from 'react';
import { connect } from 'react-redux';
import Burger from '@animated-burgers/burger-squeeze';
 
import '@animated-burgers/burger-squeeze/dist/styles.css'; 
import styles from './header.module.css';
import { sidebarToggle } from '../../reducers/sidebarReducer';

const Header = ({ isOpen, sidebarToggle }) => {
	return (
		<header className={ styles.header }>
			<div className={ styles.logo }>
				<span className={ styles.title }><span style={{ fontWeight: '700' }}>sorting</span>visualizer</span>
			</div>
			<Burger style={{ fontSize: '8px' }} isOpen={ isOpen } onClick={ sidebarToggle } />
		</header>
	)
}

const mapStateToProps = state => {
	return {
		isOpen: state.sidebarOpen
	}
}

const mapDispatchToProps = {
	sidebarToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);