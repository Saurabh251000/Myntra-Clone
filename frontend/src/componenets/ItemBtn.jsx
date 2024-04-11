/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Item.css";
import { GoHeart } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { wishlistActions } from "../store/wishlistSlice";

function ItemBtn({ item }) {
  const products = useSelector((state) => state.wishlist);

  const present = products.filter((product) => product._id === item._id);
  // console.log(present.length);

  const [btnDdark, setbtnDark] = useState(present.length === 0 ? false : true);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className={`wishlist-btn ${btnDdark && "btn-dark"}`}
        onClick={() => {
          if (!btnDdark)
            return dispatch(wishlistActions.addItem(item)), setbtnDark(true);
        }}
      >
        {btnDdark ? <FaHeart size={20} fill="red" /> : <GoHeart size={20} />}
        &nbsp; WISHLIST
      </button>
      <p className="Sizes">Catgory: {item.category}</p>
    </div>
  );
}

export default ItemBtn;
/*
const person = [{ name: "Bill" }, { age: 44 }];
const val = { name: "Bill" };
console.log(person.some((item) => shallowEqualityCheck(item, val))); // true
*/
