/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import BagRightBox from "../componenets/BagRightBox";
// import BagHeader from "../componenets/BagHeader";
import Address from "./Address";

import Payment from "./payment";

import BagleftBox from "./BagleftBox";


const BagC = ({ baglist }) => {

  const { orderclicked } = useSelector((state) => state.fetchStatus);


  return (
    <>
      <div className="bodyB">
        <div className="bodyLayout">
          {orderclicked === 1 ? (
            <Address />
          ) : orderclicked === 2 ? (
            <Payment />
          ) : (
            <BagleftBox baglist={baglist} />
          )}

          <BagRightBox baglist={baglist} />
        </div>
      </div>
    </>
  )
}

export default BagC