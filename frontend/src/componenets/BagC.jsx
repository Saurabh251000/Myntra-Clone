/* eslint-disable react/prop-types */

import BagRightBox from "../componenets/BagRightBox";
// import BagHeader from "../componenets/BagHeader";
// import Address from "./Address";

import BagleftBox from "./BagleftBox";


const BagC = ({ baglist }) => {
  return (
    <>
      <div className="bodyB">
        <div className="bodyLayout">
          <BagleftBox baglist={baglist} />
          {/* <Address /> */}
          <BagRightBox baglist={baglist} />
        </div>
      </div>
    </>
  )
}

export default BagC