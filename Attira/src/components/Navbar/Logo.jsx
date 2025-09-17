import React from "react";
import AttiraLogo from "../../assets/AttiraLogo.png";

function Logo() {
  return (
    <div className="size-20 flex justify-center items-center bg-zinc-50 rounded-full overflow-hidden">
      <img src={AttiraLogo} alt="Attira Logo" className="w-full h-full"/>

    </div>
  );
}

export default Logo;
