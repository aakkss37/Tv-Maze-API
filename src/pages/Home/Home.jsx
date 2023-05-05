import { useEffect, useState } from 'react'
import axios from 'axios';


// Components
import './home.css'
import unavailableImg from '../../assets/unavailableImg.png'
import SearchBar from '../../components/Searchbar/SearchBar'
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Cards/Card';


const Home = () => {
	const [movies, setMovies] = useState("")

	useEffect(() => {
		const callAPI = async () => {
			const { data } = await axios.get("https://api.tvmaze.com/search/shows?q=all");
			setMovies(data)
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
					{
						movies ? <>
							{
								movies.map((item)=> <Card key={item.show.id}
														img={item.show.image?.medium }
														showName ={item.show?.name }
														rating={item.show.rating?.average }
													/>)
							}
						</> : <Loader />
					}
					
				</div>
			</div>
		</div>
	)
}

export default Home