import React, { Component } from "react";
import HeroComponent from "./components/hero.components.jsx";
import {Provider} from "react-redux";
import store from "./redux/store";
import HeroHookComponent from "./components/hero.component.hook.jsx";
import MovieComp from "./components/movie.component.hook.jsx";
class MainApp extends Component{
    heroCount = React.createRef();
    render(){
        return <div className="container">
                    <h1>React Redux</h1>
                    <hr/>
                    <Provider store={store}>
                        {/* <HeroComponent/> */}
                        <HeroHookComponent/>
                        <MovieComp/>
                    </Provider>
                    
                </div>
    }
}
 
export default MainApp;