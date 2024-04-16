
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function BagHeader() {
  const { orderclicked } = useSelector((state) => state.fetchStatus);
  return (
    <div className="BagHeader">
      <div className="bagHeaderContainer">
        <div className="leftB">
          <Link to="/">
            <img src="../images\myntra_logo.webp" alt="" className="logoB" />
          </Link>
        </div>

        <div className="centerB">
          <span className={`${orderclicked === 0 ? "activeB" : ""} + {" "} + {"bagB"} `}>BAG</span>----------
          <span className={`${orderclicked === 1 ? "activeB" : ""}`}>ADDRESS</span>----------<span className={`${orderclicked === 2 ? "activeB" : ""}`}>PAYMENT</span>
        </div>

        <div className="rightB">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            className="secureIcon"
            width="26"
            height="28"
          />
          <div className="secure">&nbsp;100% SECURE</div>
        </div>
      </div>
    </div>

  )
}

export default BagHeader