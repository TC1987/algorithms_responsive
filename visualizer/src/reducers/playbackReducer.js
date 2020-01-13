const DEFAULT_PLAYBACK = false;

export const updatePlayback = payload => {
	return {
		type: 'UPDATE',
		payload
	}
}

export default (state = DEFAULT_PLAYBACK, action) => {
	switch (action.type) {
		case 'UPDATE':
			return action.payload;
		default:
			return state;
	}
}