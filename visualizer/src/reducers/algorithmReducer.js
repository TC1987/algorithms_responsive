const DEFAULT_ALGORITHM = '';

export const updateAlgorithm = payload => {
	return {
		type: 'UPDATE_ALGORITHM',
		payload
	}
}

export default (state = DEFAULT_ALGORITHM, action) => {
	switch (action.type) {
		case 'UPDATE_ALGORITHM':
			return action.payload;
		default:
			return state;
	}
}