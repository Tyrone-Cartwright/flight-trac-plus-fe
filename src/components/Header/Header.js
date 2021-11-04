import { Link } from 'react-router-dom';
import './Header';
import logo from '../../assets/Flight Trac Plus-logos.jpeg';

const Header = (props) => {
  return (
    <header className='header'>
      <div>
        <Link className='links' to='/'>
          <img src={logo} className='logo' alt='Flight Trac Plus' />
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
          <Link className='links' to='/dashboard'>
            Dashboard
          </Link>
          <Link className='links' to='/login'>
            Login
          </Link>
          <Link className='links' to='/signup'>
            Sign Up
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
