import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './main.module.css';

const Main = ({ numbers }) => {
	return (
		<main className={ styles.main }>
			<div className={ styles.arrayContainer }>
				{ numbers.map((value, idx) => (
					<div
						className='arrayBar'
						key={ idx }
						style={{ height: `${value}px` }}
					>
					</div>
				))}
			</div>
		</main>
	)
}

const mapStateToProps = state => {
	return {
		numbers: state.numbers
	}
}

export default connect(mapStateToProps)(Main);