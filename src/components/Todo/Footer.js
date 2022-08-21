import { useSelector, useDispatch } from 'react-redux';

import { priorityChanged, statusChanged } from '../../redux/filters/actions';

const Footer = () => {
	const { todos, filters } = useSelector(state => state);
	const dispatch = useDispatch();

	const incompleteTodos = todos.filter(todo => !todo.completed).length;
	const taskText = 0 === incompleteTodos ? 'No task' : 1 === incompleteTodos ? '1 task' : `${incompleteTodos} tasks`;

	const { status, priorities } = filters;

	const onStatusChange = status => dispatch(statusChanged(status));

	const priorityChangeType = priority => priorities.includes(priority) ? 'removed' : 'added';

	const onPriorityChange = (priority) => dispatch(priorityChanged(priority, priorityChangeType(priority)));

	return <div className='mt-4 flex justify-between text-xs text-gray-500'>
		<p>{taskText} left</p>

		<ul className='flex space-x-1 items-center text-xs'>
			<li className={`cursor-pointer ${'All' === status ? 'font-bold' : ''}`} onClick={() => onStatusChange('All')}>All</li>
			<li>|</li>
			<li className={`cursor-pointer ${'Incomplete' === status ? 'font-bold' : ''}`} onClick={() => onStatusChange('Incomplete')}>Incomplete</li>
			<li>|</li>
			<li className={`cursor-pointer ${'Complete' === status ? 'font-bold' : ''}`} onClick={() => onStatusChange('Complete')}>Complete</li >
			<li></li>
			<li></li>


			<li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${priorities.includes('low') ? 'bg-green-500' : ''}`} onClick={() => onPriorityChange('low')}></li>

			<li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${priorities.includes('medium') ? 'bg-yellow-500' : ''}`} onClick={() => onPriorityChange('medium')}></li>

			<li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${priorities.includes('high') ? 'bg-red-500' : ''}`} onClick={() => onPriorityChange('high')}></li>
		</ul>
	</div>
}
export default Footer;