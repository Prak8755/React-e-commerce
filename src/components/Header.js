import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getLoggedInUser} from '../service/user';

const Header = () => {

const auth=getLoggedInUser()
  const navigate = useNavigate();
  
  function handleLogout() {
   localStorage.removeItem('login')
  navigate("/login");
  }

  return (
    <>
      <div className="flex justify-around text-2xl">
        <h1>LOGO</h1>
        {auth?(
          <ul className="flex gap-4 justify-center items-center">
            <Link to="/">HOME</Link>
            <Link to="/products">PRODUCTS</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/login" onClick={handleLogout}>
              LOGOUT
            </Link>
          </ul>):(
            <ul className="flex gap-4">
              <Link to='/login'>Login</Link>
              <Link to='signup'>Sign up</Link>
            </ul>
          )
         }
      </div>

      <Outlet />
    </>
  );
};

export default Header;




