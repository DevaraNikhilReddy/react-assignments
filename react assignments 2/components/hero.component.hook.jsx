import {useDispatch,useSelector} from 'react-redux';
import {addHero,removeHero} from '../redux/index';
let HeroHookComponent=()=>{
    let numberOfHeros=useSelector(function(state){ return state.heroes.numOfHeroes});
    let dispatch=useDispatch();
    return <div>
        <h2>Using React Redux with hook</h2>
        <h3>Number of Heros {numberOfHeros}</h3>
        <button onClick={()=>dispatch(addHero())}>Add Hero</button>
        <button onClick={()=>dispatch(removeHero())}>Remove Hero</button>
    </div>
}
export default HeroHookComponent;