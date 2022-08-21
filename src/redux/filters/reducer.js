import { STATUS_CHANGED, PRIORITY_CHANGED } from './actionTypes';

const initialState = {
	status: 'All',
	priorities: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case STATUS_CHANGED:
			return { ...state, status: action.payload.status };

		case PRIORITY_CHANGED:
			const { priority, changeType } = action.payload;
			return {
				...state,
				priorities: 'removed' === changeType ?
					state.priorities.filter(p => priority !== p) :
					[...state.priorities, priority]
			};

		default:
			return state;
	}
}
export default reducer;