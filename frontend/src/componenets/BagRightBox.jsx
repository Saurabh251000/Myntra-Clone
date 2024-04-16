/* eslint-disable react/prop-types */
import { MdOutlineLocalOffer } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import axios from 'axios';
function BagRightBox({ baglist }) {
  let total_current_price = 0;
  let total_original_price = 0;
  baglist.map((item) => {
    total_current_price += item.current_price * item.Qty,
      total_original_price += item.original_price * item.Qty
  })
  const dispatch = useDispatch();
  const { orderclicked } = useSelector((state) => state.fetchStatus);
  const { name, email, mobile } = useSelector((state) => state.profile);

  const HandleOnclick = async (amount) => {
    if (orderclicked < 2) {
      dispatch(fetchStatusActions.markOrderclicked())
    }
    else {
      const { data: { order } } = await axios.post("http://localhost:8000/api/payment/checkout", { amount });
      const { data: { key } } = await axios.get("http://localhost:8000/api/payment/getKey");
      console.log(order);

      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: "Myntra",
        description: "Test Transaction",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png",
        order_id: order.id,
        callback_url: "https://localhost:8000/api/payment/verify",
        prefill: {
          name: name,
          email: email,
          contact: mobile,
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#ff3f6c"
        }
      };
      const razor = new window.Razorpay(options);
      razor.open();

    }

  }

  return (
    <div className="rightBox">
      <div className="rightContainer">
        <div className="Text" style={orderclicked === 2 ? { display: "none" } : {}}>
          <strong>COUPONS</strong>
        </div>

        <div className="copanIcon Text-2 Flex" style={orderclicked === 2 ? { display: "none" } : {}}>
          <span>
            <MdOutlineLocalOffer size={24} /> <span>Apply Coupons</span>
          </span>
          <button className="apply-btn">APPLY</button>
        </div>
        <hr color="#eaeaec" />
        <div className="detail Text">
          <strong>PRICE DETAILS ({baglist.length} Items)</strong>
        </div>
        <div className="MRP Text-2 Flex">
          <span>Total MRP</span>
          <span>₹{total_original_price}</span>
        </div>
        <div className="MRPDiscount Text-2 Flex">
          <span>
            Discount on MRP <strong> Know More</strong>
          </span>
          <span className="free">-₹{total_original_price - total_current_price}</span>
        </div>
        <div className="CouponDiscount Text-2 Flex">
          <span>Coupon Discount</span>
          <span className="copanD">Apply Coupon</span>
        </div>
        <div className="PlatformFee Text-2 Flex">
          <span>
            Platform Fee <strong> Know More </strong>
          </span>
          <span>₹20</span>
        </div>
        <div className="shipping Text-2 Flex">
          <span>
            Shipping Fee <strong>Know More</strong>
          </span>
          <span className="free">FREE</span>
        </div>
        <hr color="#eaeaec" />
        <div className="TotalAmount Text-2 Flex">
          <b>Total Amount</b>
          <b>₹{total_current_price + 20}</b>
        </div>
        <button className="PlaceOrder-btn" onClick={() => HandleOnclick(total_current_price + 20)}>{orderclicked === 2 ? "PAY NOW" : "PLACE ORDER"}</button>
      </div>
    </div>
  )
}

export default BagRightBox