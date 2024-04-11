/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "../styles/Item.css";
import { RxCross2 } from "react-icons/rx";
import { wishlistActions } from "../store/wishlistSlice";
import { bagActions } from "../store/BagSlice";
import { useState } from "react";
function WishListCard({ item }) {
  const products = useSelector((state) => state.baglist);

  const present = products.filter((product) => product._id === item._id);
  // console.log(present.length);

  const [buy, setbuy] = useState(present.length === 0 ? false : true);

  const dispatch = useDispatch();
  return (
    <div className="Card">
      <div className="imageContainer">
        <img src={item.image} alt="" className="image" />
        <button
          className="dlt-wishlist"
          onClick={() => dispatch(wishlistActions.removeItem(item._id))}
        >
          <RxCross2 />
        </button>
      </div>
      <div className="pinfo">
        <p className="info">{item.name}</p>
        {/* <p className="info">{item.brand}</p> */}
        <div className="price-box">
          <span className="price">Rs. {item.current_price}&nbsp;</span>
          <span className="original-price">
            Rs. {item.original_price}&nbsp;
          </span>
          <span className="discount">({Math.round(((item.original_price - item.current_price) * 100) / item.original_price)}% OFF)</span>
        </div>
      </div>
      <button
        className={`bag-btn ${buy && "added-bag"}`}
        onClick={() => {
          if (!buy) return dispatch(bagActions.addItem(item)), setbuy(true);
        }}
      >
        MOVE TO BAG
      </button>
    </div>
  );
}

export default WishListCard;
