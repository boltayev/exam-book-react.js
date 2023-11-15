import "./BooksBlock.scss"
import { Link } from "react-router-dom"


import Books from "../../../../images/book.png"
import Heart from "../../../../images/heard_white.png"

function BooksBlock({id, title, img, rate, author, date}){
    function cutting(){
        let tit = title
        if(tit.length >= 27){
            return tit.split('').splice(0, 27).join('') + '...'
        } else return tit;
   }
    // const[bookImg, bookTitle, bookAuthor, bookCreatedAt, bookRate, bookLike] = props
    return(
        <div className="parent__block">
            <div className="books-1">
            <div className="book-content">
                <div><img src={img} alt="books" /></div>
                <div className="book_name">{cutting()}  </div>
                <span>{author}, {date}</span>
                <div className="number">
                    <span>{rate}/5</span> 
                    <img src={Heart} alt="heart" />
                </div>
                <div className="buttons">
                    <Link to={`/home/books/${id}`} className="info">Info</Link>
                    <button className="read">Read</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default BooksBlock