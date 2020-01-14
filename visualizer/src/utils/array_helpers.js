export const generateNumbers = (count, min, max) => {
	const numbers = [];
		
	for (let i = 0; i < count; i++) {
		numbers.push(randomIntFromRange(min, max));
	}

	return numbers;
}

export const randomIntFromRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export const compareArrays = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			console.log(arr1[i], arr2[i]);
			return false;
		}
	}

	return true;
}