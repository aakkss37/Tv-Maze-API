import React from 'react'
import SearchBar from '../../components/Searchbar/SearchBar'
import './home.css'

const Home = () => {
	return (
		<div className='home'>
			<div className="home_container">
				<div>
					<SearchBar />
				</div>

				<div>
					<div>Home</div>
				</div>
			</div>
		</div>
	)
}

export default Home