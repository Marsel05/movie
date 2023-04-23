import React, {useState, useEffect, useContext} from 'react';
import axios from "axios"
import {API_KEY} from "../../API"
import MovieCard from "../../components/MovieCard";
import {LanguageContext} from "../../Context";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [active, setActive] = useState(1)
const {language} = useContext(LanguageContext)
const getPopular = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${active}`)
            .then((res)=>{
                // window.scroll(0,0)
                setPopular(res.data.results)
            })
}
useEffect(()=>{
    getPopular(API_KEY)
},[active, language])
    console.log(popular)
    return (
        <div id="popular">
          <div className="container">
              <div className="popular">
                  {
                      popular.map((el)=>(
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
                          background: "black",
                          borderRadius: "10px",
                          padding: "10px 20px ",
                          color: "#fff",
                          border: "2px solid red"


                      }} onClick={()=>{
                          setActive(active === 1 ? 1 : active -1)
                      }}>Назад</button>
                      <h1>{active}</h1>
                      <button  style={{
                          background: "black",
                          borderRadius: "10px",
                          padding: "10px 20px ",
                          color: "#fff",
                          border: "2px solid red"

                      }} onClick={()=>{
                          setActive(active + 1)
                      }}>Далее</button>
                      <button onClick={()=>{
                          setActive(1)
                      }} style={{
                          background: "white",
                          borderRadius: "10px",
                          padding: "10px 20px ",
                          color: "#000000",
                          border: "2px solid red"


                      }}>return</button>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Popular;
// import React, {useState, useEffect} from 'react';
// import {API_KEY} from "../../API";
// import axios from "axios";
// import MovieCard from "../../compenents/MovieCard";
// import {upload} from "@testing-library/user-event/dist/upload";
//
// const Popular = () => {
//     const [popular, setPopular] = useState([])
//     const [active, setActive] = useState(1)
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     const getPopular = (key) => {
//         window.scroll(0,0)
//         axios(https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${active})
//     .then((res) => {
//             setPopular(res.data.results)
//         })
//     }
//     useEffect(() => {
//         getPopular(API_KEY)
//     }, [active])
//     console.log(popular)
//
//     return (
//         <div id="popular">
//             <div className="container">
//                 <div className="popular">
//                     {
//                         popular.map((el) => (
//                             <MovieCard el={el}/>
//                         ))
//                     }
//                 </div>
//             </div>
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }}>
//                 <button onClick={() => {
//                     setActive(active === 1 ? 1 : active -1)
//                 }} style={{
//                     color: '#fff',
//                     background: 'blue',
//                     padding: '10px 20px',
//                     margin: '70px 15px 0 0',
//                     borderRadius: '10px',
//                 }}>назад
//                 </button>
//                 <h1 style={{
//                     color: 'white',
//                     margin:'70px 20px 0 20px',
//                     fontSize: '30px'
//                 }}>{active}</h1>
//                 <button onClick={() => {
//                     setActive(active +1)
//                 }} style={{
//                     color: '#fff',
//                     background: 'blue',
//                     padding: '10px 20px',
//                     margin: '70px 15px 0 0',
//                     borderRadius: '10px',
//                 }}>далее</button>
//                 <button onClick={() => {
//                     setActive(1)
//                 }} style={{
//                     color: '#fff',
//                     background: 'blue',
//                     padding: '10px 20px',
//                     margin: '70px 15px 0 0',
//                     borderRadius: '10px',
//                 }}>return</button>
//                 {/*{*/}
//                 {/*    arr.map((btn) => (*/}
//                 {/*        <button onClick={() => {*/}
//                 {/*            setActive(btn)*/}
//                 {/*        }} style={{*/}
//                 {/*            color:'#fff',*/}
//                 {/*            background: 'blue',*/}
//                 {/*            padding: '10px 20px',*/}
//                 {/*            margin: '70px 15px 0 0',*/}
//                 {/*            borderRadius: '10px',*/}
//                 {/*        }}>{btn}</button>*/}
//                 {/*    ))*/}
//                 {/*}*/}
//             </div>
//         </div>
//     );
// };
//
// export default Popular;