const DEFAULT_SPEED = 10;

export const updateSpeed = speed => {
	return {
		type: 'UPDATE_SPEED',
		payload: speed
	}
}

export default (state = DEFAULT_SPEED, action) => {
	switch (action.type) {
		case 'UPDATE_SPEED':
			return action.payload;
		default:
			return state;
	}
}