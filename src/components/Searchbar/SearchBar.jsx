import React, { useContext, useEffect } from 'react'

import { API } from '../../Interceptor/api';
import './searchBar.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { DataContext } from '../../context/dataProvider';


const SearchBar = () => {
	const context = useContext(DataContext);

	const searchShowHandler = (value) => {
		context.setSearchInput(value)
	}

	useEffect(() => {
		const callAPI = async () => {
			try {
				const { data } = await API.getSearchShow(context.searchInput)
				setTimeout(function () {
					console.log("One second has passed.");
					context.setData(data)
				}, 1000); //
			} catch (error) {
				console.log(error)
			}
		}
		callAPI()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [context.searchInput])
	return (
		<div className='searchbar__container'>
			<div className='searchbar__text'>
				<h1>Find most populer movies and TV shows here. </h1>
			</div>
			<div className='search'>
				<input type="text" placeholder='Search Shows Name Hear' onChange={(e)=> searchShowHandler(e.target.value)}/>
				<BiSearchAlt2 style={{ fontSize: '22px', position: "relative", right: 30, top: 22, color: '#926000'}}/>
			</div>
		</div>
	)
}

export default SearchBar