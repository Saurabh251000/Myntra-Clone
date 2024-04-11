import '../styles/BagEmpty.css'
import { Link } from 'react-router-dom'
function BagEmpty() {
  return (
    <>
      <div className="emptyC">
        <div className="emptyCsubcontainer">
          <img className="emptyImg" src="../images\empty-bag.webp" alt="Error in Loading" />
          <p className="subtitle">Hey, It feels so light!</p>
          <p>There is nothing in your bag. Let&#39;s add some items.</p>
          <Link to={'/wishlist'} className='Add-btnn'>ADD ITEMS FROM WISHLIST</Link>
        </div>

      </div>
    </>
  )
}

export default BagEmpty