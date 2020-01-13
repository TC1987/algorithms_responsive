const DEFAULT_HEIGHTS = {
	min: 5,
	max: 400
};

export const updateMin = height => {
	return {
		type: 'UPDATE_MIN',
		payload: height
	}
}

export const updateMax = height => {
	return {
		type: 'UPDATE_MAX',
		payload: height
	}
}

export default (state = DEFAULT_HEIGHTS, action) => {
	switch (action.type) {
		case 'UPDATE_MIN':
			return {
				...state,
				min: action.payload
			};
		case 'UPDATE_MAX':
			return {
				...state,
				max: action.payload
			}
		default:
			return state;
	}
}