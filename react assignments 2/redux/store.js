import {createStore} from "redux";
import heroReducer from "./hero/reducers/hero.reducers";
import movieReducer from "./movie/reducers/movie.reducers";
import { combineReducers } from 'redux'
const store = createStore(combineReducers({
    heroes:heroReducer,
    movies:movieReducer
}));

export default store;