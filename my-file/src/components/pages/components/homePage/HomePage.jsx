import "./HomePage.scss"

import Navbar from "../navbar/Navbar"
import Search from "../search/Search"
import { useState, useEffect,useContext } from "react"
import BooksBlock from "../booksBlock/BooksBlock"
import getInfo from "../../../../servises/Service"


function HomePage(){
	let [data, setData] = useState([])
	let [input, setInput] = useState('')
	useEffect(() => {
		getInfo('https://owabooks.vercel.app/db.json').then(data => {
			setData(
				data?.filter(value => {
					return value.title.toLowerCase().includes(input.toLowerCase())
				})	
			)
		})
	}, [data])

	const searchTitle = title => {
		return setInput(title)
	}
    return(
        <main>
            <div className="main_container">
                <Navbar />
                <div className="books_block">
                    <Search searchTitle={searchTitle} />
                    <div className="books">
                        {
                        data?.map((element) => {
                            return <BooksBlock
                            img = {element.img}
                            title = {element.title}
                            author = {element.author}
                            date = {element.createdAt}
                            rate = {element.rate}
                            like = {element.like}
                            id = {element.id}
                            />
                        })
                    }
                        
                        </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage