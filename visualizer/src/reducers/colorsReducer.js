const DEFAULT_COLORS = {
	primary: 'pink',
	secondary: 'black'
}

export const changePrimaryColor = color => ({
	type: 'CHANGE_PRIMARY_COLOR',
	color
});

export const changeSecondaryColor = color => ({
	type: 'CHANGE_SECONDARY_COLOR',
	color
});

export default (state = {}, action) => {
	switch (action.type) {
		case 'CHANGE_PRIMARY_COLOR':
			return {
				...state,
				primary: action.color
			}
		case 'CHANGE_SECONDARY_COLOR':
			return {
				...state,
				secondary: action.color
			}
		default:
			return state;
	}
}