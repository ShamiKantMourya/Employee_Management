import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

const Navbar = () => {
  const {user} = useSelector((state) => state.user);
  return (
    <div>
        <h2>Welcome {user.username}</h2>
        <Link to="/user/dashboard">Dashboard</Link>
        <div>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar;