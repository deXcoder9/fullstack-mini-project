import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link className="btn btn-ghost text-xl " to="/"  >daisyUI</Link>
      
    </div>
    <div className="flex-none gap-2">
      <ul
      className="mr-7 hidden lg:flex space-x-5 underline cursor-pointer "
      >
        <li><a>Home</a></li>
        <li><a>Products</a></li>
        <li><a>Contact</a></li>
        <Link to="/authentication" >Sign up</Link>
      </ul>
      
    </div>
  </div>
  );
};

export default Navbar;
