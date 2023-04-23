import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../components/MovieCard";

const SearchFooter = () => {
    const [searchF, setSearchF] = useState([])
    const {movieName} = useParams()

    const getSearchF = (key) =>{
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res)=>{
                setSearchF(res.data.results)
            })
    }
    useEffect(()=>{
        getSearchF(API_KEY)
    }, [searchF])
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        searchF.map((el)=>{
                            <MovieCard el={el}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchFooter;