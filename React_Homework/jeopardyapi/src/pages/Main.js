import { Link } from "react-router-dom";

export default function Main ()
{
return (
    <div  className="playbtn" >
       
        <Link to='/play'>
            <button className="homebtn">Play</button>
        </Link>
    </div>
)

  };