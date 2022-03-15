import { ADD_MOVIE,REMOVE_MOVIE } from "../types/movie.types";
const movieinitialState ={
    numOfMovies : 0
};
const movieReducer =(state = movieinitialState,action)=>{
switch(action.type){
    case ADD_MOVIE : return{
       ...state, numOfMovies : state.numOfMovies + 1
    }
    case REMOVE_MOVIE:return {...state,numOfMovies:state.numOfMovies-1
    }
    default : return state
}
}

export default movieReducer;