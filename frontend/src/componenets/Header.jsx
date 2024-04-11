import "../styles/Header.css";
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const baglist = useSelector((state) => state.baglist);
  const { islogin } = useSelector((store => store.profile));
  return (
    <div className="header">
      <div className="leftC">
        <div className="logoContainer">
          <Link to="/">
            <img src="../images\myntra_logo.webp" alt="" className="logo" />
          </Link>
        </div>
        <div className="Navbar">
          <div className="name">MEN</div>
          <div className="name">WOMEN</div>
          <div className="name">KIDS</div>
          <div className="name">HOME & LIVING</div>
          <div className="name">BEAUTY</div>
          <div className="name ">
            STUDIO
            <div className="new">NEW</div>
          </div>
          <div className="navItems">
            <div className="navItem">
            </div>
          </div>

        </div>
      </div>
      <div className="rightC">
        <div className="serach_query">
          <div className="search">
            <IoSearchOutline />
          </div>
          <div className="input_container">
            <input
              type="text"
              className="input"
              placeholder="Search for products, brands and more"
            />
          </div>
        </div>
        <div className="action">
          <Link to={islogin ? "/pinfo" : "/profile"}>
            <div className="profile action_name">
              <BsPerson size={20} /> <span>Profile</span>
            </div>
          </Link>
          <Link to="/wishlist">
            <div className="wishlist action_name">
              <CiHeart size={20} />
              <span>Wishlist</span>
            </div>
          </Link>
          <Link to="/bag">
            <div className="bag action_name">
              <HiOutlineShoppingBag size={20} /> <span>Bag</span>
              <span className="bag_item ">{baglist.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
