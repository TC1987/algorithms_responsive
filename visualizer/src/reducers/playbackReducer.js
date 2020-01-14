const DEFAULT_PLAYBACK = false;

export const updatePlayback = payload => {
	return {
		type: 'UPDATE_PLAYBACK',
		payload
	}
}

export default (state = DEFAULT_PLAYBACK, action) => {
	switch (action.type) {
		case 'UPDATE_PLAYBACK':
			return action.payload;
		default:
			return state;
	}
}