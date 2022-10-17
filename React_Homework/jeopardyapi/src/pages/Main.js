import { Link } from "react-router-dom";

export default function Main ()
{
return (
    <div >
       <h1 className="score txt">Welcome to Jeopardy!</h1>
       <div  className="playbtn" >
        <Link to='/play'>
            <button className="homebtn">Play</button>
        </Link>
        </div>
    </div>
)

  };