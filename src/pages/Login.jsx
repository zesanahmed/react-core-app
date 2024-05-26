import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";

const Login = () => {

  const {signIn, user} = useAuth();
  const navigate = useNavigate();
  const location = useNavigate();

  const from = location?.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password);
    if(user) {
      navigate(from);
    }
  }
    return (
        <div className="hero min-h-screen lg:px-24 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
                 placeholder="email" 
                 className="input input-bordered" 
                 name="email"
                 required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                 type="password"
                 placeholder="password"
                 className="input input-bordered"
                 name="password"
                 required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                className="btn bg-red-500 text-white"
                 type="submit"
                 value="Login"
                  />
              </div>
              <div className="form-control">
              <GoogleLogin/>
              </div>
              <div className="mt-6">
                <p>
                  New here? {" "}
                  <Link to={"/register"} className="text-red-500">
                  Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;