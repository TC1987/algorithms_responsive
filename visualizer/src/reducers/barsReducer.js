const DEFAULT_COUNT = 100;

export const updateBarsCount = payload => {
	return {
		type: 'UPDATE',
		payload
	}
}

export default (state = DEFAULT_COUNT, action) => {
	switch (action.type) {
		case 'UPDATE':
			return action.payload;
		default:
			return state;
	}
}