import React, { useState } from 'react';
import styles from './app.module.css';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<React.Fragment>
			<div className={styles.container}>
				<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
				<Container sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			</div>
			<div className={styles.error}>Please rotate device to landscape.</div>
		</React.Fragment>
	);
}

export default App;
