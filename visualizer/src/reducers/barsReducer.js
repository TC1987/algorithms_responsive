const DEFAULT_COUNT = 20;

export const updateBarCount = payload => {
	return {
		type: 'UPDATE_BAR_COUNT',
		payload
	}
}

export default (state = DEFAULT_COUNT, action) => {
	switch (action.type) {
		case 'UPDATE_BAR_COUNT':
			return action.payload;
		default:
			return state;
	}
}