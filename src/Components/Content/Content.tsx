import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { IBook } from '../../types';
import ContentItem from '../ContentItem/ContentItem'
import "./Content.sass"


interface IContensProps {
    books: any[]
}


const Contens: FC<IContensProps> = ({books}) => {
    
    const booksItems:IBook[] = books.map(el => ({
        id: el.id,
        title: el.volumeInfo.title,
        categories: el.volumeInfo.categories,
        authors: [...el.volumeInfo.authors],
        img: el.volumeInfo.imageLinks.thumbnail,
        description: el.volumeInfo.description
    }));

    console.log(booksItems);
    
    
    
    return (
        <section className="content">
            <div className="container">
                <ul className="content__list">
                    {booksItems.map(el => 
                        <Link key={el.id} to={{pathname: `/books/:${el.id}`, state:{...el}}}>
                            <ContentItem  categories={el.categories} img={el.img} authors={el.authors} title={el.title}/>
                        </Link> )}
                </ul>
            </div>
        </section>
    )
}

export default React.memo(Contens)
