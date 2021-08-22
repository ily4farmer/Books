import React, { FC, useEffect, useRef } from 'react'
import "./FormSearch.sass"


interface IFormSearchProps {
    value: string
    inputHandler(e: React.ChangeEvent<HTMLInputElement>): void
    getBooks(e: React.MouseEvent<HTMLFormElement>): void
    selectHandler(e: React.ChangeEvent<HTMLSelectElement>): void
}

const FormSearch:FC<IFormSearchProps> = ({ selectHandler, value, inputHandler, getBooks }) => {
    const ref = useRef<HTMLInputElement | null>(null)

    useEffect(()=>{
        ref.current?.focus()
    }, [])

    return (
        <section className="form">
            <div className="container">
                <form className="form-block" onSubmit={getBooks} action="#">
                    <div className="form__header">
                        <input ref={ref} value={value} className="form__input" onChange={inputHandler} type="text" placeholder="Введите название книги"/>
                        <input className="form__submit" type="submit" value="Отправить" />
                    </div>
                    <div className="form__footer">
                        <select className="form__select" onChange={selectHandler} name="select">
                            <option value="">All</option>
                            <option value="history">History</option>
                            <option value="medical">Medical</option>
                            <option value="poetry">Poetry</option>
                        </select>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormSearch
