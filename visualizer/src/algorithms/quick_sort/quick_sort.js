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

	animations.push([i, 'starting']);
	animations.push([right, 'starting']);

	while (left <= right - 1) {
		animations.push([left, 'current']);
		if (arr[left] <= pivot) {
			temp = arr[i];
			arr[i] = arr[left];
			arr[left] = temp;
			animations.push([[i, arr[i], left, temp], 'heightChange']);
			animations.push([i, 'revert']);
			i++;
		}
		animations.push([left, 'revert']);
		left++;
	}
	animations.push([right, 'revert']);
	temp = arr[i];
	arr[i] = arr[left];
	arr[left] = temp;
	animations.push([[i, arr[i], left, temp], 'heightChange']);
	animations.push([[i, pivot], 'revertTwo']);
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

	console.log(arr);
	return animations;
}