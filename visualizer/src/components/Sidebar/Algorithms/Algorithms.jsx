import React from 'react';

export default props => (
	<div>
		<h4 className={ props.heading }>Algorithms</h4>
		<ul className={ props.list }>
			<li>Quick Sort</li>
			<li>Merge Sort</li>
			<li>Insertion Sort</li>
			<li>Selection Sort</li>
			<li>Bubble Sort</li>
		</ul>
	</div>
)