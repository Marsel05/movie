import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";
import kino from "../../img/film.jpg"

const Film = ({id}) => {
    const [film, setFilm] = useState([])
    const {dark} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    const getFilm = (key) =>{
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
            .then((res)=> setFilm(res.data.cast))
    }
    useEffect(()=>{
    getFilm(API_KEY)
    }, [language, dark])
    console.log(film)
    return (

        <div id="film">
            <div className="film">
                {
                    film.map((el)=>(
                        <div className="film--card">
                            {
                             el.poster_path ? <Link to={`/movie/details/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img"/>
                                </Link> : <img src={kino}  alt="img"/>
                            }

                            <h5 style={{
                                color: dark ? "black" : "white"
                            }}>{el.title}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
// https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US
export default Film;