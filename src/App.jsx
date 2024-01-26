import React, { useState, useContext } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sideBar";
import MuviList from "./components/muvilist";
import { MovieContext, ThemeContext } from "./context/index";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);

  return (
    <div>
      <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <div className={`h-full w-full ${darkMood ? "dark" : ""}`}>
            <Header />
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <MuviList />
            </div>

            <Footer />
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
