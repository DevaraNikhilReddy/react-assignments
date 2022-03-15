import {useDispatch,useSelector} from "react-redux";
import { addMovie,removeMovie } from "../redux/index";
let MovieComp=()=>{
    let numOfMovies=useSelector((state)=>state.movies.numOfMovies);
    let dispatch=useDispatch();
    return <div>
        <h2>Movie Count:{numOfMovies}</h2>
        <button className="btn btn-primary" onClick={()=>dispatch(addMovie())}>Add Movie</button>
        &nbsp;
        <button className="btn btn-warning" onClick={()=>dispatch(removeMovie())}>Remove Movie</button>
    </div>
}
export default MovieComp;