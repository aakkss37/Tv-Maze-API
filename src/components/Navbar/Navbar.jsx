import React, {useState} from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
	const navigate = useNavigate()
	const [active, setActive] = useState(window.location.pathname);
	return (
		<div className='navbar'>
			<div className='navbar__container'>

				<div className="container__lhs">
					<p onClick={()=>{navigate('/')}}> TV Maze API </p>
				</div>

				<div className="container__rhs">
					<p onClick={() => {navigate('/'); setActive("/")}} className={active === '/' ? 'active' : ''}>Home</p>
					<p onClick={() => { navigate('/about'); setActive("/about") }} className={active === '/about' ? 'active' : ''}>About</p>
					<button className='contact' onClick={() => navigate('/contact')}>Contact</button>
				</div>

			</div>
		</div>
	)
}

export default Navbar