
import '../styles/Profile.css';
import { Outlet } from "react-router-dom";

function Profile() {

  return (
    <div className="PContainer">
      <Outlet />
    </div>
  )
}

export default Profile;