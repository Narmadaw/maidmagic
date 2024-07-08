import Logo from '../../assets/logos/logo-small.png';
import './NavBar.scss'
const NavBar = () =>{
    return(
        <header className='header'>
            <div className="logo">
                <img src={Logo} alt="maidmagic logo" />
            </div>
            <div className="nav">
                <ul className='nav-list'>
                    <li className='nav-list-item'>Home</li>
                    <li className='nav-list-item'>Locations</li>
                    <li className='nav-list-item'>Our Services</li>
                    <li className='nav-list-item'>Who We Are</li>
                    <li className='nav-list-item'>Contact Us</li>
                    <li className='nav-list-item'>Login</li>
                    <li className='nav-list-item'><button className='btn-quote'>Free Quote</button></li>
                </ul>
            </div>
        </header>
    )
}
export default NavBar