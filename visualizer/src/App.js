import React from 'react';

import styles from './app.module.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<React.Fragment>
			<div className={ styles.container }>
				<Header />
				<div className={ styles.innerContainer }>
					<Sidebar />
					<Main />
				</div>
				<Footer />
			</div>
			<div className={ styles.error }>Please rotate device to landscape.</div>
		</React.Fragment>
	);
}

export default App;
