export const insertionSortHelper = arr => {
	if (arr.length <= 1) {
		return arr;
	}

	const animations = [];

	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		let currentIdx = i;
		animations.push([[i - 1, i], 'CHANGE_TWO_SECONDARY']);
		while (currentIdx >= 0 && currentVal < arr[currentIdx - 1]) {
			animations.push([[currentIdx - 1, currentIdx], 'CHANGE_TWO_SECONDARY']);
			let temp = arr[currentIdx - 1];
			arr[currentIdx - 1] = currentVal;
			arr[currentIdx] = temp;
			animations.push([[currentIdx - 1, currentIdx], 'CHANGE_TWO_PRIMARY']);
			animations.push([[currentIdx - 1, currentIdx, currentVal, temp], 'SWAP_HEIGHTS']);
			currentIdx--;
		}
		animations.push([[i - 1, i], 'CHANGE_TWO_PRIMARY']);
	}

	return animations;
};