import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const [searchF, setSearchF] = useState("")
    const nav = useNavigate()
const input =  (e) =>{
        if (e.key === "Enter"){
            nav(`/search/search_movie/${searchF}`)
        }
}
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                 <div><h4>Есть вопросы? Свяжитесь с нами.</h4></div>
                    <div className="footer--search">
                    <input onKeyDown={(e)=>{
                        input(e)
                    }} onChange={(event)=>{

                        setSearchF(event.target.value)
                    }} type="text" placeholder="Поиск фильмов для просмотра"/>
                    <button onClick={()=>{
                        nav(`/search/search_movie/${searchF}`)
                    }}>Search</button>
                </div>
                    <div className="footer--menu">
                        <div>
                            <a href="/">Распространенные вопросы</a>
                            <a href="/">Медиацентр</a>
                            <a href="/">Способы просмотра</a>
                            <a href="/">Настройки файлов cookie</a>
                            <a href="/">Проверка скорости</a>
                        </div>
                        <div>
                            <a href="/">Центр поддержки</a>
                            <a href="/">Для инвесторов</a>
                            <a href="/">Правила использования</a>
                            <a href="/">Корпоративная информация</a>
                            <a href="/">Юридические уведомления</a>
                        </div>
                        <div>
                            <a href="/">Аккаунт</a>
                            <a href="/">Вакансии</a>
                            <a href="/">Конфиденциальность</a>
                            <a href="/">Свяжитесь с нами</a>
                            <a href="/">Только на Netflix</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;