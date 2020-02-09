import React, { useState, useEffect } from 'react';
import styles from './main.module.css';

const Main = ({ numbersArray }) => {
	return (
		<main className={ styles.main }>
			<div className={ styles.arrayContainer }>
				{ numbersArray.map((value, idx) => (
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

export default Main;