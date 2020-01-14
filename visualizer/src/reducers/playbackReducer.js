const DEFAULT_RUNNING = false;

export const updatePlayback = _ => ({
	type: 'IS_RUNNING'
})

export default (state = DEFAULT_RUNNING, action) => {
	switch (action.type) {
		case 'IS_RUNNING':
			return !state;
		default:
			return state;
	}
}