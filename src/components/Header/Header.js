import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-zinc-200">
      <div className="items-center w-11/12 mx-auto h-20 font-thin flex justify-between">
        <div>
          <Link to="/">
            <h2>Macbook Air</h2>
          </Link>
        </div>
        <div className="flex gap-x-4">
          <Link to="/">Home</Link>
          <Link to="/DashBoard">DashBoard</Link>
          <Link to="/Reviews">Reviews</Link>
          <Link to="/Blog">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
