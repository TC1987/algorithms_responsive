export const bubbleSortHelper = arr => {
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