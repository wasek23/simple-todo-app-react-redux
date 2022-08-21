import { useSelector } from 'react-redux';

import Todo from './Todo';

const TodoList = () => {
	const { todos, filters } = useSelector(state => state);
	const { status, priorities } = filters;

	const filteredTodos = todos.filter(todo => {
		// switch (status) {
		// 	case 'Complete':
		// 		return todo.completed;
		// 	case 'Incomplete':
		// 		return !todo.completed;
		// 	default:
		// 		return true;
		// }

		return 'Complete' === status ? todo.completed : 'Incomplete' === status ? !todo.completed : true;
	}).filter(todo => {
		// if (priorities.length > 0) {
		// 	return priorities.includes(todo?.priority);
		// }
		// return true;

		return priorities.length > 0 ? priorities.includes(todo?.priority) : true;
	});

	return <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
		{filteredTodos.map(todo => <Todo key={todo.id} todo={todo} />)}
	</div>
}
export default TodoList;