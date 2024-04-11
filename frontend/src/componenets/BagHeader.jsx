
import { Link } from "react-router-dom";
function BagHeader() {
  return (
    <div className="BagHeader">
      <div className="bagHeaderContainer">
        <div className="leftB">
          <Link to="/">
            <img src="../images\myntra_logo.webp" alt="" className="logoB" />
          </Link>
        </div>

        <div className="centerB">
          <span className="bagB activeB">BAG</span>----------
          <span>ADDRESS</span>----------<span>PAYMENT</span>
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