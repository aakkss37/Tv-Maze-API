import { useEffect, useState } from 'react'
import axios from 'axios';

import SearchBar from '../../components/Searchbar/SearchBar'
import './home.css'
import Loader from '../../components/Loader/Loader';


const Home = () => {
	const [movie, setMovie] = useState("")

	useEffect(() => {
		const callAPI = async () => {
			const { data } = await axios.get("https://api.tvmaze.com/search/shows?q=all");
			console.log(data)
		}
		callAPI()
	}, [])


	return (
		<div className='home'>
			<div className="home_container">
				<div>
					<SearchBar />
				</div>

				<div className='home__body'>
					<Loader/>
				</div>
			</div>
		</div>
	)
}

export default Home