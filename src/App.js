import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Popular from "./Pages/Popular";
import TopRated from "./Pages/TopRated";
import MovieDetails from "./Pages/MovieDetails";
import ActorDetails from "./components/ActorDetails";
import Search from "./Pages/Search";
import SearchFooter from "./Pages/SearchFooter";
import {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false)

  return (
    <div style={{
        background: darkMode ? "grey" : "url(https://images.wallpaperscraft.ru/image/single/linii_shtrihi_piatna_137329_3240x5760.jpg) no-repeat center/cover",
    }} className="App">
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routes>
            <Route path={"/"} element={ <Home/> } darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Route path={"/popular"} element={ <Popular/> } darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Route path={"/topRated"} element={ <TopRated/> } darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Route path={"/movie/details/:movieId"} element={ <MovieDetails/> } darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Route path={"/actor/details/:personId"} element={ <ActorDetails/> } darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Route path={"/search/search_movie/:movieName"} element={<Search/>} darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Route path={"/search/search_movie/:movieName"} element={<SearchFooter/>} darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Route path={"/*"} element={<Home/>} darkMode={darkMode} setDarkMode={setDarkMode}/>

        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
