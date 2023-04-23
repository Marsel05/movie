import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import {API_KEY} from '../../API';
import tv from "../../img/tv.png"
import mobile from "../../img/mobile-0819.jpg"
import box from "../../img/boxshot.png"


const Home = () => {
    const [home, setHome] = useState([]);

    const getHome = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-RU&page=1`)
            .then((res) => {
                setHome(res.data.results)
            })
    };

    useEffect(() => {
        getHome(API_KEY);
    }, []);
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 0,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"
    // };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    console.log(home)
    return (
        <div style={{
            background: "black"
        }} id="home">
            <div className="container2">
                <button>Подписаться</button>
                <div className="home">

                    <Slider {...settings}>
                        {
                            home.map((el) => (
                                <div className="home--img">
                                    <img style={{
                                        cursor: "pointer",
                                        opacity: "60%",
                                        zIndex: "99"

                                    }}
                                        src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${el.backdrop_path}`} alt="img"/>
                                </div>
                            ))
                        }
                    </Slider>
                    <div className="home--title">
                        <h1>Фильмы, сериалы и многое другое без <br/> ограничений.</h1>
                        <h3>Смотрите где угодно. Отменить подписку можно в любое время.</h3>
                        <h4>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</h4>
                        <div className="home--bg"></div>
                    </div>
                    <input type="text" className="home--input" placeholder="Адрес электронной почты"/>
                </div>
                <div className="movie">
                    <div className="movie--title">
                        <h1>Смотрите на <br/> телевизоре.</h1>
                        <h4>Смотрите на Smart TV, PlayStation, Xbox, <br/> Chromecast, Apple TV, плеерах Blu-ray и <br/> других устройствах.</h4>
                    </div>
                            <div className="movie--iframe">
                                <iframe className="movie--iframe" width="360" height="209" src={`https://www.youtube.com/embed/QfzJk1u-3M8`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>

                    <img src={tv} alt=""/>
                     </div>
                <div className="mobile">
                    <img src={mobile} alt=""/>
                    <div className="mobile--delo">
                        <img src={box} alt=""/>
                        <div className="mobile--delo__box">
                            <h4>Очень странные <br/> дела <br/> <span>Идет загрузка...</span> </h4>
                        </div>

                    </div>

                    <div className="mobile--title">
                        <h1>Загружайте <br/> сериалы для <br/> просмотра офлайн.</h1>
                        <h4>Сохраняйте видео в избранном, и у вас <br/> всегда будет, что посмотреть.</h4>
                    </div>
                    </div>
            </div>
        </div>
    );
};


export default Home;


// import React, {useEffect, useState} from 'react';
// // import bg from "../Home/bg.png"
// import {useParams} from "react-router-dom"
// import axios from "axios";
// import {API_KEY} from "../../API";
// import Slider from "react-slick";
// const Home = () => {
//     const [home, setHome] = useState([])
//     const {movieId} = useParams()
//     const getHome = (key) =>{
//         axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=ru-RU`)
//             .then((res)=> setHome(res.data))
//     }
//     console.log(home)
//     useEffect(()=>{
//         getHome(API_KEY)
//     })
//
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
//     return (
//         <div id="home">
//             <div className="container">
//                 <div className="home">
// <Slider {...settings}>
//     <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${home.backdrop_path}`} width={500} alt="img"/>
// </Slider>
//                 </div>
//             </div>
//         </div>
//         <div id="home">
//
//             <img src={bg} alt=""/>
//             <div className="container">
//
//                 <div className="home">
//                     {/*<Slider{...settings}>*/}
//
//
//                     {/*</Slider>*/}
//                     <h1>Фильмы, сериалы и многое другое без <br/> ограничений.</h1>
//                     <h3>Смотрите где угодно. Отменить подписку можно в любое время.</h3>
//                     <button>Подписаться</button>
//
//                     <div className="home--bg"></div>
//                 </div>
//                 <input type="text" className="home--input" placeholder="Адрес электронной почты"/>
//
//             </div>
//         </div>
//     );
// };

// export default Home;


// import React, {useState} from 'react';
//
// const Home = () => {
//     const [counter, setCounter] = useState(0)
// const [status, setStatus] = useState(false)
// const [status2, setStatus2] = useState(false)
//
//     return (
//         <div>
//             <div className="counter">
//                 <h2>{counter}</h2>
//
//             <button style={{
//                 padding: "10px 20px",
//                 background:  status === true ? "red" : "green",
//                 borderRadius: "10px",
//                 cursor: "pointer"
//             }} onClick={()=>{
//                 setCounter(counter + 1)
//                 setStatus(true)
//                 setStatus2(false)
//             }}>increment</button>
//
//             <button style={{
//                 padding: "10px 20px",
//                 background: status2 === true ? "red" :  "green",
//                 borderRadius: "10px",
//                 cursor: "pointer"
//             }} onClick={() =>{
//                 setCounter(counter- 1)
//                 setStatus2(true)
//                 setStatus(false)
//             }}>decrement</button>
//             </div>
//
//             <h1>Home</h1>
//         </div>
//     );
// };
//
// export default Home;