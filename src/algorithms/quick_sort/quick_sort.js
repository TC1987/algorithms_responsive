// determine pivot
// anything less than pivot goes to left
// anything greater goes to right
// pivot is now in correct position
// call function again on both halves
// once array is of size 0 or 1, finished

const partition = (arr, left, right, animations) => {
	let pivot = arr[right];
	let i = left;
	let temp;

	animations.push([[i, right], 'CHANGE_TWO_SECONDARY']);

	while (left <= right - 1) {
		animations.push([[left], 'CHANGE_ONE_SECONDARY']);
		if (arr[left] <= pivot) {
			temp = arr[i];
			arr[i] = arr[left];
			arr[left] = temp;
			animations.push([[i, left, arr[i], arr[left]], 'SWAP_HEIGHTS']);
			animations.push([[i, left], 'CHANGE_TWO_PRIMARY']);
			i++;
			animations.push([[i], 'CHANGE_ONE_SECONDARY']);
		} else {
			animations.push([[left], 'CHANGE_ONE_PRIMARY']);
		}
		left++;
	}
	temp = arr[i];
	arr[i] = arr[left];
	arr[left] = temp;
	animations.push([[i, left, arr[i], temp], 'SWAP_HEIGHTS']);
	animations.push([[i, left], 'CHANGE_TWO_PRIMARY']);
	return i;
}

const quickSort = (arr, left, right, animations) => {
	if (left <= right) {
		let pivot = partition(arr, left, right, animations);
		quickSort(arr, left, pivot - 1, animations);
		quickSort(arr, pivot + 1, right, animations);
	}
}

export const quickSortHelper = arr => {
	if (arr.length <= 1) {
		return arr;
	}

	const animations = [];

	quickSort(arr, 0, arr.length - 1, animations);

	return animations;
}