import React from 'react';

import styles from './footer.module.css';

const Footer = () => {
	return (
		<footer className={ styles.footer }>
			<p className={ styles.footer__text }>Made with React and Redux</p>
		</footer>
	)
}

export default Footer;