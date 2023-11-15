import "./Navbar.scss"
import Book from "../../../../images/book_small.png"
import Hoop from "../../../../images/heart_red.png"

function Navbar(){
    return(
        <div className="nav_block">
            <h2>BookMarks</h2>
            <div className="nav">
                <div><img src={Book} alt="book" /></div>
                <div className="book_name">
                    <div>Don't Make Me</div>
                    <span>Syeve Krug</span>
                    <div><img src={Hoop} alt="llll" /></div>
                </div>
            </div>

            <div className="nav">
                <div><img src={Book} alt="book_small" /></div>
                <div className="book_name">
                    <div>Don't Make Me</div>
                    <span>Syeve Krug</span>
                    <div><img src={Hoop} alt="heart" /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar