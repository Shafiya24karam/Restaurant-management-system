import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex-shrink-0 cursor-pointer">
      <Link to="/">
        <h2 className='text-2xl text-white'>
          <strong>R</strong>estaurant
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
