import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav>
      <Link to='/'>
        <h3>Flight Trac Plus➕</h3>
      </Link>
      <Link to='/dashboard'>
        <h3>Dashboard</h3>
      </Link>
    </nav>
  );
};

export default Header;
