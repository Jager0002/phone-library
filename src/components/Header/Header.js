import React from "react";
import { Link } from "react-router-dom";
import { CustomLink } from "../CustomLink/CustomLink";

import "./Header.css";

const Header = () => {
  return (
    <div className="bg-zinc-200 sticky top-0">
      <div className="items-center w-11/12 mx-auto h-20 font-thin flex justify-between">
        <div>
          <Link to="/">
            <h2>Macbook Air</h2>
          </Link>
        </div>
        <div className="flex gap-x-4">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/DashBoard">DashBoard</CustomLink>
          <CustomLink to="/Reviews">Reviews</CustomLink>
          <CustomLink to="/Blog">Blog</CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
