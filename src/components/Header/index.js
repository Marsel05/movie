import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import tmd from "../../img/netflix.png"
import {MdLanguage} from "react-icons/md";
import {LanguageContext} from "../../Context";

const Header = ({darkMode, setDarkMode}) => {
    const [search, setSearch] = useState("")
    const {setLanguage} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const nav = useNavigate()
    const input = (e) => {
        if (e.key === "Enter") {
            nav(`/search/search_movie/${search}`)
        }
    }
    return (
        <div style={{
            background: dark ? "#9b9999" : "black"
        }} id="header">
            <div className="container">
                <div className="header">
                    <img src={tmd} width={180} alt="img"/>

                    <div className="header--nav">
                        <NavLink to={"/"} className="header--nav__link">Home</NavLink>
                        <NavLink to={"/popular"} className="header--nav__link">Popular</NavLink>
                        <NavLink to={"/topRated"} className="header--nav__link">Top Rated</NavLink>
                    </div>
                    <div style={{
                        width: "70px",
                        height: "25px",
                        background: dark ? "transparent" : "white",
                        borderRadius: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space_between",
                        padding: "0 7px",
                        border: "2px solid #fff"
                    }} className="darkMode">
                        <div onClick={() => {
                            setDarkMode(true)
                            setDark(true)
                        }} style={{
                            background: dark ? "white" : "black",
                            borderRadius: "50%",
                            transition: ".5s",
                            cursor: "pointer",
                            width: '20px',
                            height: "20px",
                            transform: dark ? "translate(55px)" : "translate(0)"
                        }}></div>

                        <div onClick={() => {
                            setDarkMode(!darkMode)
                            setDark(!dark)
                        }} style={{
                            background: "transparent",
                            borderRadius: "50%",
                            transition: ".5s",
                            cursor: "pointer",
                            width: "20px",
                            height: "20px",
                            transform: dark ? "translateX(37.9px)" : "translateX(0)"
                        }}></div>
                    </div>
                    <div className="header--btn">
                        <select style={{
                            outline: "none"
                        }} className="header--language" onChange={(e) => setLanguage(e.target.value)}>
                            <option style={{
                                color: "black",
                                outline: "none",
                            }} value="en-Us">English</option>
                            <option style={{
                            color: "black",
                            outline: "none",
                        }} value="ru-RU"><MdLanguage/>Русский</option>
                            <option style={{
                                color: "black",
                                outline: "none",
                            }} value="fr-FR">France</option>
                        </select>
                        <div className="header--input">
                            <input type="text" placeholder="Search"
                                   onKeyDown={(e) => {
                                       input(e)

                                   }}
                                   onChange={(event) => {
                                       // console.log(e.target.value)
                                       setSearch(event.target.value)
                                   }}/>
                            <button onClick={() => {
                                nav(`/search/search_movie/${search}`)
                            }}>Search
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;