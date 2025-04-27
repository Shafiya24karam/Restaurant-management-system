import { useState } from 'react';
import { Link} from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import useAuth from '../../../Hooks/useAuth';
import NavItems from './NavItems';
import Logo from './Logo';

const navItems = [
  { route: 'Home', pathname: '/' },
  { route: 'About Us', pathname: '/about' },
  { route: 'All Foods', pathname: '/all-foods' },
  { route: 'Gallery', pathname: '/gallery' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { user, logOut, loading } = useAuth(); // Including loading state

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileToggle = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <div className="relative">
      <nav className="bg-gradient-to-r from-secondary to-tertiary text-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
             <Logo/>
            </div>

            <div className="hidden lg:flex items-center">
              <NavItems items={navItems}/>

              {/* Conditional Rendering Based on Loading State */}
              {loading ? (
                <div className="ml-4 text-white">
                  <FaUserCircle className="h-10 w-10" />
                </div>
              ) : (
                user ? (
                  <div className="relative ml-4">
                    <button onClick={handleProfileToggle} className="relative flex items-center space-x-2">
                      <img
                        src={user.photoURL || FaUserCircle}
                        alt="Profile"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </button>
                    
                    {/* Profile Dropdown Menu */}
                    {profileDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                        <Link
                          to="/my-added-foods"
                          className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-tertiary transition-all duration-300"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          My Added Food Items
                        </Link>
                        <Link
                          to="/add-food"
                          className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-tertiary transition-all duration-300"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          Add a Food Item
                        </Link>
                        <Link
                          to="/my-ordered-foods"
                          className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-tertiary transition-all duration-300"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          My Ordered Food Items
                        </Link>
                        <Link to="/">
                          <button
                            onClick={logOut}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-tertiary/80 duration-300 transition-all hover:text-white"
                          >
                            Logout
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="relative text-xl bg-secondary text-white py-1 px-6 rounded-full overflow-hidden group">
                      <span className="relative z-10 flex items-center space-x-2">
                        <span>Login</span>
                      </span>
                      <div className="absolute inset-0 bg-secondary transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
                    </button>
                  </Link>
                )
              )}
            </div>

            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={handleDrawerToggle}
                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {mobileOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          direction="right"
          className="bg-gradient-to-r from-secondary to-tertiary text-white"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4">
              <button
                onClick={handleDrawerToggle}
                className="bg-secondary/80 text-white p-2 rounded-md"
              >
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col mt-3 divide-y">
              {navItems.map((item) => (
                <Link
                  key={item.pathname}
                  to={item.pathname}
                  className="mt-2 px-3 py-2 text-black text-base font-medium"
                  onClick={handleDrawerToggle}
                >
                  {item.route}
                </Link>
              ))}
              <div className="divide-y mb-4"></div>
              {loading ? (
                <div className="mt-2 px-3 py-2 text-white">Loading...</div>
              ) : (
                user ? (
                  <div className="relative ml-4">
                    <button onClick={handleProfileToggle} className="relative flex items-center space-x-2">
                      <img
                        src={user.photoURL || FaUserCircle}
                        alt="Profile"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </button>
                    
                    {/* Profile Dropdown Menu */}
                    {profileDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                        <Link
                          to="/my-added-foods"
                          className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-tertiary transition-all duration-300"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          My Added Food Items
                        </Link>
                        <Link
                          to="/add-food"
                          className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-tertiary transition-all duration-300"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          Add a Food Item
                        </Link>
                        <Link
                          to="/my-ordered-foods"
                          className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-tertiary transition-all duration-300"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          My Ordered Food Items
                        </Link>
                        <Link to="/">
                          <button
                            onClick={logOut}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-tertiary/80 duration-300 transition-all hover:text-white"
                          >
                            Logout
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="relative text-xl bg-secondary text-white py-2 px-8 text-center rounded-full overflow-hidden group">
                      <span className='z-10 relative'>Login</span>
                      <div className="absolute inset-0 bg-secondary transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
                    </button>
                  </Link>
                )
              )}
            </div>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
