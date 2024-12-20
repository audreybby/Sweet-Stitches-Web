import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.png";
import logo from "../assets/modern.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/user.png";
import product1 from "../assets/cro.jpg";
import product2 from "../assets/coo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopPopupVisible, setShopPopupVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  const handleShopClick = (e) => {
    e.preventDefault();
    setShopPopupVisible(!shopPopupVisible);
  };

  const handleUserClick = () => {
    navigate("/login");
  };

  const handleNavigation = (e) => {
    if (isLoginPage) {
      e.preventDefault();
    }
    setMenuOpen(false); // Close the menu when navigating
  };

  return (
    <nav
      className="bg-white text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50"
      style={{ boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.8)" }}
    >
      {/* Logo */}
      <div className="text-gray-600 hover:text-pink-300 text-lg font-bold absolute left-1/2 transform -translate-x-1/2 md:hidden">
        <img src={logo} alt="Logo" className="w-10 h-10 object-cover rounded-full" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center justify-center space-x-6 flex-1">
        {["Home", "Gallery"].map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-600 hover:text-pink-300 transition duration-300 cursor-pointer"
              onClick={handleNavigation}
              style={{ fontFamily: "'Quintessential', cursive" }}
            >
              {item}
            </Link>
          </li>
        ))}

        {/* Logo between Gallery and Shop */}
        <li>
          <div>
            <img src={logo} className="w-10 h-10 object-cover rounded-full" alt="Logo" />
          </div>
        </li>

        {/* Shop Menu */}
        <li className="relative group">
          <a
            href="#"
            onClick={handleShopClick}
            className="text-gray-600 hover:text-pink-300 transition duration-300 cursor-pointer"
            style={{ fontFamily: "'Quintessential', cursive" }}
          >
            Shop
          </a>

          {/* Popup */}
          <div
            className={`absolute left-1/2 transform -translate-x-[72%] top-[calc(100%+1rem)] mt-2 w-[320px] p-4 bg-white shadow-lg rounded-lg opacity-0 transition-opacity duration-500 ease-in-out ${
              shopPopupVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-20px]"
            }`}
            style={{
              transitionProperty: "opacity, transform",
            }}
          >
            <div className="flex justify-between space-x-4">
              <div className="w-32 h-32">
                <Link to="/cr" onClick={() => setShopPopupVisible(false)}>
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </Link>
              </div>
              <div className="w-32 h-32">
                <Link to="/ck" onClick={() => setShopPopupVisible(false)}>
                  <img
                    src={product2}
                    alt="Product 2"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </li>

        {["Event"].map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase()}
              className="text-gray-600 hover:text-pink-300 transition duration-300 cursor-pointer"
              onClick={handleNavigation}
              style={{ fontFamily: "'Quintessential', cursive" }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Cart and User Icons */}
      <div className="flex items-center space-x-2 md:space-x-6 absolute right-4 md:right-8">
        <img
          src={cartIcon}
          alt="Cart"
          className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80 transition-opacity opacity-50"
        />
        <button onClick={handleUserClick}>
          <img
            src={userIcon}
            alt="User"
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80 transition-opacity opacity-50"
          />
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuIcon} alt="Menu" className="w-6 h-6 opacity-50" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-[-100%]"
        } transition-transform duration-500 ease-in-out md:hidden bg-white`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <img src={closeIcon} alt="Close" className="w-8 h-8 opacity-30" />
        </button>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center space-y-6 mt-20">
          {["Home", "Gallery", "Shop", "Event"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-pink-300 transition duration-300 cursor-pointer text-lg"
                onClick={() => {
                  handleNavigation(); // Navigate
                  setMenuOpen(false); // Close menu
                }}
                style={{ fontFamily: "'Quintessential', cursive" }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
