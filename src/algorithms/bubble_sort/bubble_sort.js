// largest number in array gets bubbled up to the last index

export const bubbleSortHelper = arr => {
	if (arr.length <= 1) {
		return arr;
	}

	const animations = [];
	let i, j, temp;

	for (i = 0; i < arr.length; i++) {
		for (j = 1; j < (arr.length - i); j++) {
			animations.push([[j - 1, j], 'CHANGE_TWO_SECONDARY']);
			if (arr[j - 1] > arr[j]) {
				temp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = temp;
				animations.push([[j - 1, j, arr[j - 1], arr[j]], 'SWAP_HEIGHTS']);
			}
			animations.push([[j - 1, j], 'CHANGE_TWO_PRIMARY'])
		}
	}

	return animations;
}

