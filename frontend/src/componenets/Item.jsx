/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Item.css";
// import { FaStar } from "react-icons/fa";
import ItemBtn from "./ItemBtn";
import ItemInfo from "./ItemInfo";

function Item({ item }) {
  const [mouseEnter, setMouseEnter] = useState(false);
  // console.log(item);
  return (
    <div
      className="cardContainer"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <div className="imgContainer">
        <img src={item.image} alt="" className="image" />
        {/* <div className="rating">
          <span>{item.rating.stars}</span> <FaStar color="green" size={12} />
          <span>&nbsp;| {item.rating.count}</span>
        </div> */}
      </div>
      <div className="product">
        {mouseEnter ? <ItemBtn item={item} /> : <ItemInfo item={item} />}
        <div className="price-box">
          <span className="price">Rs.{item.current_price}&nbsp;</span>
          <span className="original-price">{item.original_price}&nbsp;</span>
          {/* <span className="original-price">Rs. {(item.original_price - item.original_price) * 100 / item.original_price}&nbsp;</span> */}
          <span className="discount">({Math.round(((item.original_price - item.current_price) * 100) / item.original_price)}% OFF)</span>
        </div>
      </div>
    </div>
  );
}

export default Item;


