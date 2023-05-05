import { useContext } from 'react'


// Components
import './home.css'
import SearchBar from '../../components/Searchbar/SearchBar'
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Cards/Card';
import { DataContext } from '../../context/dataProvider';


const Home = () => {
	const context = useContext(DataContext)



	return (
		<div className='home'>
			<div className="home_container">
				<div>
					<SearchBar />
				</div>

				<div className='home__body'>
					{
						context.data ? <>
							{
								context.data.map((item)=> <Card key={item.show.id}
														showId={item.show.id}
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