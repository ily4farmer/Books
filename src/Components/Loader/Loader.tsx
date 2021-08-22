import React,  { FC } from 'react';
import "./Loader.scss"

const Loader:FC = () => {
    return (
        <div className="loader">
            <div className="lds-hourglass"></div>
        </div>
    )
}

export default Loader
