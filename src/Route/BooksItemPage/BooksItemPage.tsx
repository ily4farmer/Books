import React, { FC } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { IBook } from '../../types';
import "./BooksItemPage.sass"


const BooksItemPage:FC = () => {
    const {state} = useLocation<IBook>()
    console.log(state.description);
    
    const history = useHistory()

    function goHome() {
        history.push("/")
    }


    return (
        <section key={state.id} className="item">
            <div className="container">
                <div className="item-block">
                    <img className="item__img" src={state.img} alt={state.title} />
                    <h3 className="item__title">
                        Название: {state.title}
                    </h3>
                    <ul className="item__categories">
                        Категория:
                        {state.authors.map(el => <li className="item__categories-item">{el}</li>)}
                    </ul>
                    <ul className="item__categories">
                       Жанр: {state.categories.map(el => <li className="item__categories-item">{el}</li>)}
                    </ul>
                    <p className="item__text">Описание: {state.description}</p>
                    <button className="item__btn" onClick={goHome}>На главную</button>
                </div>
            </div>
        </section>
    )
}

export default BooksItemPage
