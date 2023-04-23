import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {AiOutlineInstagram} from "react-icons/ai";
import Film from "../Film";
import {LanguageContext} from "../../Context";

const ActorDetails = () => {
    const [actor, setActor] = useState({})
    const {personId} = useParams()
    const [bio, setBio] = useState(300);
const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
     function getOpen (text){
        if (bio === 300){
            return setBio(text.length)
        }else{
            return setBio(300)
        }
    }

    const getActor = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`)
            .then((res) => {
                console.log("RES", res)
                setActor(res.data)
            })
    }
    useEffect(() => {
        getActor(API_KEY)
    }, [language])
    console.log("ACTOR", actor)

    const {profile_path, name, biography, popularity, birthday, place_of_birth, also_known_as, gender } = actor
    return (
        <>
            <div id="actor">
                <div className="container">
                    <div className="actor">
                        <div className="actor--image">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt="img"/>
                            <div  style={{
                                       color: dark ? "black" : "white"
                                   }}className="actor--image__log">
                                <a href="#"><BsFacebook/></a>
                                <a href="#"><BsTwitter/></a>
                                <a href="#"><AiOutlineInstagram/></a>
                            </div>
                            <h3 style={{
                                       color: dark ? "black" : "white"
                                   }}>Персональная информация</h3>
                            <div className="actor--image__known">
                                <h4 style={{
                                       color: dark ? "black" : "white"
                                   }}>Известность за</h4>
                                <p style={{
                                       color: dark ? "black" : "white"
                                   }}>Актёрское искусство</p>
                            </div>
                            <div className="actor--image__avtor">
                                <h4 style={{
                                       color: dark ? "black" : "white"
                                   }}>Известно авторство</h4>
                                <p style={{
                                       color: dark ? "black" : "white"
                                   }}>{Math.trunc(popularity)}</p>
                            </div>
                            <div className="actor--image__pol">
                                <h4 style={{
                                       color: dark ? "black" : "white"
                                   }}>Пол</h4>
                                <p style={{
                                       color: dark ? "black" : "white"
                                   }}>{gender}</p>
                            </div>
                            <div className="actor--image__data">
                                <h4 style={{
                                       color: dark ? "black" : "white"
                                   }}>Дата рождения</h4>
                                <p style={{
                                       color: dark ? "black" : "white"
                                   }}>{birthday}</p>
                            </div>
                            <div className="actor--image__place">
                                <h4 style={{
                                       color: dark ? "black" : "white"
                                   }}>Место рождения</h4>
                                <p style={{
                                       color: dark ? "black" : "white"
                                   }}>{place_of_birth}</p>
                            </div>
                            <div className="actor--image__also">
                                <h4 style={{
                                       color: dark ? "black" : "white"
                                   }}>Также известность как</h4>
                                {
                                    also_known_as?.map((el)=>(
                                        <p style={{
                                       color: dark ? "black" : "white"
                                   }}>{el}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="actor--info">
                            <i>
                                <h1 style={{
                                    color: dark ? "black" : "white"
                                }}>{name}</h1>

                                <h3 style={{
                                    color: dark ? "black" : "white"
                                }}>Биография</h3>
                                {
                                      <div style={{
                                       color: dark ? "black" : "white"
                                   }}><p>{biography?.slice(0,bio)}</p>
                                       <span style={{
                                           color: "#0750ee",
                                           cursor: "pointer",
                                           fontWeight: "500"
                                       }} onClick={()=> getOpen(biography)}>{bio === 300 ? "Читать дальше" : "Закрыть"}</span>
                                   </div>
                                }
                               </i>
                               <h4 style={{
                                   color: dark ? "black" : "white"
                               }}>Известность за</h4>
                                <Film id={personId}/>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default ActorDetails;