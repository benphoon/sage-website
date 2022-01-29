import { Link } from 'react-router-dom'


function Nav() {
    return (
        <nav>
            <div className='nav-container'>
                <Link to='/'>
                    <div className='logo'></div>
                </Link>
                <ul className='nav-links'>
                    <Link className='default-link' to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link className='default-link' to='/advice'>
                        <li>Becoming A Client</li>
                    </Link>
                    <Link className='default-link' to='/contact'>
                        <li>Get In Touch</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
