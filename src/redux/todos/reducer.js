import { ADDED, TOGGLED, PRIORITY_SELECTED, DELETED, ALL_COMPLETED, CLEAR_COMPLETED } from './actionTypes';

const initialState = [
	{ id: 1, text: 'Learn React JS', completed: true },
	{ id: 2, text: 'Learn Redux', completed: false, priority: 'high' }
];

const getMaxId = todos => todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDED:
			return [
				...state,
				{ id: getMaxId(state), text: action.payload.text, completed: false }
			];

		case TOGGLED:
			return state.map(todo => {
				return action.payload.id !== todo.id ? todo :
					{ ...todo, completed: !todo.completed }
			});

		case PRIORITY_SELECTED:
			return state.map(todo => {
				return action.payload.id !== todo.id ? todo :
					{ ...todo, priority: action.payload.priorityType }
			});

		case DELETED:
			return state.filter(todo => action.payload.id !== todo.id);

		case ALL_COMPLETED:
			return state.map(todo => ({ ...todo, completed: true }));

		case CLEAR_COMPLETED:
			return state.filter(todo => !todo.completed);

		default:
			return state;
	}
}
export default reducer;