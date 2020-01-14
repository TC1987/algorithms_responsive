export const bubbleSort = arr => {
	if (arr.length <= 1) {
		return arr;
	}
	
	const animations = [];
	let i, j, temp;

	for (i = 0; i < arr.length; i++) {
		for (j = 1; j < (arr.length - i); j++) {
			// change color of bars being compared
			animations.push([j - 1, j]);
			if (arr[j - 1] > arr[j]) {
				temp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = temp;
			}
			// swap heights
			animations.push([j - 1, arr[j - 1], j, temp]);
			// change bars back to original color
			animations.push([j - 1, j])
		}
	}

	return animations;
}

export const bubbleSortHelper = (arr, primary, secondary, speed) => {
	const animations = bubbleSort(arr);
	const arrayBars = document.getElementsByClassName('arrayBar');

	for (let i = 0; i < animations.length; i++) {
		const isColorChange = (i % 3 === 0) || (i % 3 === 2);

		if (isColorChange) {
			const [barOneIdx, barTwoIdx] = animations[i];
			const barOneStyle = arrayBars[barOneIdx].style;
			const barTwoStyle = arrayBars[barTwoIdx].style;
			const color = i % 3 === 0 ? secondary : primary;
			setTimeout(() => {
				barOneStyle.backgroundColor = color;
				barTwoStyle.backgroundColor = color;
			}, i * speed);
		} else {
			setTimeout(() => {
				const [barOneIdx, newOneHeight, barTwoIdx, newTwoHeight] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				barOneStyle.height = `${ newOneHeight }px`;
				barTwoStyle.height = `${ newTwoHeight }px`;
			}, i * speed);
		}
	}
}