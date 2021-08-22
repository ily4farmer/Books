import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { booksReducer } from "./booksReducer";

const reducer = combineReducers({
    books: booksReducer
})


type RootState = ReturnType<typeof reducer>

export const store = createStore(reducer, composeWithDevTools()) 

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector