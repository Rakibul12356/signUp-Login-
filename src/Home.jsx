import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const Home = () => {
   const { user,logOut } = useAuth()
   console.log(user)
  
  return (
    <div>
      <h3 className="text-2xl text-center">This is Home page</h3>
      {user?<><button className="btn" onClick={logOut}>Sign Out</button></>:<><Link to='/login'>Login</Link></>}
      
      
      <Outlet />
    </div>
  );
};

export default Home;
