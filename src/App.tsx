import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BooksItemPage from './Route/BooksItemPage/BooksItemPage'
import Main from './Route/Main/Main'

const App:FC = () => {

  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path={`/books/:id`} exact component={BooksItemPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App