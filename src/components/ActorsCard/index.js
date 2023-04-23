import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Slider from "react-slick"
import {API_KEY} from "../../API";
import user from "../../img/user.png"
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";

const ActorsCard = ({id}) => {
    const [actors, setActors] = useState([])
    const {dark} = useContext(LanguageContext)
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then((res) => setActors(res.data.cast))
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    console.log(actors)
    return (
        <div id="actors">
            <div className="container">
                <h3 style={{
                    color: dark ? "black" : "white"
                }}>В главных ролях</h3>
                <div className="actors">
                    <Slider {...settings}>
                        {
                            actors.map((el) => (
                                <div className="actors--card">
                                    {
                                        el.profile_path ? <Link to={`/actor/details/${el.id}`}><img
                                                src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}
                                                width={160} alt=""/></Link>
                                            : <img src={user} width={200} alt=""/>
                                    }

                                    <h3 style={{
                                       color: dark ? "black" : "white"
                                   }}>{el.name}</h3>
                                    <h5 style={{
                                       color: dark ? "black" : "white"
                                   }}>{el.character}</h5>
                                </div>
                            ))
                        }
                    </Slider>

                </div>
            </div>
        </div>
    );
};

export default ActorsCard;