import React, { useState, ChangeEvent, FC, Fragment, MouseEvent } from 'react'
import { useDispatch } from 'react-redux';
import Content from '../../Components/Content/Content';
import FormSearch from '../../Components/FormSearch/FormSearch';
import Home from '../../Components/Home/Home';
import Loader from '../../Components/Loader/Loader';
import { useTypeSelector } from '../../Store';
import { IResponse } from '../../types';

const Main:FC = () => {

    const [query, setQuery] = useState<string>(''),
    [select, setSelect] = useState<string>(''),
    dispatch = useDispatch(),
    {books, loading} = useTypeSelector(state => state.books)

    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value)
    console.log(select);
    }    

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    }

    const getBooks = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(query === '') {
        return false
    }
    dispatch({type: "FETCH__BOOKS"})
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${select}&maxResults=40`)
    .then(response => response.json() as Promise<IResponse>)
    .then(response => {
        console.log(response);
        const arrBooks = response.items.filter(el => el.volumeInfo.authors !== undefined && 
        el.volumeInfo.authors.length > 0 &&
        el.volumeInfo.authors !== undefined && 
        el.id !== undefined && 
        el.volumeInfo.categories !== undefined &&
        el.volumeInfo.imageLinks !== undefined &&
        el.volumeInfo.description !== undefined)
        dispatch({type: "FETCH__BOOKS__SUCCESS", payload: arrBooks})
    })
    .catch(error => dispatch({type: "FetchBooksErrorAction", payload: error}))
    }

    if (loading) {
    return (<Fragment>
                <FormSearch selectHandler={selectHandler} value={query} getBooks={getBooks} inputHandler={inputHandler}/>
                <Loader/> 
            </Fragment>)
    }



    return (
        <Fragment>
            <FormSearch selectHandler={selectHandler}  value={query} getBooks={getBooks} inputHandler={inputHandler}/>
            {books.length === 0 ? <Home/> : <Content books={books}/>}
        </Fragment>
    )
}

export default Main
