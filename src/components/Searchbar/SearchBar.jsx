import React, { useContext, useEffect } from 'react'

import { API } from '../../Interceptor/api';
import './searchBar.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { DataContext } from '../../context/dataProvider';


const SearchBar = () => {
	const context = useContext(DataContext);

	useEffect(() => {
		const callAPI = async () => {
			const { data } = await API.getSearchShow(context.searchInput)
			console.log(data)
			context.setData(data)
		}
		callAPI()
	}, [])

	return (
		<div className='searchbar__container'>
			<div className='searchbar__text'>
				<h1>Find most populer movies and TV shows here. </h1>
			</div>
			<div className='search'>
				<input type="text" placeholder='Search Shows Name Hear' />
				<BiSearchAlt2 style={{ fontSize: '22px', position: "relative", right: 30, top: 22, color: '#926000'}}/>
			</div>
		</div>
	)
}

export default SearchBar