import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Todo/Header';
import TodoList from './components/Todo/TodoList';
import Footer from './components/Todo/Footer';

const App = () => <Provider store={store}>
	<div className='grid place-items-center bg-blue-100 h-screen px-6 font-sans'>
		<Navbar />

		<div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
			<Header />
			<hr className='mt-4' />

			<TodoList />
			<hr className='mt-4' />

			<Footer />
		</div>
	</div>
</Provider>
export default App;
