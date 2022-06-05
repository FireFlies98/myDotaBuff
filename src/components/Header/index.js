import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <>
            <header className='header'>
                <div className='header_wrap'>
                    <div className='logo_nav_container'>
                        <a className='logo_nav'>DOTABUFF</a>
                    </div>
                    <div>
                        <ul className='header_navigation'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/heroes'>Heroes</Link>
                            </li>
                            <li>
                                <Link to='/login'>Log In</Link>
                            </li>
                            <li>asd</li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
    