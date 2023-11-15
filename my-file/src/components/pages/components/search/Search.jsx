import "./Search.scss"

import {useState} from "react"

import Icon from "../../../../images/iconc_search.png"

function Search({searchTitle}){
	let [search, setSearch] = useState('')

	const onSearch = (e) => {
		setSearch(() => {
			return e.target.value
		})	
		searchTitle(search)
	}
    return(
        <div className="search">
            <input type="text" placeholder="Search" onChange={onSearch} />
            {/* <div className="searchBook">Search</div> */}
            <div className="search_iconc">
                <div><img src={Icon} alt="searchIcon" /></div>
            </div>
        </div>
    )
}

export default Search