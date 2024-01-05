import React from "react";

function NavBar() {
  return (
    <div className="flex  items-center justify-between px-5 shadow-lg p-4">
      <img src="/images/logo.svg" alt="" width={180} />
      <div className=" flex ">
        <button className="p-3 rounded-full bg-pink-600 hover:bg-pink-400 duration-700 text-white">
          Try It Free
        </button>
      </div>
    </div>
  );
}

export default NavBar;
