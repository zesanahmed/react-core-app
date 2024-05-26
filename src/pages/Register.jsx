import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  const {createUser,user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if(password !== confirm_password){
      setPassMatch(false);
    }
    console.log(email,password,confirm_password)

    if(password === confirm_password){
      createUser(email,password);
      if(user){
        navigate(from);
      }
    }

  }
    return (
        <div className="hero min-h-screen bg-base-200 lg:px-24">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
           type="email" 
           name="email"
           placeholder="email" 
           className="input input-bordered" 
           required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password" 
          name="password"
          placeholder="password" 
          className="input input-bordered" 
          required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input 
          type="password" 
          name="confirm_password"
          placeholder="Confirm password" 
          className="input input-bordered" 
          required />
        </div>
        {!passMatch && (
          <div className="my-2">
            <p className="text-red-500">Password do not match!</p>
          </div>
        )
        }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className="mt-6">
                <p>
                  Already have an account? {" "}
                  <Link to={"/login"} className="text-red-500">
                  Login
                  </Link>
                </p>
              </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;