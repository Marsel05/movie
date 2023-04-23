import React, {useEffect, useState} from 'react';
import axios from "axios"
import {API_KEY} from "../../API";
import MovieCard from "../../components/MovieCard";

const TopRated = () => {
    const [topRated, setTopRated] = useState([])
   const [active,setActive] = useState(1)
    const getTopRated = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ru-US&page=${active}`)
            .then((res) => {
                window.scroll(0,0)
                setTopRated(res.data.results)
            })
    }

    useEffect(() => {
        getTopRated(API_KEY)
    }, [active])
    console.log(topRated)

    return (
      <div id="popular">
          <div className="container">
              <div className="popular">
                  {
                      topRated.map(el =>(
                          <MovieCard el={el}/>
                      ))
                  }

                  <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin:" -60px  0 20px 0"
                  }}>
                      <button style={{
                          background: "blue",
                          borderRadius: "10px",
                          padding: "10px 20px ",
                          color: "#fff"

                      }} onClick={()=>{
                          setActive(active === 1 ? 1 : active -1)
                      }}>Назад</button>
                      <h1>{active}</h1>
                      <button  style={{
                          background: "blue",
                          borderRadius: "10px",
                          padding: "10px 20px ",
                          color: "#fff"

                      }} onClick={()=>{
                          setActive(active + 1)
                      }}>Далее</button>
                      <button onClick={()=>{
                          setActive(1)
                      }} style={{
                          background: "black",
                          borderRadius: "10px",
                          padding: "10px 20px ",
                          color: "#fff"
                      }}>return</button>
                  </div>


              </div>
          </div>
      </div>
    );
};

export default TopRated



