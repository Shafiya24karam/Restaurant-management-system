import { NavLink } from 'react-router-dom';

const NavItems = ({ items }) => {
  return (
    <div className="ml-10 flex items-baseline space-x-7">
      {items?.map((item) => (
        <NavLink
          key={item.pathname}
          to={item.pathname}
          className={({ isActive }) =>
            isActive
              ? "text-white text-xl underline"
              : "hover:text-white text-xl hover:underline"
          }
        >
          {item.route}
        </NavLink>
      ))}
    </div>
  );
};

export default NavItems;
