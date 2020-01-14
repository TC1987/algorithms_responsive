// divide and conquer
// find middle index, recursively call on both halves
// once array is of length 1, merge back together

// const merge = (arr1, arr2) => {
// 	let idx1 = 0;
// 	let idx2 = 0;
// 	let result = [];

// 	while (idx1 < arr1.length && idx2 < arr2.length) {
// 		if (arr1[idx1] < arr2[idx2]) {
// 			result.push(arr1[idx1]);
// 			idx1++;
// 		} else {
// 			result.push(arr2[idx2]);
// 			idx2++;
// 		}
// 	}

// 	if (idx1 < arr1.length) {
// 		result = result.concat(arr1.slice(idx1));
// 	}

// 	if (idx2 < arr2.length) {
// 		result = result.concat(arr2.slice(idx2));
// 	}

// 	return result;
// }

// in-place
// auxArray's values don't change
const merge = (array, start, middle, end, auxArray, animations) => {
	let i = start;
	let j = middle + 1;
	let k = start;

	while (i <= middle && j <= end) {
		// indexes being compared. push to change color.
		animations.push([i, j]);
		// indexes being compared. push to revert color.
		animations.push([i, j]);
		if (auxArray[i] <= auxArray[j]) {
			animations.push([k, auxArray[i]]);
			array[k++] = auxArray[i++];
		} else {
			animations.push([k, auxArray[j]]);
			array[k++] = auxArray[j++];
		}
	}

	while (i <= middle) {
		animations.push([i, i]);
		animations.push([i, i]);
		animations.push([k, auxArray[i]]);
		array[k++] = auxArray[i++];
	}

	while (j <= end) {
		animations.push([j, j]);
		animations.push([j, j]);
		animations.push([k, auxArray[j]]);
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
		if (start === end) return;

		const middle = Math.floor((start + end) / 2);
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