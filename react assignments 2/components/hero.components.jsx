import { Component } from "react";
import {connect} from "react-redux";
import { addHero }from "../redux/index.js";

const mapStateToProps =(state) => {
    return{
        numOfHeroes : state.numOfHeroes
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addHero : () =>dispatch(addHero())
    }
}
class HeroComponent extends Component{
    render(){
        return <div>
        <h2>Using React Redux</h2>
        <h3>Number Of Heroes : {this.props.numOfHeroes}</h3>
        <button onClick={this.props.addHero}>Add Hero</button>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroComponent);