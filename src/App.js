import { BrowserRouter, Routes, Route } from 'react-router-dom'


// Components
import './App.css';
import Navbar from './components/Navbar/Navbar';


// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import DetailedView from './pages/DetailView/DetailedView';


function App () {

	return (
		<div className="App">
			<BrowserRouter>

				<Navbar />

				<div className='app__container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/detail/:id' element={<DetailedView />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
