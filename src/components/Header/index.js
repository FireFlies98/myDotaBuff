import '../../styles/mixins.scss'
import './Header.scss'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function Header() {

    // const [heroName, setHeroName] = useState([])
    // const [qwe, setQwe] = useState('')
    // const API = 'https://api.opendota.com'


    // useEffect(() => {
    //     getHeroName()
    // }, [])

    // const getHeroName = async () => {
    //     const result = await axios ('https://api.opendota.com/api/heroStats')
    //     const res = result.data.map((e) => e.localized_name)
    //     setHeroName(res)
    // }


    // const search = (e) => {
    //     setQwe(e.target.value)
    // }

    // const inputSearch = () => {
    //     return heroName.filter(el => {
    //         console.log(el)
    //         return el.indexOf(qwe) !== -1
    //     })
    // }

    'navigation-menu__item'


    return (
        <>
            <header className='header'>
                <div className='header_wrap'>
                    <div className='header_container_nav'>
                        <div>
                            <input id="menu__toggle" type="checkbox"/>
                            <label class="navigation__btn" for="menu__toggle">
                                <span></span>
                            </label>
                            <ul class="mobile--navigation menu__box">
                                <Link to='/heroes' className='navigation-menu__item'>
                                    <li>Heroes</li>                                                                   
                                </Link>
                                <Link to='/under_development' className='navigation-menu__item'>
                                    <li>Items</li>                                                                   
                                </Link>
                                <Link to='/under_development' className='navigation-menu__item'>
                                    <li>Teams</li>                                                                   
                                </Link>
                                <Link to='/under_development' className='navigation-menu__item'>
                                    <li>Leagues</li>                                                                   
                                </Link>
                                <Link to='/under_development' className='navigation-menu__item'>
                                    <li>Players</li>                                                                   
                                </Link>
                            </ul>
                        </div>                      
                        <Link to='/'>
                            <div className='navigation_logo_block'>
                                <a className='nav_logo'>DOTABUFF</a>
                            </div>
                        </Link>
                        <div>
                            <ul className='header_navigation'>
                                <Link to='/heroes' className='header_nav'>
                                    <li>Heroes</li>                                                                   
                                </Link>
                                <Link to='/under_development' className='header_nav'>
                                    <li>Items</li>                                                                   
                                </Link>
                                <Link to='/under_development' className='header_nav'>
                                    <li>Teams</li>                                                                   
                                </Link>
                                <Link to='/under_development' className='header_nav'>
                                    <li>Leagues</li>                                                                   
                                </Link>
                                <Link to='/under_development' className='header_nav'>
                                    <li>Players</li>                                                                   
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className='header_log_in'>
                        {/* <input type='search' id='search' onChange={search}/>
                        {inputSearch().find((el) => {
                            return <div>{el}</div>
                        })} */}
                        <Link to='/login' className='header_nav login'>Log In</Link>
                    </div>
                </div>
            </header>
        </>
    )
}
    