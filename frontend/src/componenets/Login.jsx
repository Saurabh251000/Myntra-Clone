import '../styles/Profile.css'
import { Form, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { ProfileActions } from '../store/ProfileSlice';
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const HandleonSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const postData = Object.fromEntries(formData);

    // Now you can proceed with your axios.post() or fetch() logic
    axios.post("http://localhost:8000/api/users/login", JSON.stringify(postData), {
      headers: { "Content-Type": "application/json" },
    }).then(res => {
      if (res.data.Status === "Success") {
        // console.log(res.data);
        dispatch(ProfileActions.LoginState());
        dispatch(ProfileActions.Updateinfo(res.data));
        navigate("/");
      }
      else {
        alert(res.data.Error);
      }
    }).then(err => console.log(err));

  };

  return (
    <div className="LoginBox">
      <div className="TitleL">Login</div>
      <Form method='POST' onSubmit={HandleonSubmit}>

        <div className="LabelC">
          <label htmlFor="email" className='Label'>Email ID</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="LabelC">
          <label htmlFor="password" className='Label'>Password</label>
          <input type="password" name="password" id="password" />
        </div>


        <button type='submit' className='SignIn' >LOG IN</button>

        <div className="accountS">
          Need Account? &nbsp;<Link to={"/profile/sign-up"}> <span> Sign Up </span></Link>
        </div>


      </Form>
    </div>
  )
}

export default Login;

// export async function FormActionL(data) {
//   const formData = await data.request.formData();
//   const postData = Object.fromEntries(formData);
//   console.log(postData);
// }