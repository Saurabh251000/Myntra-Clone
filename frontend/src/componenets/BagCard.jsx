/* eslint-disable react/prop-types */
import { IoMdCheckmark } from "react-icons/io";
// import { FaClockRotateLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import "../styles/Bag.css";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { useRef } from "react";
function BagCard({ item }) {
  const dispatch = useDispatch();
  const quantity = useRef();

  return (
    <div className="l-Container BagCardContainer">
      <div className="imgContainerB">
        <img src={item.image} alt="" className="img" />
      </div>

      <div className="infoB">
        <div className="brandB Text-2">{item.name}</div>
        <div className="discription Text-2">{item.category}</div>
        <div className="soldBy">Sold by: {item.brand}</div>
        <div className="SizeQty">
          {/* <span className="Size Text-2">Size: M </span> */}
          <span className="Text-2">
            <label htmlFor="dropdown">Qty:</label>
            <select
              id="dropdown"
              name="Qty"
              ref={quantity}
              onClick={() =>
                dispatch(
                  bagActions.updateQty({
                    Qty: quantity.current.value,
                    id: item._id,
                  })
                )
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </span>
        </div>

        <div className="price-box">
          <span className="price">
            Rs. {item.current_price * item.Qty}&nbsp;
          </span>
          <span className="original-price">
            Rs. {item.original_price * item.Qty}&nbsp;
          </span>
          {/* <span className="discount">({item.discount_percentage}% OFF)</span> */}
        </div>

        {/* <div className="return Text">
          <FaClockRotateLeft /> <strong> {item.return_period} days </strong>{" "}
          return available
        </div> */}
        <div className="deliver Text">
          <IoMdCheckmark color="#26BF21" /> Delivery by{" "}
          <strong>{item.delivery_date}</strong>
        </div>
        <button
          className="deleteB"
          onClick={() => dispatch(bagActions.removeItem(item._id))}
        >
          <RxCross2 size={24} color="#5E645D" />
        </button>
      </div>
    </div>
  );
}

export default BagCard;
