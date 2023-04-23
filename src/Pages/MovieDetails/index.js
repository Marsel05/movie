import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link, useParams} from "react-router-dom";
import {TfiMenuAlt} from "react-icons/tfi";
import {AiFillHeart} from "react-icons/ai";
import {RxBookmarkFilled} from "react-icons/rx";
import {MdOutlineStar} from "react-icons/md";
import Trailer from "../../components/Trailer";
import {IoMdPlay} from "react-icons/io";
import ActorsCard from "../../components/ActorsCard";
import {LanguageContext} from "../../Context";


const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const [modal, setModal] = useState(false)
    const {language} = useContext(LanguageContext)
    const {movieId} = useParams()
    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`)
            .then((res) => setMovieDetails(res.data))

    }
    useEffect(() => {
        getDetails(API_KEY)
    }, [language])
    console.log(movieDetails)
    console.log(movieId)


    const {
        poster_path,
        title,
        release_date,
        runtime,
        overview,
        production_countries,
        tagline,
        backdrop_path,
        vote_average,
        genres
    } = movieDetails
    return (
        <>
            <div  id="movieDetails" style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}") no-repeat center/cover`,

            }}>
                <div style={{
                    width: "100%",
                    height: "1000px",
                    background: "rgba(21,21,21,0.78)",
                    display: modal ? "block" : "none",
                    position: "fixed",
                    top: "0",
                    zIndex: "99",
                    transition: ".4s"

                }}><h1 onClick={()=>{
                    setModal(false)
                }}  style={{
                    color: "white",
                    position: "absolute",
                    zIndex: "99",
                    right: "155px",
                    top: "70px",
                    cursor: "pointer",
                    transition: ".4s",
                    fontWeight: "500"

                }}>x</h1><div style={{
                    background: "black",
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    margin: "70px 150px 90px 150px",
                    transition: ".4s"

                }}><h2 style={{
                    color: "white",
                    margin: "10px 0 20px 50px",
                    fontWeight: "400"
                }}>Воспроизвести трейлер</h2>
                    <div className="trailer" style={{
                        width: "100%",
                        transition: ".4s"
                    }}><Trailer id={movieId}/></div>
                </div></div>
                <div className="container">

                    <div className="movieDetails">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} width={300}
                             alt="img"/>
                        <div className="movieDetails--info">
                            <h1>{title}</h1>
                            <div className="movieDetails--info__genres">
                                <h4>{release_date}</h4>
                                {
                                    production_countries?.map((el) => (
                                        <h4>({el.iso_3166_1})</h4>
                                    ))
                                }
                                {
                                    genres?.map((el) => (
                                        <h4 className="movieDetails--info__genres__name">{el.name},</h4>
                                    ))
                                }

                                <h4> {Math.floor(runtime / 60)}ч : {runtime % 60}мин </h4>



                            </div>

                            <div className="movieDetails--info--average">
                                <div className="movieDetails--info--average__vote">
                                    {Math.floor(vote_average * 10)}<span>%</span>
                                </div>
                                <h4>Рейтинг</h4>
                                <div className="movieDetails--info--average--circle">
                                    <Link><TfiMenuAlt/></Link>
                                </div>
                                <div className="movieDetails--info--average--circle">
                                    <Link><AiFillHeart/></Link>
                                </div>
                                <div className="movieDetails--info--average--circle">
                                    <Link><RxBookmarkFilled/></Link>
                                </div>
                                <div className="movieDetails--info--average--circle">
                                    <Link><MdOutlineStar/></Link>
                                </div>
                                <div className="movieDetails--info--average--play">
                                    <IoMdPlay/>
                                    <h4 onClick={()=>{
                                       setModal(true)

                                    }}>Воспроизвести трейлер</h4>
                                </div>
                            </div>

                            <h3 className="movieDetails--info__tagline">{tagline}</h3>
                            <h5 className="movieDetails--info__obzor">Обзор</h5>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ActorsCard id={movieId}/>
            <Trailer id={movieId}/>
        </>

    );
};

export default MovieDetails;