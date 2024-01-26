import React, { useState, useContext } from "react";
import Logo from "../../assets/logo.svg";
import Ring from "../../assets/ring.svg";
import Sun from "../../assets/icons/sun.svg";
import Moon from "../../assets/icons/moon.svg";
import Cart from "../../assets/shopping-cart.svg";
import CartDetail from "../muvilist/cartDetails";
import { MovieContext, ThemeContext } from "../../context";

const Header = () => {
  const { cartData } = useContext(MovieContext);
  const { darkMood, setDarkMood } = useContext(ThemeContext);

  const [showCart, setShowCart] = useState(false);

  const handleCartShow = () => {
    setShowCart(true);
  };
  return (
    <header>
      {showCart && <CartDetail onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMood((darkMood) => !darkMood)}
            >
              <img src={darkMood ? Sun : Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={Cart} width="24" height="24" alt="" />
              {cartData?.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px">
                  {cartData?.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
