import { useState } from 'react';
import { useDispatch } from 'react-redux';

import notesImg from '../../img/notes.png';
import doubleTickImg from '../../img/double-tick.png';
import plusIcon from '../../img/plus.png';
import { added, allCompleted, clearCompleted } from '../../redux/todos/actions';

const Header = () => {
	const dispatch = useDispatch();

	const [input, setInput] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		dispatch(added(input));
		setInput('');
	}

	return <div>
		<form className='flex items-center bg-gray-100 px-4 py-4 rounded-md' onSubmit={onSubmit}>
			<img className='w-6 h-6' src={notesImg} alt='Add todo' />

			<input type='text' value={input} placeholder='Type your todo' className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500' onChange={e => setInput(e.target.value)} />

			<button type='submit' className={`appearance-none w-8 h-8 bg-[url('${plusIcon}')] bg-no-repeat bg-contain`}></button>
		</form>

		<ul className='flex justify-between my-4 text-xs text-gray-500'>
			<li className='flex space-x-1 cursor-pointer' onClick={() => dispatch(allCompleted())}>
				<img className='w-4 h-4' src={doubleTickImg} alt='Complete' />

				<span>Complete All Tasks</span>
			</li>

			<li className='cursor-pointer' onClick={() => dispatch(clearCompleted())}>Clear completed</li>
		</ul>
	</div>
}
export default Header;