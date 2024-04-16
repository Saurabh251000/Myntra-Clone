// import { useLoaderData } from "react-router-dom";
import WishListCard from "../componenets/WishListCard";
import "../styles/ProductList.css";
import { useSelector } from "react-redux";
function WishList() {
  // const items = useLoaderData();
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <div className="wishlistbody">
      <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_NyxM1BXWnykODX" async> </script> </form>
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
