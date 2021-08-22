import React, { FC } from 'react'
import { IBook } from '../../types'
import "./ContentItem.sass"


const ContentItem:FC<IBook> = ({ img, title, authors, categories }) => {
    
    return (
        <li className="content__item">
            <div className="content__header">
                <img className="content__img" src={img} alt={img} />
                <h3 className="content__title">{title}</h3>
            </div>
            <div className="content__footer">
                {authors.map(el => <p>- {el}</p>)}
                <p>{categories[0]}</p>
            </div>
        </li>
    )
}

export default ContentItem
