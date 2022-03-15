import {ADD_HERO,REMOVE_HERO} from "../types/hero.types";
const initialState ={
    numOfHeroes : 0
};
const heroReducer =(state = initialState,action)=>{
switch(action.type){
    case ADD_HERO : return{
       ...state, numOfHeroes : state.numOfHeroes + 1
    }
    case REMOVE_HERO:return {...state,numOfHeroes:state.numOfHeroes-1
    }
    default : return state
}
}

export default heroReducer;