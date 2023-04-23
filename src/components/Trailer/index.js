import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";

const Trailer = ({id}) => {
    const [video, setVideo] = useState([])
    const getVideo = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res)=> setVideo(res.data.results))
    }
    useEffect(()=>{
        getVideo(API_KEY)
    }, [])
    console.log(video)
    return (
        <div id="video">
            <div className="container">
                <div className="video">
                    {
                        video.slice(0,9).map((el)=>(
                            <div className="video--iframe">
                                <iframe className="video--iframe" width="353" height="280" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="Аватар 2: Путь воды 💥 Официальный дублированный Фильм IMAX 4K 💥 Фильм 2022"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailer;