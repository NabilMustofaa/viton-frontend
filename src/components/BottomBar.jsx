import React from "react";
import { Link } from "react-router-dom";
import { FiBookOpen,FiHome } from "react-icons/fi";

function BottomBar (){
  // http://localhost:5173/outfits/07732_00
  if( window.location.pathname === "/" ){
    return(
      <div className="flex flex-row justify-around items-center border-t-2 border-gray-300 bottom-0 fixed w-full p-3 text-gray-500 bg-white">
          <Link to="/home" className="flex flex-col items-center bottom-bar-item text-gray-900">
              <FiHome size={24} />
              <span>Home</span>
          </Link>
          <Link to="/favorites" className="flex flex-col items-center bottom-bar-item">
              <FiBookOpen size={24}  />
              <span>Favoritos</span>
          </Link>
      </div>
  )
  }

  return(
    <div className="flex flex-row justify-around items-center border-t-2 border-gray-300 bottom-0 fixed w-full p-3 text-gray-500 bg-white">
        <Link to="/" className="flex flex-col items-center bottom-bar-item">
            <FiHome size={24} />
            <span>Home</span>
        </Link>
        <Link to="/favorites" className="flex flex-col items-center bottom-bar-item">
            <FiBookOpen size={24}  />
            <span>Favoritos</span>
        </Link>
    </div>
  )
}

export default BottomBar;