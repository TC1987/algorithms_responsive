// in-place
// auxArray's values don't change
const merge = (array, start, middle, end, auxArray, animations) => {
	let i = start;
	let j = middle + 1;
	let k = start;

	while (i <= middle && j <= end) {
		animations.push([[i, j], 'CHANGE_TWO_SECONDARY']);
		if (auxArray[i] <= auxArray[j]) {
			animations.push([[k, -1, auxArray[i]], 'CHANGE_HEIGHT']);
			animations.push([[i, j], 'CHANGE_TWO_PRIMARY']);
			array[k++] = auxArray[i++];
		} else {
			animations.push([[k, -1, auxArray[j]], 'CHANGE_HEIGHT']);
			animations.push([[i, j], 'CHANGE_TWO_PRIMARY']);
			array[k++] = auxArray[j++];
		}
	}

	while (i <= middle) {
		animations.push([[i], 'CHANGE_ONE_SECONDARY']);
		animations.push([[k, -1, auxArray[i]], 'CHANGE_HEIGHT']);
		animations.push([[i], 'CHANGE_ONE_PRIMARY']);
		array[k++] = auxArray[i++];
	}

	while (j <= end) {
		animations.push([[i], 'CHANGE_ONE_SECONDARY']);
		animations.push([[k, -1, auxArray[j]], 'CHANGE_HEIGHT']);
		animations.push([[i], 'CHANGE_ONE_PRIMARY']);
		array[k++] = auxArray[j++];
	}
}

const mergeSort = (
	array,
	start,
	end,
	auxArray,
	animations
) => {
	if (start === end) {
		return;
	}

	const middle = Math.floor((start + end) / 2);

	animations.push([[middle], 'CHANGE_ONE_SECONDARY']);
	animations.push([[middle], 'CHANGE_ONE_PRIMARY']);

	mergeSort(auxArray, start, middle, array, animations);
	mergeSort(auxArray, middle + 1, end, array, animations);
	merge(array, start, middle, end, auxArray, animations);
}

export const mergeSortHelper = array => {
	if (array.length <= 1) {
		return array;
	}

	const animations = [];
	const auxArray = [...array];

	mergeSort(array, 0, array.length - 1, auxArray, animations);

	return animations;
}