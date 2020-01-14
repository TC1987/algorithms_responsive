export const initializeNumbers = numbers => ({
	type: 'INITIALIZE_NUMBERS',
	payload: numbers
});

export default (state = [], action) => {
	switch (action.type) {
		case 'INITIALIZE_NUMBERS':
			return action.payload;
		default:
			return state;
	}
}