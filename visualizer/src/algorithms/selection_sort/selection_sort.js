// find smallest and move to most leftmost position. repeat.

export const selectionSortHelper = arr => {
	let i, j, smallestIdx, temp;
	const animations = [];

	for (i = 0; i < arr.length; i++) {
		smallestIdx = i;
		animations.push([[i], 'CHANGE_ONE_SECONDARY']);
		for (j = i + 1; j < arr.length; j++) {
			animations.push([[j], 'CHANGE_ONE_SECONDARY']);
			if (arr[j] < arr[smallestIdx]) {
				animations.push([[smallestIdx], 'CHANGE_ONE_PRIMARY']);
				smallestIdx = j;
				animations.push([[smallestIdx], 'CHANGE_ONE_SECONDARY']);
			} else {
				animations.push([[j], 'CHANGE_ONE_PRIMARY']);
			}
		}
		temp = arr[i];
		arr[i] = arr[smallestIdx];
		arr[smallestIdx] = temp;
		animations.push([[i, smallestIdx, arr[i], temp], 'SWAP_HEIGHTS']);
		animations.push([[i, smallestIdx], 'CHANGE_TWO_PRIMARY']);
	}

	return animations;
}