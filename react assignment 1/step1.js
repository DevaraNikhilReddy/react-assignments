import React, { Component } from "react";
import { createStore } from "redux";
//--------------------------------------------------
// action
const ADD_HERO = "ADD_HERO";
const REMOVE_HERO = "REMOVE_HERO";
const ADD_MOVIE="ADD_MOVIE";
const REMOVE_MOVIE="REMOVE_MOVIE";
 
// action creator
const addHero = ()=>{
    return {
        type : ADD_HERO
    }
};
const removeHero = ()=>{
    return {
        type : REMOVE_HERO
    }
};
 
const addMovie=()=>{
    return {
        type:ADD_MOVIE
    }
}
const removeMovie=()=>{
    return {
        type:REMOVE_MOVIE
    }
}
// default state
const initialState = {
    numOfHeroes : 0,
    numberOfMovie:0
}
 
// reducers
const heroReducer = ( state = initialState, action)=>{
    switch(action.type){
        case ADD_HERO : return {
            ...state,
            numOfHeroes : state.numOfHeroes + 1
        }
        case REMOVE_HERO : return {
            ...state,
            numOfHeroes : state.numOfHeroes - 1
        }
        case ADD_MOVIE:return{
        ...state,
        numberOfMovie:state.numberOfMovie+1
        }
        case REMOVE_MOVIE:return{
            ...state,
            numberOfMovie:state.numberOfMovie-1
        }
        default : return state
    }
}
 
// store
let store = createStore(heroReducer);
 
// subscribe / unsubscribe
store.subscribe(()=>{
    console.log(store.getState());
});
 
 
// dispatcher
 
 
//--------------------------------------------------
class MainApp extends Component{
    heroCount = React.createRef();
    movieCount=React.createRef();
    render(){
        return <div className="container">
                    <h1>React Redux</h1>
                    <hr/>
                    <h2>Heroes Count : <span ref={ this.heroCount }></span></h2>
                    <button className="btn btn-primary" onClick={ ()=>{
                        store.dispatch( addHero() );
                        this.heroCount.current.textContent = store.getState().numOfHeroes;
                    }}>Add Hero</button>
                    <button className="btn btn-warning" onClick={ ()=>{
                        store.dispatch( removeHero() );
                        this.heroCount.current.textContent = store.getState().numOfHeroes;
                    }}>Remove Hero</button>

                <hr/>
                <h2>Movie Count:<span ref={this.movieCount}></span></h2>
                <button className="btn btn-primary" onClick={()=>{
                    store.dispatch(addMovie());
                    this.movieCount.current.textContent=store.getState().numberOfMovie;
                }}>Add Movie</button>
                  <button className="btn btn-warning" onClick={ ()=>{
                        store.dispatch( removeMovie() );
                        this.movieCount.current.textContent = store.getState().numberOfMovie;
                    }}>Remove Movie</button>
                </div>
    }
}
 
export default MainApp