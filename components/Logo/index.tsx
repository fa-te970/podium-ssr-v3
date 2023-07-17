import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img src={logo} alt="podium logo" />
      </a>
    </Link>
  );
};

export default Logo;
