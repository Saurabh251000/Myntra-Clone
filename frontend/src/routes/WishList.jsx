// import { useLoaderData } from "react-router-dom";
import WishListCard from "../componenets/WishListCard";
import "../styles/ProductList.css";
import { useSelector } from "react-redux";
function WishList() {
  // const items = useLoaderData();
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <div className="wishlistbody">
      <div className="mywishlist_Title">
        My Wishlist <span>({wishlist.length}) Items</span>
      </div>
      <div className="wishlistContainer">
        {wishlist.map((item) => (
          <WishListCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default WishList;
