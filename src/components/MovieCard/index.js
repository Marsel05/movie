import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";

const MovieCard = ({el}) => {
    const {dark} = useContext(LanguageContext)
    return (
        <div className="popular--card">
            <Link to={`/movie/details/${el.id}`} >
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/>
            </Link>
            <h2 style={{
                color: dark === true ? "black" : "white"
            }}>{el.title}</h2>
            <p style={{
                color: dark ? "white" : "red"
            }}>Дата выхода:{el.release_date}</p>
        </div>
    );
};

export default MovieCard;