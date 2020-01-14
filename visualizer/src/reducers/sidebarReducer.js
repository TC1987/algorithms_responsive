export const sidebarToggle = _ => {
	return {
		type: 'UPDATE_SIDEBAR'
	}
}

export default (state = false, action) => {
	switch (action.type) {
		case 'UPDATE_SIDEBAR':
			return !state;
		default:
			return state;
	}
}