import "./BookSmall.scss"

import Bookss from "../../../../images/book_small_sign.png"

function BookSmall(){
	return (
		<div className='books__small'>
			<img src={Bookss} alt='book small' />
			<h3>Don’t Make Me think</h3>
			<h4>Steve Krug, 2000</h4>
			<p>4.5/5</p>
		</div>
	)
}

export default BookSmall