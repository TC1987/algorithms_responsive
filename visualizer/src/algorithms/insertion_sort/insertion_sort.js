export const insertionSortHelper = arr => {
	if (arr.length <= 1) {
		return arr;
	}

	const animations = [];

	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		let currentIdx = i;
		animations.push([[i - 1, i], 'starting']);
		while (currentIdx >= 0 && currentVal < arr[currentIdx - 1]) {
			animations.push([[currentIdx - 1, currentIdx], 'update']);
			let temp = arr[currentIdx - 1];
			arr[currentIdx - 1] = currentVal;
			arr[currentIdx] = temp;
			animations.push([[currentIdx - 1, currentIdx], 'revert']);
			animations.push([[currentIdx - 1, currentVal, currentIdx, temp], 'heightChange']);
			currentIdx--;
		}
		animations.push([[i - 1, i], 'revert']);
	}

	return animations;
};