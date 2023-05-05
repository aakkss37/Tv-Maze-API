/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './detailedView.css'
import unavailableImg from '../../assets/unavailableImg.png'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from '../../components/Loader/Loader';



const DetailedView = () => {
	const [showDetail, setShowDetail] = useState()
	const { id } = useParams();
	console.log(id)
	useEffect(() => {
		const callAPI = async () => {
			try {
				const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`)
				setShowDetail(data)
			} catch (error) {
				console.log(error)
			}
		}
		callAPI()
	}, []);

	return (
		<div className='show__detail'>
			{
				!showDetail ? <Loader /> :
					<div className='show__detail__container'>
						<div className="img__container">
							<img src={showDetail.image ? showDetail.image.original : unavailableImg} alt="error loaging" />
							<a href={showDetail?.network?.officialSite}> Visite Official Site</a>
						</div>
						<div className="detail__text">
							<h1>{showDetail.name}</h1>
							<p>Rating: {showDetail?.rating?.average} @imdb</p>
							<span>Released: {showDetail.premiered}</span>
							<p>Country: {showDetail?.network?.country?.name}</p>
							<p>Genres: {showDetail?.genres.map(item => item)}</p>
							<p>RunTime: {showDetail?.averageRuntime} min</p>
							<div className="show__summary">
								<h2 style={{ margin: "auto" }}>Summary:</h2>
								<p >{showDetail?.summary.replace(/<\/?(p|b)>/g, "")}</p>
							</div>
						</div>
					</div>
			}
		</div>
	)
}

export default DetailedView