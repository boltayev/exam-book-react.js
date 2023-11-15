import "./Header.scss"
import {Link} from "react-router-dom"
import OWaLight from "../../images/owa_ligt.svg"
import OWaDark from "../../images/owa_dark.svg"
import Suun from "../../images/suun.svg"
import Moon from "../../images/moon.png"
// import Owa from "../../images/owa_images.png"
import { useState } from "react"


function Header(){
	const [mode, setMode] = useState(localStorage.getItem('mode') === 'true' || false)  
    const changeTheme = () => {
    document.body.classList.toggle('dark')
    setMode(!mode)
    localStorage.setItem('mode', !mode)
  }


    return(
        <div className="header_block">
            {
                  !mode ? <img src={OWaLight} alt="mode"/> :
                    <img src={OWaDark} alt="mode" />
                }
            
            {/* <div><img src={Owa} alt="owa_img"  /></div> */}
            <nav>
                {
                    !mode ? <img src={Moon} alt="mode" onClick={changeTheme}/> : 
                    <img src={Suun} alt="mode" onClick={changeTheme}/>
                }
                {/* <div><img src={Moon} alt="moon" onClick={changeTheme}/></div> */}
                <Link to="home/" className="button
                ">Log out</Link>
            </nav>
        </div>
    )
}

export default Header