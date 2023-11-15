
import "./SignPages.scss"
import BookSmall from "../components/bookSmall/BookSmall"
import { Link } from "react-router-dom"


import Vector from "../../../images/vector_back.png"
import Book from "../../../images/sign_book.png"
import Message from "../../../images/message.png"
import Notes from "../../../images/notes.png"
import Share from "../../../images/share.png"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Radio from "../../../images/radio.png"
import Star from "../../../images/star.png"
import Locatsy from "../../../images/locatsy.png"
import Earpots from "../../../images/earpots.png"
import Man from "../../../images/man.png"



function SignPages(){
    const [data, setData] = useState([])
    const { postId } = useParams();
    useEffect(() => {
        fetch('https://owabooks.vercel.app/db.json')
        .then(res => res.json())
        .then(data => {
            setData([data[postId - 1]])
        })
    }, [postId])
    return(
        <div className="sign_pages">
            <div className="back">
                <img src={Vector} alt="vector" />
                <Link  to='/home' className="back_to">Back to results</Link>
            </div>

            <div className="three_block">
                <div className="book_share">
                    <div><img src={data[0]?.img} alt="sign_book" /></div>
                    <div className="share_me">
                        <div className="messages">
                            <img src={Message} alt="message" />
                            <span>Review</span>
                        </div>

                        <div className="notes">
                            <img src={Notes} alt="notes" />
                            <span>Notes</span>
                        </div>

                        <div className="share">
                            <img src={Share} alt="share" />
                            <span>Share</span>
                        </div>
                    </div>
                </div>

                <div className="comentary">
                    <h1>Don’t Make Me Think </h1>
                    <div className="name">By <span>{data[0]?.author},</span> 2000</div>
                    <div className="second">Second Edition </div>

                    <div className="star">
                        <div><img src={Star} alt="star" /></div>
                        <div className="rating">4.0 Ratings</div>
                        <div className="reading">25 Currently reading</div>
                    </div>

                    <div className="aviabilet_status">
                        <div className="aviabilet">
                            <h3>Availability</h3>
                            <div className="hard">
                                <img src={Radio} alt="radio" />
                                <p>Hard Copy</p>
                            </div>
                            <div className="he_book">
                                <img src={Radio} alt="radio" />
                                <p>E - Book</p>
                            </div>
                            <div className="audio_book">
                                <img src={Radio} alt="radio" />
                                <p>Audio book</p>
                            </div>
                        </div>

                        <div className="status">
                            <h3>Status</h3>
                            <div className="shelf">In-Shelf</div>
                            <div className="locatsy">
                                <img src={Locatsy} alt="locatsy" />
                                <div className="loc"> CS A-15</div>
                            </div>
                        </div>

                    </div>

                    <div className="borro">
                        <buton className="borrow">BORROW</buton>
                        <div className="rednow">
                            <button className="red">Red Now</button>
                            <button className="pots"><img src={Earpots} alt="earpots" /></button>
                        </div>
                    </div>

                </div>

                <div className="about_yours">
                    <div className="yours">
                        <div className="namee">
                            <div className="about">About <span>Author</span> </div>
                            <div className="man_name">{data[0]?.author}</div>
                        </div>
                        <div className="man_images"><img src={Man} alt="man" /></div>
                    </div>

                     <p>Steve Krug is a usability consultant 
                        who has more than 30 years of experience 
                        as a user advocate for companies like
                         Apple, Netscape, AOL, Lexus, and others.
                          Based in part on the success of his
                           first book, Don't Make Me Think, he
                            has become a highly sought-after
                             speaker on usability design.</p>   
                

                    
                </div>
            </div>

            <div className="paragrif">
                <h4>Description</h4>
                <p>Steve Krug is a usability consultant who has more 
                    than 30 years of experience as a user advocate 
                    for companies like Apple, Netscape, AOL, Lexus,
                     and others. Based in part on the success of his
                      first book, Don't Make Me Think, he has become
                       a highly sought-after speaker on usability design.
                        Steve Krug is a usability consultant who has 
                        more than 30 years of experience as a user 
                        advocate for companies like Apple, Netscape, 
                        AOL, Lexus, and others. Based in part on the
                         success of his first book, Don't Make Me Think, 
                         he has become a highly sought-after speaker on
                          usability design. Steve Krug is a usability 
                          consultant who has more than 30 years of experience
                           as a user advocate for companies like Apple,
                            Netscape, AOL, Lexus, and others. Based in 
                            part on the success of his first book, Don't 
                            Make Me Think, he has become a highly
                             sought-after speaker on usability design.
                              Steve Krug is a usability consultant who 
                              has more than 30 years of experience as a 
                              user advocate for companies like Apple,
                               Netscape, AOL, Lexus, and others. Based in 
                               part on the success of his first book, 
                               Don't Make Me Think, he has become a highly
                                sought-after speaker on usability design.</p>
            </div>

            <section className='bottom_books'>
                <div>
                    <h2>
                        Other <span>Books</span>
                    </h2>
                    <div className='books_small'>
                        <BookSmall />
                        <BookSmall />
                        <BookSmall />
                        <BookSmall />
                        <BookSmall />
                        <BookSmall />
                        <BookSmall />
                    </div>
                </div>
			</section>

        </div>



    
    )
}

export default SignPages