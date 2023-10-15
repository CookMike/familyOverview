import { Link } from 'react-router-dom'

import '../../../styles/index.scss'

import logo from '../../../pics/logo.svg'


export function Header(){
    return <div className = {`navbar-container`} id='navbarContainer'>
                <nav className='navbar'>
                    <Link className={`navbar-member`} id='logo' to='/'><img src={logo} alt='logo'/></Link>
                    <ul className = {`navbar-list`}>
                        <li className={`navbar-member dropdown`} id='calendar'>
                            <Link to='/calendar'>Kalendár</Link></li>
                        <li className={`navbar-member dropdown`} id='news'>
                            <Link to='/news'>Aktuality</Link></li>
                        <li className={`navbar-member button`} id='foto'>
                            <Link to='/foto'>FOTO</Link></li>
                        <li className={`navbar-member button`} id='user'>user</li>
                        <li className={`navbar-member lowresDropdown`} id='dropDown'>lowres dropdown</li>
                    </ul>
                </nav>
            </div>
}