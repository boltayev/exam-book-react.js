import "./ErrorPages.scss"

import {Link} from "react-router-dom"

function ErrorPages(){
    return(
        <div className="error">
            <div className="numbers">404</div>
            <div  className="found">Oops! That page can’t be found</div>
            <div  className="maybe">The page you are looking for it maybe deleted</div>
            <Link to="/sign-in" className="button" > Go To Home</Link>
        </div>
    )
}

export default ErrorPages