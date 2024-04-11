/* eslint-disable react/prop-types */
import { CiDiscount1 } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

import BagCard from "../componenets/BagCard";

function BagleftBox({ baglist }) {
  const [seeMore, setseeMore] = useState(true);
  return (
    <div className="leftBox">
      <div className="l-Container">
        <div className="address">
          <div className="address-title Text">
            <div className="addressName">
              Deliver to: <strong>Saurabh Kushwaha</strong>
            </div>
            <div className="address-subText">
              A-439, Rajiv Bhawan, IIT Roorkee - 247667
            </div>
          </div>
          <button className="btn-address">CHANGE ADDRESS</button>
        </div>
      </div>

      <div className="l-Container">
        <div className="offer">
          <CiDiscount1 size={22} />
          &nbsp;&nbsp; Available offers
        </div>
        <div>
          <ul className="Text Discounts" style={{ listStyleType: "disc" }}>
            <li className="offerlist Text">
              7.5% Instant Discount on every spends with Myntra Kotak
            </li>
            <li className={`offerlistv Text ${seeMore && "Hide"}`}>
              Up to ₹200 Cashback on Paytm UPI Transactions on a minimum spend
              of ₹1,000. TCA
            </li>
            <li className={`offerlistv Text ${seeMore && "Hide"}`}>
              Up to ₹1,000 Cashback on CRED pay UPI (Android Devices only) on a
              minimum spend of ₹1,000. TCA
            </li>
            <li className={`offerlistv Text ${seeMore && "Hide"}`}>
              Flat ₹30 Cashback on Freecharge UPI (Android Devices only) on a
              minimum spend of ₹1,999. TCA
            </li>
            <li className={`offerlistv Text ${seeMore && "Hide"}`}>
              Up to ₹250 Cashback on First ever Simpl Transaction on Myntra on a
              minimum spend of ₹1,499. TCA
            </li>
            <li className={`offerlistv Text ${seeMore && "Hide"}`}>
              Get ₹150 Brand Voucher on minimum spend of ₹1,000 with Payzapp
              wallet
            </li>
            <li className={`offerlistv Text ${seeMore && "Hide"}`}>
              Flat ₹75 Cashback on First Ever Mobikwik Wallet transaction on
              Myntra on a min spend of ₹999. Use Code MBKNEW on Mobikwik. TCA
            </li>
            <li className={`offerlistv Text ${seeMore && "Hide"}`}>
              <span>
                Get upto 15% Cashback on Mobikwik Wallet transaction on a min
                spend of ₹1,500. Use Code MBK15 on Mobikwik. TCA
              </span>
            </li>
            <li className={`offerlistv Text ${seeMore && "Hide"}`}>
              Flat ₹100 on Airtel Payments Bank transactions on a min spend of
              ₹1,000. TCA
            </li>
          </ul>
          {seeMore ? (
            <button
              className="btnML Show-More"
              onClick={() => setseeMore(false)}
            >
              Show More
              <IoIosArrowDown fill="rgb(255, 63, 108)" />
            </button>
          ) : (
            <button
              className="btnML Show-Less"
              onClick={() => setseeMore(true)}
            >
              Show Less
              <IoIosArrowUp fill="rgb(255, 63, 108)" />
            </button>
          )}
        </div>
      </div>

      <div className="strip">
        <div className="selected">{baglist.length} Items Selected</div>
        <div className="movetowishlist">
          <span className="remove">REMOVE</span>
          <span>MOVE TO WISHLIST</span>
        </div>
      </div>
      {baglist.map((item) => (
        <BagCard key={item._id} item={item} />
      ))}

      {/* <BagCard /> */}
    </div>
  );
}

export default BagleftBox;
