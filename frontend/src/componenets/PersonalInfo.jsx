// import ProductList from "../routes/ProductList";
import '../styles/Profile.css';
import { IoIosPerson } from "react-icons/io";
import { IoMail, IoCall } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProfileActions } from '../store/ProfileSlice';
function PersonalInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pdata = useSelector((store => store.profile));


  const handleOnclick = () => {
    // console.log("logOut clicked");
    dispatch(ProfileActions.LoginState());
    navigate("/profile/sign-in");
  }
  return (
    <>
      <div className="PerInfo">
      </div>
      <div className="Pbox">
        <div className="infor">
          <IoIosPerson size={220} color='#f259' />
          <div className='user'>{pdata.name}</div>
          <div> <IoMail size={25} color='#f259' /> {pdata.email}</div>
          <div> <IoCall size={25} color='#f259' /> +91-{pdata.mobile}</div>
        </div>
        <button className="logout" onClick={handleOnclick}>
          LOG OUT
        </button>
      </div>
    </>

  )
}

export default PersonalInfo