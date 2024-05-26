import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";




const Navbar = () => {

  const {logOut, user} = useAuth();

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/about"}>About</Link></li>
      {
        !user && (
          <>
          <li><Link to={"/login"}>Login</Link></li>
      <li><Link to={"/register"}>Register</Link></li>
          </>
        )
      }
      {
        user && (
          <>
        <li><Link to={"/dashboard"}>Dashboard</Link></li>
          </>
        )
      }
      
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">React_core_App</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/about"}>About</Link></li>
      {
        !user && (
          <>
          <li><Link to={"/login"}>Login</Link></li>
      <li><Link to={"/register"}>Register</Link></li>
          </>
        )
      }
      {
        user && (
          <>
          <li><Link to={"/dashboard"}>Dashboard</Link></li>
          </>
        )
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user && (
        <>
      <button onClick={() => {logOut()}} className="btn btn-sm mr-4 bg-red-500 text-white">LogOut</button>
        <div className="avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
        </>
      )
    }
  </div>
</div>
  );
};

export default Navbar;