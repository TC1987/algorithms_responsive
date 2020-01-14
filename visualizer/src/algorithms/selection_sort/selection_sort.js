// find smallest and move to most leftmost position. repeat.

export const selectionSortHelper = arr => {
	let i, j, smallestIdx, temp;
	const animations = [];

	for (i = 0; i < arr.length; i++) {
		smallestIdx = i;
		animations.push([i, 'starting']);
		for (j = i + 1; j < arr.length; j++) {
			animations.push([j, 'current']);
			animations.push([j, 'currentRevert']);
			if (arr[j] < arr[smallestIdx]) {
				smallestIdx = j;
			}
		}
		animations.push([smallestIdx, 'smallest']);
		temp = arr[i];
		arr[i] = arr[smallestIdx];
		arr[smallestIdx] = temp;
		animations.push([[i, arr[i], smallestIdx, temp], 'update']);
		animations.push([[i, smallestIdx], 'revert']);
	}

	return animations;
}