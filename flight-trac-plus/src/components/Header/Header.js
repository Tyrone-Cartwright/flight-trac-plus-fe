import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav>
      <Link to='/'>
        <h1>Flight Trac Plus➕</h1>
      </Link>
    </nav>
  );
};

export default Header;
