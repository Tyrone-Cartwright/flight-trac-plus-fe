import { Link } from 'react-router-dom';
import './Header';

const Header = (props) => {
  return (
    <header className='header'>
      <div>
        <Link className='links' to='/'>
          Flight Trac Plus➕
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
