import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import MovieCard from "../../components/MovieCard";

const Search = () => {
    const [search, setSearch] = useState([])
    const getSearch = (key) =>{
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res)=>{
                setSearch(res.data.results)
            })
    }
    const {movieName} = useParams()
    useEffect(()=>{
    getSearch(API_KEY)
    }, [search])
    console.log(search)
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        search.map((el)=>(
                                <MovieCard el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
// https://api.themoviedb.org/3/movie/343611?api_key={api_key}&append_to_response=videos