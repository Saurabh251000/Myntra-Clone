import '../styles/Profile.css';
import { Form, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function SignUp() {
  const navigate = useNavigate();
  const HandleonSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const postData = Object.fromEntries(formData);

    // Now you can proceed with your axios.post() or fetch() logic

    axios.post("http://localhost:8000/api/users/signup", JSON.stringify(postData), {
      headers: { "Content-Type": "application/json" },
    }).then(res => {
      if (res.data.Status === "Success") {
        navigate("/profile/sign-in");
      }
      else {
       alert(res.data.Error);
      }
    }).then(err => console.log(err));

  };

  return (
    <div className="LoginBox">
      <div className="TitleL">Create Account</div>
      <Form method='POST' onSubmit={HandleonSubmit}>
        <div className="LabelC">
          <label htmlFor="name" className='Label'>Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="LabelC">
          <label htmlFor="email" className='Label'>Email ID</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="LabelC">
          <label htmlFor="password" className='Label'>Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        {/* <div className="LabelC">
          <label htmlFor="dob" className='Label'>D.O.B</label>
          <input type="text" name="dob" id="dob" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} required />
        </div> */}
        <div className="LabelC">
          <label htmlFor="mobile" className='Label'>Mobile No.</label>
          <input type="tel" name="mobile" id="mobile" pattern="[0-9]{10}" required />
        </div>

        <button type='submit' className='SignIn'>REGISTER</button>

        <div className="accountS">
          Have Account? &nbsp;<Link to={"/profile/sign-in"}> <span> Sign In </span></Link>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;


// export async function FormAction(data) {
//   const formData = await data.request.formData();
//   const postData = Object.fromEntries(formData);
//   // console.log(postData);
//   const post = await fetch("http://localhost:8081", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(postData),
//   }).then((res) => res.json()).then(res => console.log(res)).then(err => console.log(err));

//   console.log(post);
// }