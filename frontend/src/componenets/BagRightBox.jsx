/* eslint-disable react/prop-types */
import { MdOutlineLocalOffer } from "react-icons/md";

function BagRightBox({ baglist }) {
  let total_current_price = 0;
  let total_original_price = 0;
  baglist.map((item) => {
    total_current_price += item.current_price * item.Qty,
      total_original_price += item.original_price * item.Qty
  })

  return (
    <div className="rightBox">
      <div className="rightContainer">
        <div className="Text">
          <strong>COUPONS</strong>
        </div>
        <div className="copanIcon Text-2 Flex">
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
        <button className="PlaceOrder-btn">PLACE ORDER</button>
      </div>
    </div>
  )
}

export default BagRightBox