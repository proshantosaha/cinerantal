import { createContext } from "react";

const MovieContext = createContext();
const ThemeContext = createContext();

export { MovieContext, ThemeContext };

// import { createContext, useContext } from "react";

// const MovieContext = createContext();

// export const MovieProvider = ({ Chidlren }) => {
//   const [cartData, setCartData] = useState([]);

//   return (
//     <MovieContext.Provider value={{ cartData, setCartData }}>
//       {Chidlren}
//     </MovieContext.Provider>
//   );
// };

// export const MovieCart = () => {
//   return useContext(MovieProvider);
// };
