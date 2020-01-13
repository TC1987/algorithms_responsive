const DEFAULT_SPEED = 10;

export const updateSpeed = speed => {
	return {
		type: 'UPDATE',
		payload: speed
	}
}

export default (state = DEFAULT_SPEED, action) => {
	switch (action.type) {
		case 'UPDATE':
			return action.payload;
		default:
			return state;
	}
}