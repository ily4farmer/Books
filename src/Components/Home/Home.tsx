import React, { FC } from 'react';
import "./Home.sass";


const Home:FC = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home-block">
                    <h1 className="home__title">LitWare</h1>
                    <p className="home__subtitle">Найди нужную для тебя книгу</p>
                </div>
            </div>
        </section>
    )
}

export default Home
