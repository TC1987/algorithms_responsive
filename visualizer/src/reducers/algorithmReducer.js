const DEFAULT_ALGORITHM = '';

export const updateAlgorithm = payload => {
	return {
		type: 'UPDATE',
		payload
	}
}

export default (state = DEFAULT_ALGORITHM, action) => {
	switch (action.type) {
		case 'UPDATE':
			return action.payload;
		default:
			return state;
	}
}