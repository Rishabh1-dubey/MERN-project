import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-black mt-2">
      <img className="w-[190px]  "
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
      />

      <div className="flex gap-4 mr-5">
        <div>Rishabh fav</div>
        <div>Logout</div>
        <div>Serach Movie</div>
      </div>
    </div>
  );
};

export default Header;
