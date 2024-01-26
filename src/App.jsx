import React, { useState, useContext, useReducer } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sideBar";
import MuviList from "./components/muvilist";
import { MovieContext, ThemeContext } from "./context/index";
import { cartReducer, initialState } from "./reducer/cardReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [darkMood, setDarkMood] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <div className={`h-full w-full ${darkMood ? "dark" : ""}`}>
            <Header />
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <MuviList />
            </div>

            <Footer />
          </div>
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
