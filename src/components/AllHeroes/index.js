import './AllHeroes.css'
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'



function AllHeroes(props) {
    const API = 'https://api.opendota.com'

    const navigate = useNavigate();


    const logOut = () => {
        navigate('/login')
    }



    return (
        <>
            <main className='main'>
                <div className='main_wrap'>
                    <div className='main_header'>
                        <h2 className='main_header_title'>ALL HEROES</h2>
                        <div className='popular_rate'>
                            <div className='note-sumbol_red'><FaStar /></div>
                            <p className='popular_rate_text'>TURBO PICK</p>
                            <div className='note-sumbol_green'><FaStar /></div>
                            <p className='popular_rate_text'>TURBO WIN</p>
                            <button onClick={logOut}>Log Out</button>
                        </div>
                    </div>
                    <div className='heroes_container'>
                        {props.heroesContainer.map((item) => {
                            return (
                                <Link to={`/heroes/${item.localized_name}`} className='heroes_nav'>
                                    <div className='hero_block'>
                                        <img src={`${API + item.img}`} alt='hero' className='heroes_img' />
                                        <p className='ppp'>{item.localized_name}</p>
                                        {item.turbo_picks > 35000 && <div className='note-sumbol_red turbo_pick'><FaStar /></div>}
                                        {item.turbo_wins > 25000 && <div className='note-sumbol_green turbo_wins'><FaStar /></div>}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}

export default AllHeroes;